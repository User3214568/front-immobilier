export default  function Manchette(props){

    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xl-7">
                        <div className="block">
                            <div className="divider mb-3"></div>
                            <span className="text-uppercase text-sm letter-spacing ">Immobilisation</span>
                            <h1 className="mb-3 mt-3">Site d'immobilisation marocain</h1>
                            
                            <p className="mb-4 pr-5">Site Web vous permet de trouver et poster des annonce de vente / location des immobiliers au niveau du maroc.</p>
                            <div className="btn-container ">
                                <a href="/annonces" className="btn btn-main btn-danger btn-round-full">Trouver un immeuble <i className="icofont-simple-right ml-2  "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}