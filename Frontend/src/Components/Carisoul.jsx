import React from 'react'
import img1 from '../images/img_bg_1.jpg'
import img2 from '../images/img_bg_2.jpg'
import img3 from '../images/img_bg_3.jpg'

const Carisoul = () => {
	return (
		<div>
			<div className="container-fluid">
				<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={img1} style={{ height: "700px" }} className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<div className="container-fluid">
									<div className="row">
										<div className="col-sm-6 offset-sm-3 text-center slider-text">
											<div className="slider-text-inner">
												<div className="desc">
													<h1 className="head-1 text-white display-3">Men's</h1>
													<h2 className="head-2 text-white display-4">Shoes</h2>
													<h2 className="head-3 text-white display-5">Collection</h2>
													<p className="category"><span>New trending shoes</span></p>
													<p><a href="#" className="btn btn-primary ">Shop Collection</a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src={img2} style={{ height: "700px" }} className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<div className="container-fluid">
									<div className="row">
										<div className="col-sm-6 offset-sm-3 text-center slider-text">
											<div className="slider-text-inner">
												<div className="desc">
													<h1 className="head-1 text-white display-3">Huge</h1>
													<h2 className="head-2 text-white display-4">Sale</h2>
													<h2 className="head-3 text-white display-5"><strong className="font-weight-bold">50%</strong> Off</h2>
													<p className="category"><span>Big sale sandals</span></p>
													<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src={img3} style={{ height: "700px" }} className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<div className="container-fluid">
									<div className="row">
										<div className="col-sm-6 offset-sm-3 text-center slider-text">
											<div className="slider-text-inner">
												<div className="desc">
													<h1 className="head-1 text-white display-3">New</h1>
													<h2 className="head-2 text-white display-4">Arrival</h2>
													<h2 className="head-3 text-white display-5">up to <strong className="font-weight-bold">30%</strong> off</h2>
													<p className="category"><span>New stylish shoes for men</span></p>
													<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Carisoul
