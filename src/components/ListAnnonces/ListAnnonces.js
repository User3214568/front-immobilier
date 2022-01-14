import { useEffect, useState } from "react";
import AnnonceServices from "../../services/AnnonceServices/AnnonceServices";
import Annonce from "../Annonce/Annonce";
import AnnonceModal from "../AnnonceModal/AnnonceModal";
import NavBar from "../Navbar/NavBar";
import TopBar from "../TopBar/TopBar";
import ListAnnonceFilter from "./ListAnnoncesFilter/ListAnnonceFilter";

export default function ListAnnonce(props) {
    const [focusedPost,setFocusedPost] = useState(null)
    const [posts,setPosts] = useState([])

    useEffect(async()=>{
        const loadedPosts = await new AnnonceServices().getAll()
        setFilteredPosts(loadedPosts)
        setPosts(loadedPosts)
    },[])

    const [filteredPosts , setFilteredPosts] = useState(posts)

    const postsView =  filteredPosts.map((value,index)=>{
        return (
            <Annonce key={index} post={value} clickEvent={()=>{ setFocusedPost(value)}}/>
        )
    })
    return (
        <>
            <TopBar />
            <NavBar />
            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Annonces</span>
                                <h1 className="text-capitalize mb-5 text-lg">List de nos Annonces</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="row align-items-start">
                    <div className="p-4 col-lg-3">
                        <ListAnnonceFilter posts={posts} updatePosts={setFilteredPosts} />
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 col-lg-9">
                        {postsView}
                    </div>
                </div>
                <AnnonceModal post={focusedPost} updateFocusedPosed={setFocusedPost}/>
        </>
    )
}