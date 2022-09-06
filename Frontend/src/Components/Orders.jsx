import React from 'react'
import {Link} from 'react-router-dom'
const Orders = () => {
  return (
    <div>
     <hr className='container'/>
       <div class="breadcrumbs">
		<p class="bread"><span><Link to="/home">Admin</Link></span> / <span>Orders</span></p>
        <h1 className='text-center bg-light'>Orders</h1>

		</div>

    </div>
  )
}

export default Orders
