export default function Features(props){
    return (
        <section className="features">
	<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<div className="feature-block d-lg-flex">
					<div className="feature-item mb-5 mb-lg-0">
						<div className="feature-icon mb-4">
							<i className="icofont-surgeon-alt"></i>
						</div>
						<span>24 Hours Service</span>
						<h4 className="mb-3">Online </h4>
						<p className="mb-4">Notre solution logiciel est désormer disnible sur internet 24h/24h.</p>
						<a href="/annonces" className="btn btn-main btn-round-full">Cnsulter les annonces</a>
					</div>
				
					<div className="feature-item mb-5 mb-lg-0">
						<div className="feature-icon mb-4">
							<i className="icofont-ui-clock"></i>
						</div>
						<span>Travail des Gérants</span>
						<h4 className="mb-3">Heure de Travail</h4>
						<ul className="w-hours list-unstyled">
		                    <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
		                    <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
		                    <li className="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
		                </ul>
					</div>
				
					<div className="feature-item mb-5 mb-lg-0">
						<div className="feature-icon mb-4">
							<i className="icofont-support"></i>
						</div>
						<span>Contact Nous</span>
						<h4 className="mb-3">1-800-700-6200</h4>
						<p>NOus vous met dans votre disposition notre contact telephonique pour que vous puisserai nous contacter.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    )
}