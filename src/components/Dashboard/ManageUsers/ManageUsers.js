import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"
import UserServices from "../../../services/UserServices/UserServices"


const DropUser = (props) => {
    const deleteUtilisateur = () => {
        new UserServices().deleteUser(props.user.id).then(res => {
            props.deleteUser(props.user.id)
        }).catch(err => {

        })
        props.setUser(null)

    }
    return (
        <Modal show={props.user !== null}>
            <Modal.Header>Suppression d'utilisateur</Modal.Header>
            <Modal.Body>
                <p>Est ce que vous etes sur que vous voulez supprimer l'utilisateur : {props.user.nom + " " + props.user.prenom} </p>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-gradient-danger mr-2" onClick={deleteUtilisateur}>Submit</button>
                <button type="button" className="btn btn-success" onClick={() => props.setUser(null)}>Cancel</button>
            </Modal.Footer>
        </Modal>
    )
}

export default function ManageUsers(props) {

    const [users, setUsers] = useState([])
    const[filteredUsers,setFilteredUsers] = useState([])
    const [user, setUser] = useState(null)
    const [search,setSearch] = useState("")
    useEffect(async () => {
        const loaded = await new UserServices().getAll()
        setUsers(loaded)
        setFilteredUsers(loaded)
    }, [])

    const deleteUser = (id) => {
        const us = users.filter(u=>{
            console.log('found id ',u.id !== id)
            if(u.id !== id) return u
        })
        setFilteredUsers(us)
        setUsers(us);

    }
    const filterUsers = (e)=>{
        let value =  e.target.value
        setFilteredUsers(users.filter((el) =>  el.nom.toLowerCase().includes(value.toLowerCase()) || el.prenom.toLowerCase().includes(value.toLowerCase())))
        //setFilteredUsers(prev => prev.filter((el) =>  el.nom.includes(value) || el.prenom.includes(value)));
        setSearch(value)
    }
    const usersView = filteredUsers.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.nom}</td>
                <td>{value.prenom}</td>
                <td>{value.date_naissance}</td>
                <td>{value.numero_tele}</td>
                <td>{value.cin}</td>
                <td>
                    <button type="button" className="btn btn-gradient-danger mr-2" onClick={() => setUser(value)}>Supprimer</button>
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
                    Géré les Utilisateurs
                </h3>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                        <input type="text" value={search} className="form-control" placeholder="Chercher" onChange={filterUsers} />
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                {
                    users.length < 1 &&
                    <div className="row">
                        <div className="col-12">
                            <span className="d-flex p-5 align-items-center text-center purchase-popup">
                                <p>Vous n'avez aucun utilisateur à afficher.</p>
                            </span>
                        </div>
                    </div>
                }
                <div className="row">
                    {
                        users.length >= 1 &&
                        <div className="table-responsive">
                            <table className="table">
                                <thead>

                                    <tr>
                                        <th>Identifiant</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Date de Naissance</th>
                                        <th>Numero Téléphone</th>
                                        <th>CIN</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersView}
                                </tbody>
                            </table>

                        </div>
                    }
                </div>
            </div>
            {user && <DropUser user={user} deleteUser={deleteUser} setUser={setUser} />}

        </>
    )
}