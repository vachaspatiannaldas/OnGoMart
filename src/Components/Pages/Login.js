
import React, { useState } from 'react';
import axios from 'axios';
import Logincss from './Logincss';
import Loginjs from './Loginjs';

function Login() {

  const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

	function handleSubmit()
    {
        const data = {
            'email':email,
            'password':password
        };
        console.log(data);
        axios.post('http://127.0.0.1:8000/api/UserLogin',data)
        .then((resp)=>{
            const data = resp.data;
                    console.log(resp);
                    if (data[0].status === "success") {
                        console.log("Data Added");
                        alert('Login Successfully!!!');
                        localStorage.setItem("uid",JSON.stringify(data[0].user));
                        // localStorage.getItem("")
                        window.location.href="/"
                        
                    }
                    else {
                        alert('Invalid Email and password ')
                        console.log("Error");
                    }
        })
    }
  return (
    <React.Fragment>

      <Logincss />

      <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2" style={{
          backgroundImage: `url("/Login/images/bg_1.jpg")`
        }} ></div>
        <div class="contents order-2 order-md-1">

          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                <h3>Login to <strong>OG Shop</strong></h3>
                <form action="#" method="post">
                  <div class="form-group first">
                    <label for="username">Username</label>
                    <input type="text" name="email" onChange={email=>setEmail(email.target.value)} value={email} class="form-control" />
                  </div>
                  <div class="form-group last mb-3">
                    <label for="password">Password</label>
                    <input type="password" name="password" onChange={password=>setPassword(password.target.value)} value={password} class="form-control" />
                  </div>

                  <div class="d-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                      <input type="checkbox" checked="checked" />
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
                  </div>

                  <button type="button" class="btn btn-sucess btn-block" onClick={handleSubmit}>
										Login
									</button>
                  <a href='/registration'>
										Register
									</a>

                </form>
              </div>
            </div>
          </div>
        </div>


      </div>

      <Loginjs />
    </React.Fragment>
  )
}

export default Login