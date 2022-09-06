import React, { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Administration = () => {

  let navivate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("usertype") !== "admin") {
      navivate("/adminlogin");
    }
  }, []);


  let NavStyle = ({ isActive }) => {
    return {

      color: isActive ? ' #88c8bc ' : '',
      position: isActive ? 'relative' : ''

    }
  }
  function logout() {
    // window.Confirm('Are you sure to log our?')
    if (window.confirm('Sure to logout?')) {
      localStorage.clear();
      navivate("/");
    }
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 mt-3 ">
            <ul>
              <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/dashboard"> Dashboard </NavLink> </li>
              <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/productcategories" > Product Categories </NavLink> </li>
              <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/products" > Products </NavLink> </li>
              <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/orders"> Orders </NavLink> </li>
              <li className="nav-bar-link"><NavLink style={NavStyle} to="/administration/failedorders"> Failed Orders </NavLink> </li>
              <li className="nav-bar-link"><NavLink style={NavStyle} onClick={(e) => { logout(e) }} to="/" > Log Out </NavLink> </li>
            </ul>

          </div>
          <div className="col-lg-10">
            <Outlet />

          </div>
        </div>
      </div>

    </>

  )
}

export default Administration

