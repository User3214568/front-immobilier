import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AnnonceServices from "../../../services/AnnonceServices/AnnonceServices"

import '../ManagePosts/ManagePostsModal/ManagePostsModal.css'
import { Modal } from "react-bootstrap"
import ContractService from "../../../services/ContractServices/ContractService"
import { getImmoblesByIndex, getOperationsByIndex } from "../../../Enums/Enums"

const ResilierContract = (props) => {
    const abortContract = () => {
        new ContractService().resilierContract(props.contract).then(res => {
            props.deleteContract(props.contract)
        }).catch(err => {

        })
        props.setContract(null)

    }
    return (
        <Modal show={props.contract !== null}>
            <Modal.Header>Résiliation de la Contract</Modal.Header>
            <Modal.Body>
                <p>Est ce que vous etes sur que vous voulez résilier cet contract ! </p>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-gradient-danger mr-2" onClick={abortContract}>Résilier</button>
                <button type="button" className="btn btn-success" onClick={() => props.setContract(null)}>Cancel</button>
            </Modal.Footer>
        </Modal>
    )
}


export default function Contracts(props) {

    const [contracts, setContracts] = useState([])
    const [contract, setContract] = useState(null)
    useEffect(async () => {
        const loaded = await new ContractService().getMyContracts()
        setContracts(loaded)
    }, [])

    const deleteContract = (id) => {
        setContracts(prev => prev.filter((el) => el.id_contrat !== id));

    }

    const contractsView = contracts.map((value, index) => {
        return (
            <tr key={index}>
                <td>
                    {value.acheteur.nom + " " + value.acheteur.prenom}
                </td>
                <td>
                    {value.vendeur.nom + " " + value.vendeur.prenom}
                </td>
                <td>
                    {value.annonce.titre}
                </td>
                <td>
                    {getImmoblesByIndex(value.annonce.typeAnnonce)}
                </td>
                <td>
                    {getOperationsByIndex(value.annonce.typeOperation)}
                </td>
                <td>
                    <button type="button" className="btn btn-gradient-danger mr-2" onClick={() => { setContract(value.id_contrat) }}>Résilier</button>
                </td>
            </tr>
        )
    })

    return (
        <>

            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="mdi mdi-book-open"></i>
                    </span>
                    Mes Contracts
                </h3>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to="/annonces"
                                type="button"
                                className="btn btn-outline-primary btn-icon-text"
                            >
                                <i className="mdi mdi-plus btn-icon-prepend"></i>
                                Faire des Resrevations
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                {
                    contracts.length < 1 &&
                    <div className="row">
                        <div className="col-12">
                            <span className="d-flex p-5 align-items-center text-center purchase-popup">
                                <p>Vous n'avez aucune contract à afficher.</p>
                            </span>
                        </div>
                    </div>
                }
                {
                    contracts.length >= 1 &&

                <div className="table-responsive">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>Vendeur</th>
                                <th>Acheteur</th>
                                <th>Annonce</th>
                                <th>Type Propriété</th>
                                <th>Type Vente</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                contractsView
                            }
                        </tbody>
                    </table>
                </div>
                }
            </div>
            <ResilierContract contract={contract} deleteContract={deleteContract} setContract={setContract} />
        </>
    )
}