import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Footer = () => {
	let path = useLocation();
	if (path.pathname !== '/vendorlogin' && path.pathname !== '/adminlogin' && path.pathname !== '/register' && path.pathname !== '/userlogin') {

		return (
			<>
				<footer id="colorlib-footer" role="contentinfo">
					<div className="container">
						<div className="row row-pb-md">
							<div className="col footer-col colorlib-widget">
								<h4>About Footwear</h4>
								<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
								<p>
									<ul className="colorlib-social-icons">
										<li><a href="#"><i className="icon-twitter"></i></a></li>
										<li><a href="#"><i className="icon-facebook"></i></a></li>
										<li><a href="#"><i className="icon-linkedin"></i></a></li>
										<li><a href="#"><i className="icon-dribbble"></i></a></li>
									</ul>
								</p>
							</div>
							<div className="col footer-col colorlib-widget">
								<h4>Customer Care</h4>
								<p>
									<ul className="colorlib-footer-links">
										<li><a href="#">Contact</a></li>
										<li><a href="#">Returns/Exchange</a></li>
										<li><a href="#">Gift Voucher</a></li>
										<li><a href="#">Wishlist</a></li>
										<li><a href="#">Special</a></li>
										<li><a href="#">Customer Services</a></li>
										<li><a href="#">Site maps</a></li>
									</ul>
								</p>
							</div>
							<div className="col footer-col colorlib-widget">
								<h4>Information</h4>
								<p>
									<ul className="colorlib-footer-links">
										<li><a href="#">About us</a></li>
										<li><a href="#">Delivery Information</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">Order Tracking</a></li>
									</ul>
								</p>
							</div>

							<div className="col footer-col">
								<h4>Menus</h4>
								<ul className="colorlib-footer-links">
									<li><Link to="blog.html">Home</Link></li>
									<li><Link to="#">Categories</Link></li>
									<li><Link to="#">Exhibitions</Link></li>
									<li><Link to="#">About</Link></li>
									<li><Link to="#">Contact</Link></li>
									{/* <li><Link  className="nav-bar-link" to="/administration">administration</Link></li> */}
									{/* <li><Link to="/vendorlogin">Vendor Login</Link></li>npm */}
									<li><Link to="/adminlogin">Admin Login</Link></li>
								</ul>
							</div>

							<div className="col footer-col">
								<h4>Contact Information</h4>
								<ul className="colorlib-footer-links">
									<li>291 South 21th Street, <br /> Suite 721 New York NY 10016</li>
									<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
									<li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
									<li><a href="#">yoursite.com</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="copy">
						<div className="row">
							<div className="col-sm-12 text-center">
								<p>
									<span>
										Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
									</span>
									<span className="block">Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a> , <a href="http://pexels.com/" target="_blank">Pexels.com</a></span>
								</p>
							</div>
						</div>
					</div>
				</footer>

			</>
		)
	}
	else {
		return (
			<div> </div>
		)
	}
}

export default Footer;
