import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

const Product = () => {
  let navigate = useNavigate();
  const [data,setData]=useState({
    id:'',
    pcid:'',
    name:'',
    description:'',
    specification:'',
    mrp:0,
    price:0,
    varieties:[],
    instock:'Yes',
    isactive:'Yes',
    image:'',
  });

  // let id = null;

  let {id} = useParams();
  useEffect(()=>{
    // alert(id)
    if(id !== null)
    {
      axios.post('http://localhost:8081/product/get/', {data:{id:id}})
        .then((response) => {
          const newData = {...data};
          newData["id"] = response.data.data._id;
          newData["pcid"] = response.data.data.pcid;
          newData["name"] = response.data.data.name;
          newData["description"] = response.data.data.description;
          newData["specification"] = response.data.data.specification;
          newData["mrp"] = response.data.data.mrp;
          newData["price"] = response.data.data.price;
          newData["varieties"] = response.data.data.varieties;
          newData["instock"] = response.data.data.instock;
          newData["isactive"] = response.data.data.isactive;
          setData(newData);
        })
    }
  }, []);

  let [categories, setCategories] = useState([]);

    useEffect(()=>{
      axios.post("http://localhost:8081/productcategory/list").then((res)=>{
        setCategories(res.data.data);
      })
    }, []);
    function handle(e){
      if(e.target.id === "image"){
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () =>{
            if(reader.result != null)
            {
              const newData = {...data};
              newData[e.target.id] = reader.result.toString();
              setData(newData);
            }
          }
      }
      else{
          const newData = {...data};
          newData[e.target.id] = e.target.value;
          setData(newData);
      }
  }
  function submit(e){
    e.preventDefault();
    console.log(data);
     axios.post("http://localhost:8081/product/save",{data:data}).then(res=>{
         navigate('/administration/products');
     })
}

  return (
    <div>
      <hr className='container'/>
       <div class="breadcrumbs">
		<p class="bread"><span><Link to="/home">Admin</Link></span> / <span><Link to="/administration/products">Products</Link></span>/<span>Product</span></p>
        <h1 className='text-center bg-light'>Product</h1>
		</div>

    <div className="container">
    <div className="row">
        <div className="col-xxl-8 col-10 col-md-8 mx-auto">

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Product Name</label>
              <input type="text" className="form-control" value={data.name} onChange={(e)=>{handle(e)}} id="name" placeholder="Enter Product name"
                name="name"/>
            </div>

            <label for="pcid">Category</label>
            <select className='form-control' onChange={(e)=>handle(e)}  value={data.pcid} id="pcid">
            <option value="">Category</option>
                {
                  categories.map((category)=>{
                    return(
                          <option value={ category._id }>{ category.name }</option>
                           )})
                }
            </select> 

            <div className="mb-3">
            <label for="image">Image</label>
            <input type="file" accept="image/*" onChange={(e)=>handle(e)} className="form-control" id="image" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
              <input type="text" className="form-control" id="description" value={data.description} onChange={(e)=>handle(e)}
                name="description"/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Specification</label>
              <input type="text" className="form-control" id="specification" value={data.specification} onChange={(e)=>handle(e)}
                name="specification"/>
            </div>

            <div className="mb-3">
            <label htmlFor="srno">MRP</label>
            <input className="form-control" placeholder='0' value={data.mrp} onChange={(e)=>handle(e)} type="number" id='mrp' min="1"/>
            </div>

            <div className="mb-3">
            <label htmlFor="srno">Price</label>
            <input className="form-control" value={data.price} onChange={(e)=>handle(e)} placeholder='0' type="number" id='price' min="1"/>
            </div>

            <button type="submit" onClick={(e)=>submit(e)} className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product;
