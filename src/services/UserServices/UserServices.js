import axios from "axios"
import AuthServices from "../AuthServices/AuthServices"

export default class UserServices {

    async getAll(){
        return axios.get(process.env.REACT_APP_BACK_URL+"utilisateurs",AuthServices.authHeader()).then(res=>{
            return res.data
        }).catch(err=>{
            return []
        })
      
    }
    async deleteUser(id){
        console.log('user deleted '+id)
        axios.put(process.env.REACT_APP_BACK_URL+"delete-utilisateur/"+id,{},AuthServices.authHeader()).then(res=>{
            console.log(res)
        }).catch(e=>{
            console.log(e)
        })
    }
    async connectedUser() {
        try {
            return  axios.get(process.env.REACT_APP_BACK_URL + "infos",AuthServices.authHeader()).then(res => {
                return res.data
            }).catch(err => {
                return null;
            })
        } catch (e) {
            return null;
        }
        return null;
    }

}