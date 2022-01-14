import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"
import AuthServices from "../../../services/AuthServices/AuthServices"
import { useState } from "react"
import DashboardNavBar from "../DashboardNavBar/DashboardNavBar"


export default class RootDashboard extends React.Component {

    constructor(props) {
        super(props)
        this.options = []
        this.state = {loged : true}
    }
    render() {
        const userInfo = JSON.parse(localStorage.getItem("user-info"))

        const routes = this.options.map((value, key) => {
            return (
                <Route key={key} path={value.path} element={value.content}></Route>
            )
        })
        const options = this.options.map((value, key) => {

            return (
                <li key={key} className="nav-item">
                    <Link to={value.path} className="nav-link">
                        <span className="menu-title">{value.label}</span>
                        <i className={"mdi " + value.icon + " menu-icon"}></i>
                    </Link>
                </li>
            )
        })
        const logout = () => {
            new AuthServices().signout()
            this.setState({loged : false})
        }
        if(this.state.loged) return (
            <div className="container-scroller">
                <DashboardNavBar />
                <div className="container-fluid page-body-wrapper">

                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">
                            <li className="nav-item nav-profile">
                                <a href="#" className="nav-link">
                                    <div className="nav-profile-image">
                                        <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/fa314a/external-avatar-neu-users-neu-royyan-wijaya-4.png" />
                                        <span className="login-status online"></span>
                                    </div>
                                    <div className="nav-profile-text d-flex flex-column">
                                        <span className="font-weight-bold mb-2">{userInfo.nom + " " + userInfo.prenom}</span>
                                        <span className="text-secondary text-small">{userInfo.role}</span>
                                    </div>
                                    <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                                </a>
                            </li>
                            <li>
                                <span className="nav-link  border-bottom">
                                    <span className="border-bottom">
                                        <h6 className="font-weight-normal mb-1">Mes Actions</h6>
                                    </span>
                                </span>
                            </li>
                            {options}
                            <span className="nav-link border-bottom">
                                <span className="border-bottom">
                                    <h6 className="font-weight-normal mb-1">Mon Compte</h6>
                                </span>
                            </span>
                            <li className="nav-item">
                                <a onClick={logout} className="nav-link">
                                    <span className="menu-title">Se Déconnecter</span>
                                    <i className="mdi mdi-logout  menu-icon"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Routes>
                                {routes}
                            </Routes>
                        </div>

                        <footer className="footer">
                            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Gestion des Immobiliers - Projet JEE 2022</span>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
        else return <Navigate to="/"/>
    }
    
}