import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import img1 from '../images/loginimg2.svg';
const UserLoginForm = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios.post("http://localhost:8081/user/login", {
      data: {
        email: data.email,
        password: data.password
      }
    }).then(res => {
      console.log((res.data.data));
    })
    navigate('/')
  }


  return (
    <>
      <section className="vh-100 ">
        <div className="container mt-5 py-5 h-90 border border-gray">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src={img1}
                className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>

                <div className="form-outline mb-4">
                  <input type="email" id="email" autoComplete='off' className="form-control form-control-lg" value={data.email} onChange={(e) => { handle(e) }} />
                  <label htmlFor=''>Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="password" className="form-control form-control-lg" value={data.password} onChange={(e) => { handle(e) }} />
                  <label className="form-label" >Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>



                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={(e) => { submit(e) }}>Sign in</button>
                dosen't have an account?
                <Link to='/register' type="button" className="btn btn-primary btn-lg btn-block">Register Now!</Link>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#3b5998' }} href="#!"
                  role="button">
                  <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                </a>
                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!"
                  role="button">
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserLoginForm;
