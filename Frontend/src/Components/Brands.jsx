import React from 'react'
import brand1 from '../images/brand-1.jpg'
import brand2 from '../images/brand-2.jpg'
import brand3 from '../images/brand-3.jpg'
import brand4 from '../images/brand-4.jpg'
import brand5 from '../images/brand-5.jpg'
const Brands = () => {
  return (
    <div>
      <div class="colorlib-partner">
			<div class="container">
				<div class="row">
					<div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
						<h2>Trusted Partners</h2>
					</div>
				</div>
				<div class="row">
					<div class="col partner-col text-center">
						<img src={brand1} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={brand2} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={brand3} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={brand4} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={brand5} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Brands
