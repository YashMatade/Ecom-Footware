import { clear } from '@testing-library/user-event/dist/clear';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Varieties = () => {
    let { id } = useParams();
    // const navigate = useNavigate();

    const [productname, setProductName] = useState(" ");
    const [varieties, setVarieties] = useState([]);
    const [variety, setVariety] = useState({
        color:'',
        size:'',
        mrp:0,
        price:0,       
    })

    useEffect(()=>{
        load();
    },[])

    function load(){
        setVariety({
        color:'',
        size:'',
        mrp:0,
        price:0,
        });
        axios.post("http://localhost:8081/product/get",{data:{id:id}}).then((res)=>{
            // clear(res.data.data.varieties);
            setVarieties(res.data.data.varieties);
            setProductName(res.data.data.name);
        })
    }

    function deleteProductVariety(e, dvariety){
        e.preventDefault();
        axios.post("http://localhost:8081/product/deletevariety", {data:{id:id, variety:dvariety}}).then((res)=>{
            load();
          })
    }
    function saveVariety(e){
        e.preventDefault();
        axios.post("http://localhost:8081/product/savevariety",{data:{id: id,variety:variety}}).then((res)=>{
            load();
        });
    }

    function handle (e){        
        const newData = {...variety};
        newData[e.target.id] = e.target.value;
        setVariety(newData);
    }



  return (
    <div>
      <div className="breadcrumbs">
		<p className="bread"><span><Link to="/home">Admin</Link></span> / <span><Link to="/administration/products">Products</Link></span>/ <span>Varieties</span> </p>
		</div>
            <h1 className='text-center bg-light'>{productname}</h1>
            <div className='container'>
                <div className='row'>
       
                    <div className='col-lg-8'>
                        <label htmlFor="color" className='pb-2'>Color</label>
                        <input type="color" className="form m-2 py-2"  value={variety.color} onChange={(e)=>handle(e)} id="color" /><br></br>
    
                        <label htmlFor="size">Size</label>
                        <input type="text" className="form-control" value={variety.size} id="size" onChange={(e)=>handle(e)} />
                        <label htmlFor="mrp">MRP</label>
                        <input type="number" className="form-control" value={variety.mrp} id="mrp" onChange={(e)=>handle(e)} />
                        <label htmlFor="price">Price</label>
                        <input type="number" className="form-control" value={variety.price} id="price" onChange={(e)=>handle(e)} />
                        <Link to="" onClick={(e)=>saveVariety(e)} className="btn btn-primary py-2">Save</Link>
                    </div>

                </div>
            </div>
        <table className='table table-bordered table-stripped'>
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Color</th>
                    <th>size</th>
                    <th>MRP</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    varieties.map((data)=>{
                      return(  <tr>
                            <td><Link to='' className='btn btn-dark' onClick={(e)=>{deleteProductVariety(e, data)}}>Delete</Link></td>
                            <td style={{backgroundColor:data.color}}>{data.Color}</td>
                            <td>{data.size} </td>
                            <td>{data.mrp} /-</td>
                            <td>{data.price} /-</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default Varieties;
