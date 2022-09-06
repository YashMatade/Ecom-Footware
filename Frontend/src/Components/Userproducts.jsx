import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Brands from './Brands';
import SummerSaleBorder from './SummerSaleBorder';
const Userproducts = () => {
	let categoryid = useParams().categoryid;
	const [category, setCategory] = useState({});
	const [products, setProducts] = useState([]);
	useEffect(() => {
		if (categoryid !== null) {
			axios.post('http://localhost:8081/productcategory/get/', { data: { id: categoryid } })
				.then((response) => {
					setCategory(response.data.data);
				});

			axios.post("http://localhost:8081/product/list", { data: { pcid: categoryid } }).then((res) => {
				setProducts(res.data.data);
			});
		}
	}, [categoryid]);



	return (
		<>
			<SummerSaleBorder />
			<div>
				<div class="breadcrumbs">
					<div class="container">
						<div class="row">
							<div class="col">
								<p class="bread"><span><a href="/">Home</a></span> / <span>{category.name}</span></p>
							</div>
						</div>
					</div>
				</div>

				<div class="breadcrumbs-two">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="breadcrumbs-img img-fluid"
									style={{
										backgroundImage: 'url(' + 'http://localhost:8081/' +
											category.imagepath + ')'
									}}>
									<h2>{category.name}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div class="row row-pb-md mt-3">
					{
						products.map((data) => {
							return <>
								<div class="col-lg-3 col-mb-4 text-center mb-4">
									<div class="product-entry border">
										<a href="#" class="prod-img">
											<img src={"http://localhost:8081/" + data.imagepath} style={{ height: '200px' }} class="img-fluid" alt="Free html5 bootstrap 4 template" />
										</a>
										<div class="desc">
											<h2><a href="#">{data.name}</a></h2>
											<span class="price">&#8377;{data.price}/-</span>
											<Link className='btn btn-danger mt-2' to={"/product/" + data._id}>Show more</Link>
										</div>
									</div>
								</div>
							</>
						})
					}
				</div>
			</div>
			<Brands />
		</>
	)
}

export default Userproducts;
