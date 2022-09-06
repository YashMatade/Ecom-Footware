import React from 'react'
import {Link} from 'react-router-dom' 
import coverimg from '../images/cover-img-1.jpg';
import Brands from './Brands';
import CardsinMenandWomen from './CardsinMenandWomen';
import Sellers from './Sellers';
import SummerSaleBorder from './SummerSaleBorder';

const Women = () => {
  return (
    <>
	<SummerSaleBorder/>
      <div class="breadcrumbs">
			<div class="container">
				<div class="row">
					<div class="col">
						<p class="bread"><span><Link to="index.html">Home</Link></span> / <span>Women</span></p>
					</div>
				</div>
			</div>
		</div>

		<div class="breadcrumbs-two">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="breadcrumbs-img" style={{backgroundImage : `url(${coverimg})`}}>
							<h2>Women's</h2>
						</div>
						<div class="menu text-center">
							<p><Link to="#">New Arrivals</Link> <Link to="#">Best Sellers</Link> <Link to="#">Extended Widths</Link> <Link to="#">Sale</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
    <CardsinMenandWomen/>
    <Sellers/>
    <div class="row">
					<div class="col-md-12 text-center">
						<div class="block-27">
		               <ul>
			               <li><a href="#"><i class="ion-ios-arrow-back"></i></a></li>
		                  <li class="active"><span>1</span></li>
		                  <li><a href="#">2</a></li>
		                  <li><a href="#">3</a></li>
		                  <li><a href="#">4</a></li>
		                  <li><a href="#">5</a></li>
		                  <li><a href="#"><i class="ion-ios-arrow-forward"></i></a></li>
		               </ul>
		            </div>
					</div>
				</div>
        <Brands/>
    </>
  )
}

export default Women;
