import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Annonce from "../../Annonce/Annonce"

import '../ManagePosts/ManagePostsModal/ManagePostsModal.css'
import { Modal } from "react-bootstrap"
import ReservationServices from "../../../services/ReservationServices/ReservationServices"

const CancelReservation = (props) => {
    const abortReservation = () => {
        new ReservationServices().cancelReservation(props.reservation).then(res=>{
            console.log(props.reservation)
            props.deleteReservation(props.reservation)
        }).catch(err=>{

        })
        props.setReservation(null)
        
    }
    return (
        <Modal show={props.reservation !== null}>
            <Modal.Header>Annuler la Réservation</Modal.Header>
            <Modal.Body>
                <p>Est ce que vous etes sur que vous voulez annuler la reservation de cet immobilier ! </p>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-gradient-danger mr-2" onClick={abortReservation}>Submit</button>
                <button type="button" className="btn btn-success" onClick={()=>props.setReservation(null)}>Cancel</button>
            </Modal.Footer>
        </Modal>
    )
}


export default function Reservation(props) {

    const [annonces, setAnnonces] = useState([])
    const [reservation , setReservation] = useState(null)
    useEffect(async () => {
        const loadedPosts = await new ReservationServices().getMyReservations()
        console.log(loadedPosts)
        setAnnonces(loadedPosts)
    }, [])

    const deleteReservation = (id)=>{
        console.log(id)
        setAnnonces(prev => prev.filter((el) => el.id_Reservation !== id));
        
    }

    const postsView = annonces.map((value, index) => {
        return (
            <Annonce key={index} post={value.annonce} clickEvent={()=>{ setReservation(value.id_Reservation)}} />
        )
    })

    return (
        <>

            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="mdi mdi-book-open"></i>
                    </span>
                    Mes Réservations
                </h3>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to="/annonces"
                                type="button"
                                className="btn btn-outline-primary btn-icon-text"
                            >
                                <i className="mdi mdi-plus btn-icon-prepend"></i>
                                Plus d'annonces
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                {
                    annonces.length < 1 &&
                    <div className="row">
                        <div className="col-12">
                            <span className="d-flex p-5 align-items-center text-center purchase-popup">
                                <p>Vous n'avez aucune annonce à afficher.</p>
                            </span>
                        </div>
                    </div>
                }
                <div className="row">
                    {
                        annonces.length >= 1 && postsView
                    }
                </div>
            </div>
            <CancelReservation  reservation={reservation} deleteReservation={deleteReservation} setReservation={setReservation}/>
        </>
    )
}