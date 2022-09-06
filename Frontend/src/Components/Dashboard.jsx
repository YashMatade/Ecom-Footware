import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react';
import Jumbotron from './Jumbotron';

const Dashboard = (props) => {
  let order = "99+";

  return (
    <div>
      <hr className='container-fluid' />
      <div className="breadcrumbs">
        <p className="bread"><span><Link to="/home">Admin</Link></span> / <span>Dashboard</span></p>
        <h1 className='text-center bg-light'>Dashboard</h1>
        
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>

            <Jumbotron title="Orders" order={order} />
            <Jumbotron title="Products" order={order} />
          </div>
          <div className='col-lg-6'>
            <Jumbotron title="Categories" order={order} />
            <Jumbotron title="Hello" order={order} />
          </div>
        </div>
      </div>

    </div>



  )
}

export default Dashboard;
