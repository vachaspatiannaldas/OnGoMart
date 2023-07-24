import React, { useEffect, useState } from "react";
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import axios from "axios";

function Checkout() {




    const [fname, setFname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [uid, setUid] = useState("");

const [user_id, setuserid] = useState("");

  const [fnameError, setFnameError] = useState(false);
  const [fnameErrormsg, setFnameErrormsg] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrormsg, setEmailErrormsg] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [addressErrormsg, setAddressErrormsg] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [mobileErrormsg, setMobileErrormsg] = useState("");
  const [cityError, setCityError] = useState(false);
  const [cityErrormsg, setCityErrormsg] = useState("");
  const [pinError, setPinError] = useState(false);
  const [pinErrormsg, setPinErrormsg] = useState("");
  const [product, setProduct] = useState([""]);
  const [username, setUsername] = useState([""]);
  const [payment_id, setPayment_id] = useState("");

  function handleSubmit(e,payment_mode) {
  	e.preventDefault();
    const regExp = /[A-Za-z]/;
    const regnumExp = /[0-9]/;
    const regmailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!fname) {
      setFnameErrormsg("Required");
      setFnameError(true);
    } else if (!regExp.test(fname)) {
      setFnameErrormsg("Only Characters");
      setFnameError(true);
    }
    if (!email) {
      setEmailErrormsg("Required");
      setEmailError(true);
    } else if (!regmailExp.test(email)) {
      setEmailErrormsg("Only Characters");
      setEmailError(true);
    }
    if (!address) {
      setAddressErrormsg("Required");
      setAddressError(true);
    }
    if (!mobile) {
      setMobileErrormsg("Required");
      setMobileError(true);
    } else if (!regnumExp.test(mobile)) {
      setMobileErrormsg("Only Numbers");
      setMobileError(true);
    }
    if (!city) {
      setCityErrormsg("Required");
      setCityError(true);
    } else if (!regExp.test(city)) {
      setCityErrormsg("Only Characters");
      setCityError(true);
    }
    if (!pin) {
      setPinErrormsg("Required");
      setPinError(true);
    } else if (!regnumExp.test(pin)) {
      setPinErrormsg("Only Numbers");
      setPinError(true);
    } else {
      var today = new Date(),
        date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate() +
          "/" +
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        const data = {
          name: fname,
          mobile: mobile,
          email: email,
          address: address,
          city: city,
          pin: pin,
          bill_amount: totalamount,
          bill_date: date,
          pdata: JSON.stringify(product),
          uid: uid,
          user_id: uid,
          payment_mode:payment_mode,
          payment_id:payment_id,
          
        };




  switch(payment_mode) {
    case 'cod':
      axios
        .post("http://127.0.0.1:8000/api/CustomerDetail", data)
        .then((resp) => {
        const data = resp.data; // update data with the response data
          if (data[0].status === "success") {
            console.log("Order Placed Successfully");
            alert("Order Placed Successfully!!!");
            window.location.href = "/";
          } else {
            console.log(data);
          }
        });
      break;
    
      case 'razopay':

        var options = {
          "key": "rzp_live_C2GyJ2UPypLCqu", 
          "amount": (1 * 100), 
          "currency": "INR",
          "name": "OG Mart",
          "description": "Thank you for purchasing with OG Mart",
          "image": "https://drive.google.com/file/d/1YPHT6V3m4RMkpOqt5bgalA9RkOCjrkY3/view?usp=share_link",
          "handler": function (response){
              console.log(response.razorpay_payment_id);
              data.payment_id = response.razorpay_payment_id;
              // call the rzp.open() method here
              rzp.open();
          },
          "prefill": {
              "name": data.name, 
              "email": data.email,
              "contact": data.mobile
          },
          "theme": {
              "color": "#3399cc"
          }
        };
        var rzp = new window.Razorpay(options);
        
        // call rzp.open() method here to initiate payment process and redirect user to Razorpay payment gateway
        rzp.open();
  axios
    .post("http://127.0.0.1:8000/api/validateorder", data)
    .then((resp) => {
      const data = resp.data;
      // if (data && data[0] && data[0].status === "success") {
        if (data[0].status === "success") {
        window.location.href = "/";

      } else {
        console.log(data);
      }
    });
  break;




       
    default:
      break;
  }



      console.log(data);
    

    }
  }

  var p = 0;
  var dis = 0;
  var totalCartPrice = 0;
  var totalamount = 0;
  var ptotal = 0;
  function cartShow() {
    var user = JSON.parse(localStorage.getItem("uid"));
    //console.log(user.id);
    axios.get("http://127.0.0.1:8000/api/Cartshow/" + user.id).then((res) => {
      const data = res.data;
      //console.log(data);
    
      setUid(user.id);
      setProduct(data);
      const json = JSON.stringify(data);
      console.log(json);
      console.log(data);

      // console.log(data[0]);
      // console.log(data[1].pname);
    });
  }


  function RegisterUserShow() {
    var user = JSON.parse(localStorage.getItem("uid"));
    //console.log(user.id);
    axios.get("http://127.0.0.1:8000/api/UserRegister/" + user.id).then((res) => {
      const data = res.data;
      //console.log(data);
    
      setUid(user.id);
      setUsername(data);
      const json = JSON.stringify(data);
      console.log(json);
      console.log(data);

      // console.log(data[0]);
      // console.log(data[1].pname);
    });
  }

  useEffect(() => {
    cartShow();
    RegisterUserShow();
  }, []);
  return (
    <React.Fragment>
        <Header/>
        


        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       
        
        <section class="shop checkout section">
			<div class="container">
				<div class="row"> 
					<div class="col-lg-4 col-12">
						<div class="checkout-form">
							<h2>Make Your Checkout Here</h2>
							<p>Please register in order to checkout more quickly</p>
							
							<form class="form" method="post" action="#">
								<div class="row">
									<div class="col-md-12">
                    <input type="hidden" name=""  onChange={(payment_id) => {
                                                    setPayment_id(payment_id.target.value);
                                                    }}
                                                    value={payment_id}/>
										<div class="form-group">
											<label>Full Name <span>*</span></label>
                                            <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    name="fname"
                                                    onChange={(fname) => {
                                                    setFname(fname.target.value);
                                                    setFnameError(false);
                                                    }}
                                                    value={fname}

                                                
                                                />
                                                {fnameError && <p className="error" style={{color:"red"}}>{fnameErrormsg}</p>}
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>mobile<span>*</span></label>
                                            <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        name="mobile"
                                                        onChange={(mobile) => {
                                                        setMobile(mobile.target.value);
                                                        setMobileError(false);
                                                        }}
                                                        value={mobile}
                                                    />
                                                    {mobileError && <p   style={{color:"red"}} className="error">{mobileErrormsg}</p>}
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Email Address<span>*</span></label>
                                            <input
                                                        type="email"
                                                        class="form-control"
                                                        placeholder=""
                                                        name="email"
                                                        onChange={(email) => {
                                                        setEmail(email.target.value);
                                                        setEmailError(false);
                                                        }}
                                                        value={email}
                                                    />
                                                    {emailError && <p  style={{color:"red"}}  className="error">{emailErrormsg}</p>}
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Address<span>*</span></label>
											<input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    name="address"
                                                    onChange={(address) => {
                                                    setAddress(address.target.value);
                                                    setAddressError(false);
                                                    }}
                                                    value={address}
                                                />
                                                {addressError && (
                                                    <p  style={{color:"red"}}  className="error">{addressErrormsg}</p>
                                                )}
										</div>
									</div>
									
									<div class="col-md-12">
										<div class="form-group">
											<label>City<span>*</span></label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            placeholder=""
                                            name="city"
                                            onChange={(city) => {
                                            setCity(city.target.value);
                                            setCityError(false);
                                            }}
                                            value={city}
                      />
                      {cityError && <p   style={{color:"red"}} className="error">{cityErrormsg}</p>}
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Pincode<span>*</span></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=""
                                                name="pin"
                                                onChange={(pin) => {
                                                setPin(pin.target.value);
                                                setPinError(false);
                                                }}
                                                value={pin}
                                            />
                                             {pinError && <p  style={{color:"red"}}  className="error">{pinErrormsg}</p>}
										</div>
									</div>
									








                    <div class="col-md-12">
                    <div class="form-group">
                                            <input
                                                type="hidden"
                                                class="form-control"
                                                placeholder=""
                                                name="uid"                                          
                                                value={uid}
                                            />
                    </div>
                  </div>
                  
									
									
								</div>
							</form>
							
						</div>
					</div>
                    <div class="col-lg-1 col-12"></div>
					<div class="col-lg-7 col-12">
                    <div class="shopping-cart section" style={{background:"#fff"}}>
		<div class="container">
			<div class="row">
				<div class="">
					
					<table class="table shopping-summery">
						<thead>
							<tr class="main-hading">
								<th>PRODUCT</th>
								<th class="text-center">Product Name</th>
								<th class="text-center">Quantity</th>
								<th class="text-center">Price</th> 
								<th class="text-center">Total</th> 

							</tr>
						</thead>
						<tbody>
						{ product.map((row)=>{
                  
				  p = row.price_sale * row.pqty
				  dis = p * row.discount / 100
				  totalCartPrice += row.price_sale * row.pqty - dis
										  return(
							<tr>
								<td class="image" data-title="No"><img  src={`http://localhost:8000/product_upload/${row.img}`} alt="#"  style={{width:"180px",height:"50px"}}  /></td>
								<td class="product-des" data-title="Description">
									<p class="product-name"><a href="#">{row.pname}</a></p>
									<p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
								</td>
								<td class="price" data-title="Price"><span>{row.pqty}</span></td>
								
								<td class="total-amount" data-title="Total"><span>{row.price_sale}</span></td>
								<td class="total-amount" data-title="Total"><span>{(row.price_sale * row.pqty) - dis}</span></td>

							</tr>
							   )
							})
						   }
							
						</tbody>
					</table>
					
				</div>
			</div>
			
		</div>
	</div>
						<div class="order-details col-md-7" style={{float:"right",marginTop:"-40px"}}>
							
							<div class="single-widget">
								<h2>CART  TOTALS</h2>
								<div class="content">
									<ul>
										<li>Sub Total<span>Subtotal: <i class="fa fa-rupee"></i>
                                                {totalCartPrice}</span></li>
										<li>(+) Shipping<span>$0.00</span></li>
										<li class="last">Total<span>Subtotal:<i class="fa fa-rupee"></i>
                                                 {totalCartPrice}</span></li>
									</ul>
								</div>
							</div>
							
							
							<div class="single-widget">
								<h2>Payments</h2>
								<div class="content">
									{/* <div class="checkbox">
										<label class="checkbox-inline" for="1"><input name="updates" id="1" type="checkbox"/> Check Payments</label>
										<label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox"/> Cash On Delivery</label>
										<label class="checkbox-inline" for="3"><input name="news" id="3" type="checkbox"/> PayPal</label>
									</div> */}
								</div>
							</div>
							
							
							<div class="single-widget payement">
								<div class="content">
									<img src="images/payment-method.png" alt="#"/>
								</div>
							</div>
							
							
							<div class="single-widget get-button">
								<div class="content">
									<div class="button">
										<button type="button" class="btn"onClick={(e)=>handleSubmit(e,'cod')}>proceed to checkout</button>
								
										<button type="button" id="rzp-button1" class="btn"onClick={(e)=>handleSubmit(e,'razopay')}>Pay Online</button>
                    
								

									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>



        <section class="shop-services section home">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-12">
						
						<div class="single-service">
							<i class="ti-rocket"></i>
							<h4>Free shiping</h4>
							<p>Orders over $100</p>
						</div>
						
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						
						<div class="single-service">
							<i class="ti-reload"></i>
							<h4>Free Return</h4>
							<p>Within 30 days returns</p>
						</div>
						
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						
						<div class="single-service">
							<i class="ti-lock"></i>
							<h4>Sucure Payment</h4>
							<p>100% secure payment</p>
						</div>
						
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						
						<div class="single-service">
							<i class="ti-tag"></i>
							<h4>Best Peice</h4>
							<p>Guaranteed price</p>
						</div>
						
					</div>
				</div>
			</div>
		</section>






        <section class="shop-newsletter section">
			<div class="container">
				<div class="inner-top">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 col-12">
							
							<div class="inner">
								<h4>Newsletter</h4>
								<p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
								<form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
									<input name="EMAIL" placeholder="Your email address" required="" type="email"/>
									<button class="btn">Subscribe</button>
								</form>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>



<Footer/>
    </React.Fragment>
  )
}

export default Checkout