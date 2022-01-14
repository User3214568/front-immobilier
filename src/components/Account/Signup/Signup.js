import { useState } from "react"
import { Navigate } from "react-router-dom"
import AuthServices from "../../../services/AuthServices/AuthServices"

export default function Signup(props) {
    const [cred, setCred] = useState({ nom: '', prenom: '', date_naissance: '', numero_tele: '', cin: '', compte: { email: '', mot_de_pass: '' } , role : 'UTILISATEUR' })
    const [auth, setAuth] = useState(null)
    const updateField = (value, key, subkey) => {
        if (subkey) {
            cred[key][subkey] = value
        } else {
            cred[key] = value
        }
        setCred(cred)
    }

    const Signup = () => {
        let authService = new AuthServices()
        authService.signup(cred).then(res => {
            if(res){
                authService.login({email : cred.compte.email , password : cred.compte.mot_de_pass}).then(res=>{
                    if(res){
                        setAuth(res)
                    }
                })
            }
        })
    }

    return (
        <>
            {auth && <Navigate to='/dashboard'></Navigate>}

            <div className="col-lg-6 col-md-10 ">
                <div className="appoinment-wrap mt-5 mt-lg-0">
                    <h2 className="mb-2 title-color">Crée un Compte</h2>
                    <p className="mb-4">Crée votre compte gratuitement et bénificiez vous de nos fonctionnalitées.</p>
                    <form id="#" className="appoinment-form" method="post" action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input required name="nom" id="nom" type="text" className="form-control" placeholder="Nom" onChange={(e) => { updateField(e.target.value, 'nom') }} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input required name="prenom" id="prenom" type="text" className="form-control" placeholder="Prénom" onChange={(e) => { updateField(e.target.value, 'prenom') }} />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input required name="date_naissance" id="dateN" type="text" className="form-control" placeholder="Date de Naissance : dd/mm/yyyy" onChange={(e) => { updateField(e.target.value, 'date_naissance') }} />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input required name="cin" id="cin" type="text" className="form-control" placeholder="Numéro de la carte d'identité Nationale" onChange={(e) => { updateField(e.target.value, 'cin') }} />
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input required name="numero_tele" id="phone" type="text" className="form-control" placeholder="Numéro de Téléphone" onChange={(e) => { updateField(e.target.value, 'numero_tele') }} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input required name="email" id="email" type="email" className="form-control" placeholder="Email" onChange={(e) => { updateField(e.target.value, 'compte', 'email') }} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input required name="mot_de_pass" id="password" type="password" className="form-control" placeholder="Mote de Passe" onChange={(e) => { updateField(e.target.value, 'compte', 'mot_de_pass') }} />
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-main btn-round-full" onClick={Signup}>Crée Mon Compte<i className="icofont-simple-right ml-2  "></i></button>
                    </form>
                </div>
            </div>
        </>
    )
}