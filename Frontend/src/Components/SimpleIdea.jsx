import React from 'react'
import men from '../images/men.jpg'
import women from '../images/women.jpg'

const SimpleIdea = () => {
  return (
    <div>
      <div className="colorlib-intro">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 text-center">
						<h2 className="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
					</div>
				</div>
			</div>
		</div>
		<div className="colorlib-product">
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6 text-center">
						<div className="featured">
							<a href="#" className="featured-img" > <img src={men} className="img-fluid" alt="" /></a>
							<div className="desc">
								<h2><a href="#">Shop Men's Collection</a></h2>
							</div>
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<div className="featured">
                        <a href="#" className="featured-img" > <img src={women} className="img-fluid" alt="" /></a>
							<div className="desc">
								<h2><a href="#">Shop Women's Collection</a></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default SimpleIdea
