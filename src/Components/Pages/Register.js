import React, { useState } from 'react'
import axios from 'axios'
import Logincss from './Logincss';
import Loginjs from './Loginjs';
function Login() {



    const[fname,setFname]=useState('');
    const[email,setEmail] = useState('');
    const[mobile,setMobile] = useState('');
    const[password,setPassword] = useState('');
   
    const [fnameError, setFnameError] = useState(false);
    const [fnameErrormsg, setFnameErrormsg] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrormsg, setEmailErrormsg] = useState('');
    const [mobileError, setMobileError] = useState(false);
    const [mobileErrormsg, setMobileErrormsg] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrormsg, setPasswordErrormsg] = useState('');

    function handleSubmit()
    {
        const regExp = /[A-Za-z]/;
        const regnumExp =  /[0-9]/;
        const regmailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

       
        if (!fname) {
            setFnameErrormsg('Required');
            setFnameError(true)
        }
        else if (!regExp.test(fname)) {
            setFnameErrormsg('Only Characters');
            setFnameError(true)
        }
        if (!email) {
            setEmailErrormsg('Required');
            setEmailError(true)
        }
        else if (!regmailExp.test(email)) {
            setEmailErrormsg('Only Characters');
            setEmailError(true)
        }
        if (!mobile) {
            setMobileErrormsg('Required');
            setMobileError(true)
        }
        else if (!regnumExp.test(mobile)) {
            setMobileErrormsg('Only Numbers');
            setMobileError(true)
        }
        if (!password) {
            setPasswordErrormsg('Required');
            setPasswordError(true)
        }



        else {
        const data={
            "fname":fname,
            "email":email,
            "mobile":mobile,
            "password":password,
        };

        console.log(data);
        axios.post('http://127.0.0.1:8000/api/UserRegister',data)
        .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status === "success")
            {
                console.log("Data Added");
                alert('Data Added!!!');
                window.location.href='/Login';
            }
            else
            {
                console.log("Error");
            }
        });
        }
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
                    <label for="username">Full Name</label>
                    <input type="text" class="form-control" placeholder="" name="fname" onChange={(fname)=>{setFname(fname.target.value)
                                                    setFnameError(false)}} value={fname} />
                                                    {fnameError && <p className="error">{fnameErrormsg}</p>}
                  </div>

                  <div class="form-group first">
                    <label for="username">Email</label>
                    <input type="email" class="form-control" placeholder="" name="email" onChange={(email)=>{setEmail(email.target.value)
                                                    setEmailError(false)}} value={email} />
                                                    {emailError && <p className="error">{emailErrormsg}</p>}                  </div>


                  <div class="form-group first">
                    <label for="username">Mobile</label>
                    <input type="text" class="form-control" placeholder="" name="mobile" onChange={(mobile)=>{setMobile(mobile.target.value)
                                                    setMobileError(false)}} value={mobile} />
                                                    {mobileError && <p className="error">{mobileErrormsg}</p>}
                  </div>

                  <div class="form-group first">
                    <label for="username">Password</label>
                    <input type="text" class="form-control" placeholder="" name="password" onChange={(password)=>{setPassword(password.target.value)
                                                    setPasswordError(false)}} value={password} />
                                                    {passwordError && <p className="error">{passwordErrormsg}</p>}
								</div>

               
                  <div class="d-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                      <input type="checkbox" checked="checked" />
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
                  </div>

                  <button type="button" class="btn btn-success btn-block" onClick={handleSubmit}>
										Register
									</button>

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