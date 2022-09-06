import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../images/icon.png';
import axios from 'axios';

const Header = () => {
	let [categories, setCategories] = useState([]);
	function load() {
		axios.post("http://localhost:8081/productcategory/list").then((res) => {
			setCategories(res.data.data);
		})
	}

	useEffect(() => {
		load();
	}, []);


	const NavStyle = ({ isActive }) => {
		return {
			color: isActive ? ' #88c8bc ' : '',
			position: isActive ? 'relative' : ''
		}
	}

	let path = useLocation();
	let adminloggedin = false;
	if (localStorage.getItem("usertype") != null) {
		if (localStorage.getItem("usertype") === "admin")
			adminloggedin = true;
	}

	if (path.pathname !== '/vendorlogin' && path.pathname !== '/adminlogin' && path.pathname !== '/register' && path.pathname !== '/userlogin') {

		return (
			<>

				<nav className="colorlib-nav position-relative" role="navigation">
					<div className="top-menu">
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm-7 col-md-9">
									<div id="colorlib-logo"><NavLink to="/"><img src={logo} className="img-fluid" style={{ width: "60px" }} /> Footwear</NavLink></div>
								</div>
								<div className="col-sm-5 col-md-3">
									<form action="#" className="search-wrap">
										<div className="form-group">
											<input type="search" className="form-control search" placeholder="Search" />
											<button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
										</div>
									</form>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-12 text-left menu-1">
									<ul>
										<li className="nav-bar-link" ><NavLink className="nav-bar-link" style={NavStyle} to="/">Home</NavLink></li>
										{
											categories.map((category) => {
												return (
													<>
														<li><NavLink style={NavStyle} className='nav-bar-link' to={"/products/" + category._id}>{category.name}</NavLink></li>
													</>
												)
											})
										}




										<li><NavLink style={NavStyle} className="nav-bar-link" to="/about">About</NavLink></li>
										<li><NavLink style={NavStyle} className="nav-bar-link" to="/contact">Contact</NavLink></li>
										{
											adminloggedin ? <li><NavLink style={NavStyle} className="nav-bar-link" to="/administration">Administartion</NavLink></li> : " "
										}




										<li className='cart'><NavLink style={NavStyle} className="nav-bar-link" to="/userlogin">User Login </NavLink></li>
										<li className="cart"><NavLink style={NavStyle} className="nav-bar-link" to="/cart"><i className="icon-shopping-cart"></i> Cart [0]</NavLink></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>


			</>

		)
	}
	else {
		return (
			<div> </div>)
	}
}

export default Header;
