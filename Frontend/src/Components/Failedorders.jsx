import React from 'react'
import {Link} from 'react-router-dom'
const Failedorders = () => {
  return (
    <div>
      <hr className='container'/>
       <div class="breadcrumbs">
		<p class="bread"><span><Link to="/home">Admin</Link></span> / <span>Failed Orders</span></p>
        <h1 className='text-center'>Failed Orders</h1>
		</div>
    </div>
  )
}

export default Failedorders
