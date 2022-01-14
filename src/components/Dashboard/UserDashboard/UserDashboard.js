import RootDashboard from "../RootDashboard/RootDashboard";
import Contracts from "../Contracts/Contracts"
import ManagePosts from "../ManagePosts/ManagePosts"
import Reservation from "../Reservations/Reservations"
export default class UserDashboard extends RootDashboard {
    
    constructor(props){
        super(props)
        this.options = [
            { label: 'Mes Annonces', path: "", icon: 'mdi-book-open', content: <ManagePosts/> },
            { label: 'Mes Reservations', path: "reservations", icon: 'mdi-home-modern ', content: <Reservation/> },
            { label: 'Mes Contract', path: "contracts", icon: 'mdi-briefcase-check', content: <Contracts/> },
        ]
    }
    

}