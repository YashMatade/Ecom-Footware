import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  let [data, setData] = useState([]);

  function load(){
    axios.post("http://localhost:8081/product/list", {data:{pcid:""}}).then((res)=>{
      setData(res.data.data);
    })
  }
  useEffect(()=>{
    load();
  },[])
  function deleteproduct(e, id){
    e.preventDefault();
    axios.post("http://localhost:8081/product/delete", {data:{id:id}}).then((res)=>{
      load();
    })
  }





  return (
    <div>
      <hr className='container'/>
       <div class="breadcrumbs">
		<p class="bread"><span><Link to="/home">Admin</Link></span> / <span>Products</span></p>
        <h1 className='text-center bg-light'>Products</h1>
		</div>
    <div className='text-right'>
        <Link to="/administration/product" className='btn btn-primary '>Add Product</Link>
		</div>
    <table className='table table-bordered table-striped'>
      <tr>
        <th>Action</th>
        <th>No</th>
        <th>Name</th>
        <th>Varieties</th>
      </tr>
      {
          data.map((data)=>{
            return(
              <>
              <tr>
                <td>
                <Link className="btn btn-primary " to={"/administration/product/" + data._id }>Edit</Link>
                  <button className="btn btn-danger" onClick={(e)=>deleteproduct(e, data._id)} >Delete</button>
                </td>
                <td>{data._id}</td>             
                <td>{data.name}</td>
                <td>
                  <Link className='btn btn-warning' to={"/administration/products/varieties/" + data._id }>{data.varieties.length}</Link>
                </td>
                {/* <td><img src={ "http://localhost:8081/" + data.imagepath} style={{height:'70px'}} /></td> */}
              </tr>
              </>
            )
          })
        }
      
      </table>
    
    </div>
  )
}

export default Products;
