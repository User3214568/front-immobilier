import { useEffect, useState } from "react"
import Annonce from "../../Annonce/Annonce"

import '../ManagePosts/ManagePostsModal/ManagePostsModal.css'
import { Modal } from "react-bootstrap"
import AnnonceServices from "../../../services/AnnonceServices/AnnonceServices"

const CancelAnnonce = (props) => {


    const confirmAnnonce = () => {
        new AnnonceServices().validate(props.annonce.id_annonce).then(res=>{

        }).catch(err=>{

        })
        props.setAnnonce(null)

    }

    const abortAnnonce = () => {
        new AnnonceServices().delete(props.annonce.id_annonce).then(res => {
            props.deleteAnnonce(props.annonce.id_annonce)
        }).catch(err => {

        })
        props.setAnnonce(null)

    }
    return (
        <Modal show={props.annonce !== null}>
            <Modal.Header>Validation d'annonce</Modal.Header>
            <Modal.Body>
                <p>Veuillez Spécifiez ci vous voulez confirmer la vilidité de l'annonce ou bien le supprimer</p>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-gradient-primary mr-2" onClick={confirmAnnonce}>Valider</button>
                <button type="button" className="btn btn-gradient-danger mr-2" onClick={abortAnnonce}>Supprimer</button>
                <button type="button" className="btn btn-success" onClick={() => props.setAnnonce(null)}>Cancel</button>
            </Modal.Footer>
        </Modal>
    )
}


export default function AdminManagePosts(props) {

    const [annonces, setAnnonces] = useState([])
    const [annonce, setAnnonce] = useState(null)
    useEffect(async () => {
        const loadedPosts = await new AnnonceServices().getAll()
        setAnnonces(loadedPosts)
    }, [])

    const deleteAnnonce = (id) => {
        console.log(id)
        setAnnonces(prev => prev.filter((el) => el.id_annonce !== id));

    }

    const postsView = annonces.map((value, index) => {
        return (
            <Annonce key={index} post={value} clickEvent={() => { setAnnonce(value) }} />
        )
    })

    return (
        <>

            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="mdi mdi-book-open"></i>
                    </span>
                    List des Annonces
                </h3>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">

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
            <CancelAnnonce annonce={annonce} deleteAnnonce={deleteAnnonce} setAnnonce={setAnnonce} />
        </>
    )
}