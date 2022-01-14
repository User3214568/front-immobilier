import { useEffect, useState } from "react"
import AnnonceServices from "../../../services/AnnonceServices/AnnonceServices"
import Annonce from "../../Annonce/Annonce"
import ManagePostsModal from "./ManagePostsModal/ManagePostsModal"

export default function ManagePosts(props) {

    const [annonces, setAnnonces] = useState([])
    const [annonce , setAnnonce] = useState(null)
    const [annonceIndex, setAnnonceIndex] = useState(null)

    useEffect(async () => {
        const loadedPosts = await new AnnonceServices().getMyAnnonce()
        setAnnonces(loadedPosts)
    }, [])

    
    const postsView = annonces.map((value, index) => {
        return (
            <Annonce key={index} post={value} clickEvent={() => {updateAnnonce(value,index)}} />
        )
    })

    const addAnnonce = ()=>{
        setAnnonce(new AnnonceServices().emptyAnnonce())
    }
    const updateAnnonce = (a,index)=>{
        setAnnonce(a)
        console.log(a)
        setAnnonceIndex(index)
    }
    const updateAnnonces = (annonce,index)=>{
        if(!annonce){
            annonces.splice(index,1)
            setAnnonces(annonces)
        }
        else{
            if(index === null && annonce) annonces.push(annonce)
            else annonces[index] = annonce
            setAnnonces(annonces)
        }
    }
    return (
        <>

            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="mdi mdi-book-open"></i>
                    </span>
                    Géré mes Annonces
                </h3>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <button 
                                type="button" 
                                className="btn btn-outline-primary btn-icon-text"
                                onClick={addAnnonce}
                                >
                                <i className="mdi mdi-plus btn-icon-prepend"></i>
                                Ajouter Annonce
                            </button>
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
            { annonce && <ManagePostsModal annonce={annonce} index={annonceIndex} updateAnnonces={updateAnnonces} updateAnnonce={setAnnonce}/>}
        </>
    )
}