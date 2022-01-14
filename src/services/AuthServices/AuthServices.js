
import axios from "axios";
import { authHeader } from "../Credentials";
import UserServices from "../UserServices/UserServices";

export default class AuthServices {

    async login(creds) {


        const cre = {
            username: creds.email ,
            password: creds.password
        }

        return axios.post(process.env.REACT_APP_BACK_URL + "authenticate", cre).then(res => {
            localStorage.setItem("token", res.data.token)
            let infos  = new UserServices().connectedUser()
            console.log('token has been set');
            return infos.then(res=>{
                console.log('user infos has been retrieved')
                return res.role
            })
        }).catch(err => {
            console.log(err)
        })
        

    }

    async signup(account) {
        try{
            console.log(account)
    
            return axios.post(process.env.REACT_APP_BACK_URL+"add-compte",account).then(res=>{
                return true
            }).catch(err=>{

            })
            return false
        }catch(e){

        }
        return null
    }
    
    static async isAuth() {
        try{
            return new UserServices().connectedUser().then(res=>{
                localStorage.setItem("user-info",JSON.stringify(res))
                return res.role
            }).catch(err=>{
                return false;
            })
            return false;
        }catch(e){
            return null
        }
    }
    static authHeader(){
        let token = localStorage.getItem("token")
        return  { headers: {"Authorization" : `Bearer ${token}`} }
    }
    signout(){
        localStorage.removeItem("user-info")
        localStorage.removeItem("token")
    }
}