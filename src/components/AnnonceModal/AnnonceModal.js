import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Modal } from "react-bootstrap"

import ReservationServices from "../../services/ReservationServices/ReservationServices"

import './AnnonceModal.css'
export default function AnnonceModal(props) {
    const post = props.post

    const postImages = post && post.photos.map((value, index) => {
        return (
            <SplideSlide key={index}>
                <img src={value} height="70" />
            </SplideSlide>
        )
    })

    const reserverPost = async ()=>{
        if(!post.estReserver){
            await new ReservationServices().reserver(post.id_annonce)
            post.estReserver = true
            props.updateFocusedPosed(null)
        }
    }
    return (
        post &&
        <Modal show={true} size="xl" fullscreen={true} onHide={() => props.updateFocusedPosed(null)}>
            <Modal.Header>
                <Modal.Title><h1>{post.titre}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div className="product container-fluid">


                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className="header">
                                <div className="back" onClick={() => props.updateFocusedPosed(null)}>
                                </div>
                            </div>
                            <img className="main-image" height="300" src={post.photos[0]} alt="" />
                            {
                                post.photos.length > 1 &&
                                <Splide options={{
                                    perPage: 3,
                                    height: '70px',
                                    cover: false,
                                    rewind: true,
                                    focus: 'center',
                                    gap: '1rem',
                                    breakpoints: {
                                        height: '6rem',
                                    },
                                }}>
                                    {postImages}
                                </Splide>
                            }
                        </div>
                        <div className="col-lg-6 font-size-14">
                            <h3>{post.titre}</h3>
                            <hr className="dropdown-divider" />
                            <p>{post.description}</p>
                            <div className=" d-flex align-items-center ">
                                <img height="35" src="https://img.icons8.com/ios-filled/50/000000/marker.png" />
                                <span className="h6 ml-3" >{post.location.ville}</span>
                            </div>
                            {/*
                            <div className=" mt-2 d-flex  align-items-center ">
                                <img height="35" src="https://img.icons8.com/ios-filled/50/000000/pay-date.png" />
                                <span className="h6 ml-3">{post.date_annonce}</span>
                            </div>
                            */}
                            <div className=" mt-2 d-flex  align-items-center ">
                                <img height="35" src="https://img.icons8.com/ios-glyphs/60/000000/money-bag.png" />
                                <span className="h6 ml-3">{post.prix} Dirhams</span>
                            </div>
                            <div className=" mt-2 d-flex  align-items-center ">
                                <img height="35" src="https://img.icons8.com/ios-filled/50/000000/service.png" />
                                <span className="h6 ml-3">Disponible pour <strong>{post.typeOperation}</strong></span>
                            </div>
                            <p>
                            </p>
                        </div>
                    </div>


                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success" onClick={reserverPost} disabled={post.estReserver}>Réserver</button>
            </Modal.Footer>
        </Modal>


    )
}