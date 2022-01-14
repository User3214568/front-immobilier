import Register from "../Account/Register/Register";
import BriefStats from "../BriefStats/BriefStats";
import Categories from "../Categories/Categories";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import LatestAnnonces from "../LatestAnnonces/LatestAnnonces";
import Manchette from "../Manchette/Manchette";
import NavBar from "../Navbar/NavBar";
import TopBar from "../TopBar/TopBar";

export default function Home(props){
    return (
        <>
            <TopBar/>
            <NavBar/>
            <Manchette/>
            <Features/>
           {/* <LatestAnnonces/>
            <BriefStats/>*/}
            <Categories/>
            <Register/>
            <Footer/>
        </>

    )
}