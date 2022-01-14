import axios from "axios"
import AuthServices from "../AuthServices/AuthServices"
import {getOperationIndex,getImmobleIndex, getOperationsByIndex} from '../../Enums/Enums'
export default class AnnonceServices {

    async addAnnonce(annonce){
        try{
            console.log(annonce)
            return axios.post(process.env.REACT_APP_BACK_URL + "add-annonce",annonce,AuthServices.authHeader()).then(res=>{
                return res.data
            }).catch(err=>{
                return false
            })
        }catch(e){
            return false
        }
    }
    async getAll(){
        return axios.get(process.env.REACT_APP_BACK_URL + "annonces",AuthServices.authHeader()).then(res=>{
            console.log('al : ',res.data)
            return res.data.map(res=>{
                if(res.location === null ){
                    res.location = {ville : '' , address : ''}
                }
                return res
            })
        }).catch(err=>{
            console.log('err get annonces')
            return []
        })
       
    }
    async getMyAnnonce(){
        let userInfo = JSON.parse(localStorage.getItem("user-info"))
        return userInfo.annonces
    }
    async reserver(id){
    }
    async cancelReservation(id){
        console.log('reservatin anuller : '+id)

    }
    
    async delete(id) {

        console.log('deleted acnnonce : ',id)
        
        axios.put(process.env.REACT_APP_BACK_URL+"delete-annonce/"+id,{},AuthServices.authHeader()).then(res=>{

        }).catch(err=>{

        })
    }
    async validate(id){ console.log('validated.')}
    async update(post){}
    
    emptyAnnonce(){
        return {
            titre: '',
            typeOperation: '',
            description: '',
            photos: [],
            prix: '',
            typeAnnonce: '',
            location: { ville: '', address: '' }
        }
    } 







    

}