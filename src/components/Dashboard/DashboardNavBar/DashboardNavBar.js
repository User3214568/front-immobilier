import { Navigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import AuthServices from '../../../services/AuthServices/AuthServices'
import { useState } from 'react'
import './DashboardNavBar.css'
export default function DashboardNavBar(props) {

    const userInfo = JSON.parse(localStorage.getItem("user-info"))
    const [loged,setLoged] = useState(true)
    const logout = ()=>{
        new AuthServices().signout()
        setLoged(false)
    }
    if(loged) return (
<nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="/"><img src={logo} className="logo-dash" alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
               
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                            <div className="nav-profile-img">
                            <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/fa314a/external-avatar-neu-users-neu-royyan-wijaya-4.png"/>
                                <span className="availability-status online"></span>
                            </div>
                            <div className="nav-profile-text ">
                                <p className="mb-1 text-black">{userInfo.nom+" "+userInfo.prenom}</p>
                            </div>
                        </a>
                        
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-email-outline"></i>
                            <span className="count-symbol bg-warning"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                            <h6 className="p-3 mb-0">Messages</h6>
                            <div className="dropdown-divider"></div>
                            
                            <h6 className="p-3 mb-0 text-center">Aucun Message</h6>
                        </div>
                    </li>
                    
                    <li className="nav-item nav-logout d-none d-lg-block">
                        <a className="nav-link" onClick={logout}>
                            <i className="mdi mdi-power"></i>
                        </a>
                    </li>
                    
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
            </nav>
    )
    else return (
        <Navigate to="/"></Navigate>
    )
}