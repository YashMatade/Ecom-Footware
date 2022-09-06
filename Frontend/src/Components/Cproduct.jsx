import React, { useState, useEffect } from 'react';
import SummerSaleBorder from './SummerSaleBorder';
import { Button, ToastContainer } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
const Cproduct = () => {
    let productid = useParams().productid;
    const [product, setProduct] = useState({});
    const [cartproduct, setCartproduct] = useState({
        productid:productid,
        color:"",
        size:"",
        mrp:0,
        price: 0,
        quantity:0
    });

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [mrp, setMrp] = useState([]);
    const [price, setPrice] = useState([]);


    useEffect(() => {
        if (productid !== null) {
            axios.post("http://localhost:8081/product/get", { data: { id: productid } }).then((res) => {
                setProduct(res.data.data);

                let cp = {...cartproduct};
                cp.mrp = res.data.data.mrp;
                cp.price = res.data.data.price;
                setCartproduct(cp);

                setMrp(res.data.data.mrp);
                setPrice(res.data.data.price);

                let tempcolors = [];
                let tempsizes = [];
                res.data.data.varieties.map((variety)=>{
                    if(tempcolors.indexOf(variety.color) === -1){
                        tempcolors.push(variety.color);
                    }
                    if(tempsizes.indexOf(variety.size) === -1){
                        tempsizes.push(variety.size);
                    }
                })
                setColors(tempcolors);
                setSizes(tempsizes);
            })
        }
    }, [productid]);

   function changeColorSize(e, ctype){
        e.preventDefault();        
        let cp = {...cartproduct};
        cp[ctype] = e.target.value;
        setCartproduct(cp);
        let found = false;
        for(let i = 0; i < product.varieties.length; i++)
        {
            let variety = product.varieties[i];
            if(variety.color === cartproduct.color && variety.size === cartproduct.size){
                found = true;
                cp["mrp"] = variety.mrp;
                cp["price"] = variety.price;
                setCartproduct(cp);
                setMrp(variety.mrp);
                setPrice(variety.price);
            }
        }
        if(!found){
            alert("Combination Not Available");  
        }
    }


    let navigate = useNavigate()
    function addToCart() {
        navigate('/administration');
    }
    
    if (product != null) {
        return (
            <>
                <SummerSaleBorder />
                <div className="container border border-dark mt-3">
                    <div className="contaner">
                        <div className="row">

                            <div className="col-lg-4">
                                <img src={"http://localhost:8081/" + product.imagepath} alt="image" className='img-fluid' />
                                <h1 className="text-center">{product.name}</h1>
                            </div>  
                            <div className="col-lg-8">
                                <h1 >{product.name}</h1>
                                <p>Ratings : <br /> ⭐⭐⭐⭐⭐</p>
                                <p>Price:  &#8377; {price} /- </p>
                                <p>MRP:  &#8377; {mrp} /- </p>
                                Size
                                <br/>
                                {
                                  sizes.map((size) => {
                                    return (
                                    <>
                                        <label className='btn'><input onChange={(e)=>{changeColorSize(e, 'size')}} type="radio" name="size" value={ size } />{ size }</label>
                                        <ToastContainer />
                                    </>
                                    )})}
                                <br />
                                Color
                                <br/>
                                {
                                    colors.map((color) => {
                                    return (
                                        <>
                                            <label className='btn' style={{backgroundColor: color}} >
                                            <input type="radio" name="color" onChange={(e)=>{changeColorSize(e, 'color')}}  value={ color } />{ color }</label>
                                            <ToastContainer />
                                        </>
                                    )})}
                                <br />

                                <p>Description: <br /> {product.description} </p>
                                <p>Specification : <br /> {product.specification} </p>

                                <Button onClick={(e) => { addToCart(e) }} className='btn btn-success mt-3'>Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
}

export default Cproduct;
