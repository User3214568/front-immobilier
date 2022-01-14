import AdminManagePosts from "../AdminManagePosts/AdminManagePosts";
import ManageUsers from "../ManageUsers/ManageUsers";
import RootDashboard from "../RootDashboard/RootDashboard";

export default class AdminDashboard extends RootDashboard {
    constructor(props){
        super(props)
        this.options = [
            { label: 'Utilisateurs', path: "users", icon: 'mdi-home-modern ', content:<ManageUsers/>},
            { label: 'Annonces', path: "", icon: 'mdi-book-open', content: <AdminManagePosts/> },
        ]
    }
}