export default function Categories(props) {
    return (
        <section className="section service gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <h2>Qu'Offre Nous ?</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>Notre application met à votre disposition un nombre de possibilitées concernant l'immoblisation en Maroc.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item mb-4">
                            <div className="icon d-flex align-items-center">
                            <img src="https://img.icons8.com/plasticine/100/ffffff/sale.png" height="78"/>
                                <h4 className="mt-3 mb-3">Ventes</h4>
                            </div>

                            <div className="content">
                                <p className="mb-4">Vous pouvez trouver ici des offre d'annonce de ventes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item mb-4">
                            <div className="icon d-flex align-items-center">
                            <img src="https://img.icons8.com/ios-glyphs/90/fa314a/mortgage.png" height="78"/>
                                <h4 className="mt-3 mb-3">Location</h4>
                            </div>
                            <div className="content">
                                <p className="mb-4">Vous pouvez trouver ici des offre d'annonce de location des immobilieres</p>
                            </div>
                        </div>
                    </div>

                   


                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item mb-4">
                            <div className="icon d-flex align-items-center">
                            <img src="https://img.icons8.com/ios-filled/100/fa314a/prefab-house.png" height="78"/>
                                <h4 className="mt-3 mb-3">Different type d'immobilier</h4>
                            </div>

                            <div className="content">
                                <p className="mb-4">Nous offre des annonces concernant different type d'immobiliers à savoir Villa , appartement et Maison.</p>
                            </div>
                        </div>
                    </div>

                    

                    
                </div>
            </div>
        </section>
    )
}