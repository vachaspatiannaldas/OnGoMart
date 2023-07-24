import React, { useState } from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import axios from 'axios';

function Contact() {

	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [mobile,setMobile] = useState();
	const [message,setMessage] = useState();
	
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [mobileError, setMobileError] = useState(false);

	const [nameErrormsg, setNameErrormsg] = useState('');
	const [emailErrormsg, setEmailErrormsg] = useState('');
	const [mobileErrormsg, setMobileErrormsg] = useState('');
	function handleSubmit()
    {
        const regExp = /[A-Za-z]/;
        const regnumExp =  /[0-9]/;
        const regmailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

       
        if (!name) {
            setNameErrormsg('Required');
            setNameError(true)
        }
        else if (!regExp.test(name)) {
            setNameErrormsg('Only Characters');
            setNameError(true)
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
       
        else {
        const data={
            "name":name,
            "email":email,
            "mobile":mobile,
			"message":message
        };

        console.log(data);
        axios.post('http://127.0.0.1:8000/api/Contact',data)
        .then((resp)=>{
            const data = resp.data;
            console.log(resp);
            if(data[0].status === "success")
            {
                console.log("Contact Send Successfully");
                alert('Contact Send Successfully!!!');
                window.location.href='/contact';
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
<Header/>

<section id="contact-us" class="contact-us section">
		<div class="container">
				<div class="contact-head">
					<div class="row">
						<div class="col-lg-8 col-12">
							<div class="form-main">
								<div class="title">
									<h4>Get in touch</h4>
									<h3>Write us a message</h3>
								</div>
								<form class="form" method="post" >
									<div class="row">
										<div class="col-lg-12 col-12">
											<div class="form-group">
												<label>Your Name<span>*</span></label>
												<input name="name" type="text" placeholder="" onChange={(name)=>{setName(name.target.value)
                                                    setNameError(false)}} value={name} />
													 {nameError && <p className="error">{nameErrormsg}</p>}  
											</div>
										</div>
									
										<div class="col-lg-6 col-12">
											<div class="form-group">
												<label>Your Email<span>*</span></label>
												<input name="email" type="email" placeholder=""
												onChange={(email)=>{setEmail(email.target.value)
                                                    setEmailError(false)}} value={email}
												/>
												 {emailError && <p className="error">{emailErrormsg}</p>}  
											</div>	
										</div>
										<div class="col-lg-6 col-12">
											<div class="form-group">
												<label>Your Phone<span>*</span></label>
												<input name="company_name" type="text" placeholder=""
												onChange={(mobile)=>{setMobile(mobile.target.value)
                                                    setMobileError(false)}} value={mobile}
												/>

										{mobileError && <p classmobile="error">{mobileErrormsg}</p>}  
											</div>	
										</div>
										<div class="col-12">
											<div class="form-group message">
												<label>your message<span>*</span></label>
												<textarea name="message" placeholder="" 
												onChange={(message)=>{setMessage(message.target.value)}} value={message}></textarea>
											</div>
										</div>
										<div class="col-12">
											<div class="form-group button">
												<button type="button" class="btn" onClick={handleSubmit}>Send Message</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="col-lg-4 col-12">
							<div class="single-head">
								<div class="single-info">
									<i class="fa fa-phone"></i>
									<h4 class="title">Call us Now:</h4>
									<ul>
										<li>+123 456-789-1120</li>
										<li>+522 672-452-1120</li>
									</ul>
								</div>
								<div class="single-info">
									<i class="fa fa-envelope-open"></i>
									<h4 class="title">Email:</h4>
									<ul>
										<li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
										<li><a href="mailto:info@yourwebsite.com">support@yourwebsite.com</a></li>
									</ul>
								</div>
								<div class="single-info">
									<i class="fa fa-location-arrow"></i>
									<h4 class="title">Our Address:</h4>
									<ul>
										<li>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	</section>
	
	
	
	<div class="map-section">
		<div id="myMap"></div>
	</div>

<Footer/>

    </React.Fragment>
  )
}

export default Contact