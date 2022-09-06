import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    mobileno: '',
    password: '',
  });

  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios.post("http://localhost:8081/user/register", {
      data: {
        name: data.name,
        email: data.email,
        mobileno: data.mobileno,
        password: data.password,
      }
    }).then(res => {
      console.log(res.data.data);
    })
  }


  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="name" id="name" className="form-control form-control-lg" autoComplete='null' value={data.name} onChange={(e) => { handle(e) }} />
                            <label htmlFor=''>Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email" className="form-control form-control-lg" value={data.email} autoComplete='off' onChange={(e) => { handle(e) }} />
                            <label htmlFor=''>Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" id="mobileno" className="form-control form-control-lg" value={data.mobileno} autoComplete='off' onChange={(e) => { handle(e) }} />
                            <label htmlFor=''>Mobile No.</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" className="form-control form-control-lg" value={data.password} onChange={(e) => { handle(e) }} />
                            <label htmlFor=''>Password</label>
                          </div>
                        </div>


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={submit}>Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register;
