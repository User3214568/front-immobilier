import { useState } from "react";
import { Navigate } from "react-router-dom";
import { roles } from "../../../Enums/Enums";
import AuthServices from "../../../services/AuthServices/AuthServices";
import AdminDashboard from "../../Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../../Dashboard/UserDashboard/UserDashboard";
import NavBar from "../../Navbar/NavBar";
import TopBar from "../../TopBar/TopBar";

export default function Login(props) {
    const [cred , setCred] = useState({email : '' , password : ''})
    const [auth , setAuth] = useState(null)
    const updateField = (key,value)=>{
        cred[key] = value
        setCred(cred)
    }

    const seConnecter = ()=>{
        new AuthServices().login(cred).then(res=>{            
            if(res){
                console.log(res)
                setAuth(res)
            }
        })
    }

    return (
        <>
        { auth && <Navigate to='/dashboard'></Navigate>}
        <TopBar/>
        <NavBar/>
        <div className="row m-5 justify-content-center ">
            <div className="col-lg-5 col-md-7  col-sm-12 ">
                <div className="appoinment-wrap mt-5 mt-lg-0">
                    <h2 className="mb-2 title-color">Acceder à Votre Compte</h2>
                    <p className="mb-4">Connectez-vous à votre compte et bénificiez de nos fonctionnalitées.</p>
                    <form id="#" className="appoinment-form" method="post" action="#">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input name="email" id="email" type="text" className="form-control" placeholder="Votre E-mail" onChange={(e)=>{updateField('email',e.target.value)}} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input name="password" id="pass" type="password" className="form-control" placeholder="Votre mot de Passe" onChange={(e)=>{updateField('password',e.target.value)}} />
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-main btn-round-full" onClick={seConnecter} >Se Connecter<i className="icofont-simple-right ml-2  " ></i></button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}