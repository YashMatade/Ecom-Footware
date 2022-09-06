import React, { useEffect, useState } from 'react';
import Carisoul from './Carisoul';
import SummerSaleBorder from './SummerSaleBorder';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
  const [categories, setCategories] = useState([]

  )

  useEffect(() => {
    axios.post("http://localhost:8081/productcategory/list", { data: { pcid: "" } }).then((res) => {
      setCategories(res.data.data);
    })
  }, [])

  return (
    <div>

      <SummerSaleBorder />
      <Carisoul />
      <div className="colorlib-product">
        <div className="container">
          <div className="row m-2 mb-2 py-2">
            <div className="mx-auto offset-sm-2 text-center colorlib-heading">
              <h2>Product categories</h2>
            </div>


            {
              categories.map((e) => {

                return (
                  <div className="col-lg-4 py-2 text-center">
                    <div className="product-entry border">
                      <div className="desc">
                        <h2><Link to={"/products/" + e._id}>{e.name}</Link></h2>

                      </div>
                      <Link to={"/products/" + e._id} className="prod-img">
                        <img src={"http://localhost:8081/" + e.imagepath} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home;
