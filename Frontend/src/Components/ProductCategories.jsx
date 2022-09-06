import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ProductCategories = () => {

  const [data, setData] = useState([]);

  function load() {
    axios.post("http://localhost:8081/productcategory/list").then((res) => {
      setData(res.data.data);
    })
  }

  
  useEffect(() => {
    load();
  }, []);

  function deletecategory(e, id) {
    e.preventDefault();
    axios.post("http://localhost:8081/productcategory/delete", {data: {id: id }}).then((res) => {
      load();
    })
  }


  return (
    <>
      <hr className='container' />
      <div class="breadcrumbs">
        <p class="bread"><span><Link to="/home">Admin</Link></span> / <span>Product Categories</span></p>
        <h1 className='text-center bg-light'>Product Categories</h1>
        <div className='text-right'>
          <Link to="/administration/productcategory" className='btn btn-primary '>Add Category</Link>
        </div>
      </div>
      <table className='table table-bordered table-striped text-center'>
        <tr>
          <th> <h5>Action</h5> </th>
          <th><h5>No</h5></th>
          <th><h5>Sr.No</h5></th>
          <th><h5>Name</h5></th>
        </tr>
        {
          data.map((item, i) => {
            return (
              <>
                <tr key={item._id}>
                  <td>
                    <Link className="btn btn-primary" to={"/administration/productcategory/" + item._id}>Edit</Link>
                    <button className="btn btn-danger" onClick={(e) => deletecategory(e, item._id)} >Delete</button>
                  </td>
                  <td>{item.srno}</td>
                  <td><img src={"http://localhost:8081/" + item.imagepath} alt={item.name} style={{ height: '60px' }} /></td>
                  <td>{item.name}</td>
                </tr>
              </>
            )
          })
        }
      </table>
    </>

  )
}

export default ProductCategories;
