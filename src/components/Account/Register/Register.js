import Signup from "../Signup/Signup";

export default function Register(props) {
    return (
        <section className="section appoinment" id="compte">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <div className="appoinment-content">
                            <img src="https://dtzulyujzhqiu.cloudfront.net/royallepage1532/images/1578931196_qS48pmaD6jyzK5wR2tU2wzUajN3qTqoS0b4b8YrP.jpeg" alt="" className="img-fluid"/>
                            <div className ="emergency">
                            <h2 className ="text-lg"><i className ="icofont-phone-circle text-lg"></i>+23 345 67980</h2>
                            </div>
                        </div>
                    </div>
                    <Signup/>
                </div>
            </div>
        </section>
    )
}