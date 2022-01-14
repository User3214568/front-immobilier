import axios from "axios"
import AuthServices from "../AuthServices/AuthServices"

export default class ReservationServices{
    async reserver(id){
        /* add-reservation */
        console.log('reservatop '+id )
        let userInfo = JSON.parse(localStorage.getItem("user-info"))
        if(userInfo){

            let reservation = {
                reserveAnnonce : {
                    id_annonce : id
                },
                utilisateur : {id : userInfo.id}
            }
            
            console.log(reservation)
            
            axios.post(process.env.REACT_APP_BACK_URL+"add-reservation",reservation,AuthServices.authHeader()).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    async cancelReservation(id){
        console.log('reservatin anuller : '+id)
        /*"delete-reservation/"
        axios.put(process.)*/
        axios.put(process.env.REACT_APP_BACK_URL+"delete-reservation/"+id,{},AuthServices.authHeader()).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    async getMyReservations(){
        let userInfo = JSON.parse(localStorage.getItem("user-info"))
        console.log('mt resv : ',userInfo)
        //return userInfo.reservations
        return axios.get(process.env.REACT_APP_BACK_URL + "annonces",AuthServices.authHeader()).then(res=>{
            console.log('al : ',res.data)
            let d =  res.data.map(res=>{
                if(res.location === null ){
                    res.location = {ville : '' , address : ''}
                }
                return res
            })
            console.log('after filter')
            const reservations = []
            d= d.filter(an=>{
                let res = null

                an.reservation.forEach(element => {
                    userInfo.reservations.forEach(e=>{
                        if(element.id_Reservation == e.id_Reservation){
                            res = {
                                id_Reservation : e.id_Reservation,
                                annonce : an
                            }
                            reservations.push(res)
                        }

                    })
                });
                if(res) return res
            })
            return reservations
        }).catch(err=>{
            console.log('err get annonces')
            return []
        })
        
    }
}