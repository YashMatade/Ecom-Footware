import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router'
const AdminLogin = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function textchanged(e) {
    e.preventDefault();
    if (e.target.id === "username") {
      setUsername(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  }
  function login(e) {
    e.preventDefault();
    let data = { data: { username: username, password: password } };
    console.log(data);

    axios.post("http://localhost:8081/admin/login", data).then((result) => {
      if (result.data.data.status === "success") {
        localStorage.setItem("usertype", "admin");
        // navigate('/administration');
        window.location.href = "/administration";
      }
      else {
        alert("Invalid credentials");
      }

    })
  }


  return (
    <div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-5 border border-dark">
            <h2>Admin Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input type="text"
                  onChange={(e) => { textchanged(e) }}
                  value={username}
                  className="form-control" id='username' placeholder="Enter User Name" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                  onChange={(e) => { textchanged(e) }}
                  value={password} className="form-control" id="password" placeholder="Password" />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" >Check me out</label>
              </div>
              <button type="submit" onClick={(e) => { login(e) }} className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-lg-4">

          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminLogin;
