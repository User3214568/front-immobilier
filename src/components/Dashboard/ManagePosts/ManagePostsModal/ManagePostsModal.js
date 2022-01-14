import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { Image, Modal } from "react-bootstrap";
import {typeImmobles,operations, getImmobleIndex, getOperationIndex} from '../../../../Enums/Enums'
import Select from 'react-select'
import AnnonceServices from "../../../../services/AnnonceServices/AnnonceServices";
import './ManagePostsModal.css'

export default function ManagePostsModal(props) {
    const [villes, setVilles] = useState([])
    const annonce  = props.annonce

    // Fetch for Morocco Cities
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mehdibo/morocco-cities/master/cities.json").then(response => {
            response.json().then(value => {
                const res = value.cities.data.map((v, k) => {
                    return { value: v.names.fr, label: v.names.fr }
                })
                setVilles(res)
            })
        })
    }, [])

    const imagesView = annonce.photos.map((value, index) => {
        return (
            <SplideSlide key={index}>
                <div className="uploaded-image d-flex flex-column align-items-center">
                    <img src={value.url} height="70" alt="" />
                    <button type="button" className="upload-del btn btn-xs btn-light btn-rounded" onClick={()=>deleteImage(index)}><i className="mdi mdi-delete"></i>Supprimer</button>
                </div>
            </SplideSlide>
        )
    })

    
    
    const updateAnnonce = (value, key, subkey = null) => {
        const editedAnnonce = {...annonce}
        if (subkey) {
            editedAnnonce[key][subkey] = value
        }
        else annonce[key] = value
        props.updateAnnonce({...annonce})
        

    }
    const uploadImage = async (e) => {
        let pics = annonce.photos
        pics.push({
            url: URL.createObjectURL(e.target.files[0]),
            file: e.target.files,
            date : Date.now()
        })
        props.updateAnnonce({...annonce,photos : pics})
    }
    const deleteImage = (key)=>{
        let pics = annonce.photos

        pics.splice(key,1)
        props.updateAnnonce({...annonce,photos : pics})
    }

    const saveAnnonce = ()=>{
        let service = new AnnonceServices()
        if(!props.index){
            service.addAnnonce(annonce)
        }else{
            service.addAnnonce(annonce)
        }
        props.updateAnnonces(annonce,props.index)

        close()
    }
    const deleteAnnonce = (id)=>{
        
        let service = new AnnonceServices()
        
        if(id){
            service.delete(id)
        }
        props.updateAnnonces(null,props.index)
        close();
    }
    const close = ()=>{
        props.updateAnnonce(null)
    }

    return (
        <Modal size="lg" show={true} >
            <Modal.Body>
                <div className="row justify-content-center ">

                    <div className="col-12">
                        <h2 className="card-title">{props.index !== null ? annonce.titre : "Ajouter une Annonce"}</h2>
                        <hr className="dropdown-divider" />
                        <form className="container forms-sample">
                            <p className="card-description">
                                Veuillez saisir les informations conernant votre annonce
                            </p>
                            <div className="row">
                                <div className="col-md-6 sidebar-widget  mb-3">
                                    <h5>Titre d'annonce</h5>
                                    <input type="text" value={annonce.titre} className="form-control" placeholder="titre" onChange={(e) => { updateAnnonce(e.target.value, 'titre') }} />
                                </div>


                                <div className="col-md-6 sidebar-widget  mb-3">
                                    <h5>Description</h5>
                                    <textarea className="form-control" rows="4" onChange={(e) => { updateAnnonce(e.target.value, 'description') }} value={annonce.description}></textarea>
                                </div>
                                <div className="col-md-6 sidebar-widget  mb-3">
                                    <h5>Type d'Operation</h5>
                                    <Select
                                        options={operations}
                                        isMulti={false}
                                        className="basic-select"
                                        defaultValue={operations[getOperationIndex(annonce.typeOperation)]}
                                        classNamePrefix="select"
                                        onChange={(e) => updateAnnonce(e.label, 'typeOperation')}
                                    >
                                    </Select>

                                </div>

                                <div className="col-md-6 sidebar-widget  mb-3">
                                    <h5>Type d'immobilier</h5>
                                    <Select
                                        options={typeImmobles}
                                        defaultValue={typeImmobles[getImmobleIndex(annonce.typeAnnonce)]}
                                        isMulti={false}
                                        className="basic-select"
                                        classNamePrefix="select"
                                        onChange={(e) => updateAnnonce(e.label, 'typeAnnonce')}
                                    >

                                    </Select>

                                </div>


                                <div className="col-md-6 sidebar-widget  mb-3">
                                    <h5>Prix de location / vente</h5>
                                    <input type="text" value={annonce.prix} className="form-control" placeholder="Prix" onChange={(e) => updateAnnonce(e.target.value, 'prix')} />
                                </div>
                                <div className="col-md-6 sidebar-widget  mb-3">
                                    <h5>Adresse</h5>
                                    <input type="text" value={annonce.location.address} className="form-control" placeholder="Adresse" onChange={(e) => updateAnnonce(e.target.value, 'location', 'address')} />
                                </div>
                                <div className="col-md-6 sidebar-widget  mb-3">
                                    <h5>Ville</h5>
                                    <Select
                                        options={villes}
                                        isMulti={false}
                                        defaultValue={{label : annonce.location.ville , value : annonce.location.ville}}
                                        className="basic-select"
                                        classNamePrefix="select"
                                        onChange={(e) => updateAnnonce(e.label, 'location', 'ville')}
                                    ></Select>
                                </div>
                            </div>

                            <div className="col-md-12 sidebar-widget  mb-3">
                                <div className="d-flex justify-content-between">
                                    <h5>Images</h5>
                                    <input type="file" id="uploadImage" hidden onChange={uploadImage} />
                                    <button type="button" className="btn btn-sm btn-social-icon btn-twitter btn-rounded" onClick={(e) => { document.getElementById('uploadImage').click() }}><i className="mdi mdi-plus"></i></button>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        {annonce.photos.length > 0 && <Splide options={{
                                            perPage: 4,
                                            cover: false,
                                            rewind: true,
                                            focus: 'center',
                                            gap: '0.1rem',
                                            breakpoints: {
                                                height: '6rem',
                                            },
                                        }}>
                                            
                                            {imagesView}
                                        </Splide>
                                        }
                                        {annonce.photos.length === 0 && <span className="d-flex align-items-center purchase-popup">
                                            <p>Aucune image à afficher. essayer d'importer des images</p>

                                        </span>}
                                    </div>

                                </div>

                            </div>
                            <button type="button" className="btn btn-gradient-primary mr-2" onClick={saveAnnonce}>Submit</button>
                            {annonce.id_annonce && <button type="button" className="btn btn-gradient-danger mr-2" onClick={()=>deleteAnnonce(annonce.id_annonce)}>Supprimer</button>}
                            <button type="button" className="btn btn-light" onClick={close}>Cancel</button>
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}