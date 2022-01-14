import { getImmobleIndex, getImmoblesByIndex } from '../../Enums/Enums'
import './Annonce.css'
export default function Annonce(props) {
    const post = props.post
    return (
        <div className=" mt-4 col-md-6 col-xs-12 col-lg-4 card" onClick={props.clickEvent}>
            <div className="card-banner">
                <p className="category-tag popular">{post.typeAnnonce} à {post.prix} Dhs</p>
                <img className="banner-img" src={ post.photos.length > 0 ? post.photos[0].url : 'https://www.freeiconspng.com/uploads/house-from-premier-builders-in-carthage-mo-64836--home-builders-5.png'} alt='' />
            </div>
            <div className="card-body">
                <div className="row justify-content-between">
                    <div className="col d-flex align-items-center ">
                        <img height="20" src="https://img.icons8.com/ios-filled/50/fa314a/marker.png"/>
                        <span>{post.location.ville}</span>
                    </div>
                    {/*
                    <div className="col d-flex  align-items-center ">
                        <img height="20" src="https://img.icons8.com/ios-filled/50/000000/pay-date.png"/>
                        <span>{post.date_annonce}</span>
                    </div>
                    */}
                </div>
                <h4 className="blog-title">{post.titre}</h4>
                <p className="blog-description">{post.description}</p>

            </div>
        </div>

    )
}