import image from '../../assets/images/logo.png'
import { useState,useEffect } from 'react'
import { roles } from '../../Enums/Enums'
import AuthServices from '../../services/AuthServices/AuthServices'
import  './NavBar.css'


export default function NavBar(props) {
	const [auth, setAuth] = useState(null)
	useEffect(() => {
		AuthServices.isAuth().then(res => {
			if (res == roles[0]) {
				setAuth(true)
			} else {
				if (res == roles[1]) {
					setAuth(true)
				} else {
					setAuth(null)
				}
			}

		}).catch(e => {
			setAuth(null)
		})
	}, [])

	return (
		<nav className="navbar navbar-expand-lg navigation" id="navbar">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					<img src={image}  alt="" className="img-fluid logo-image" />
				</a>

				<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
					<span className="icofont-navigation-menu"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarmain">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">Acceuil</a>
						</li>
						<li className="nav-item"><a className="nav-link" href="/annonces">List des Annonces</a></li>
						<li className="nav-item"><a className="nav-link" href="#">Services</a></li>

						<li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
						{
							!auth &&
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i className="icofont-thin-down"></i>
									Acceder à votre compte
								</a>
								<ul className="dropdown-menu" aria-labelledby="dropdown02">

									<li><a className="dropdown-item" href="/#compte">Crée un Compte</a></li>
									<li><a className="dropdown-item" href="/login">Se Connecter</a></li>
								</ul>
							</li>
						}
						{
							auth && <li className="nav-item"><a className="nav-link" href="/dashboard">Mon Espace</a></li>

						}


					</ul>
				</div>
			</div>
		</nav>
	)
}