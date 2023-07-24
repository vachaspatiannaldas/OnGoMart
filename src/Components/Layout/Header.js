import React, { useEffect, useState } from "react";
import axios from "axios";

function Header() {
	const [uid, setUid] = useState("");
	const [product, setProduct] = useState([""]);

	//localstorage get 
	var user=JSON.parse(localStorage.getItem("uid"));
	


	//Bill 
	var p = 0;
	var dis = 0;
	var totalCartPrice = 0;
	var totalamount = 0;
	var ptotal = 0;
	

//Find length
const noofproductcount = product.length;

	var AuthButtons = '';
	
	var AuthButtons2 = '';
	
	var AuthButtons3 = '';
	

	//if uid is not set
  if(!localStorage.getItem('uid'))
  {
    AuthButtons = (
						
						
							<div class="sinlge-bar shopping">
								<a href="#" class="single-icon"><i class="fa fa-user-circle-o"></i> </a>
								
								<div class="shopping-item">
									
									<ul class="shopping-list">
										<li>
											<a href='/login'style={{marginLeft:'70px'}}><b>Login</b></a>
										</li>
										
									</ul>
									<div class="bottom">
										
										<a href="/registration" class="btn animate">Register</a>
									</div>
								</div>
								
							</div>
  )







}
else
{
  AuthButtons = (

<div class="sinlge-bar shopping">
								<a href="#" class="single-icon"><i class="fa fa-user-circle-o"></i> </a>
								
								<div class="shopping-item">
									
									<ul class="shopping-list">
										<li>
										<a class="dropdown-item" href="javascript:void(0)"><b>{user!=null && user.fname}</b></a>

										</li>
										
									</ul>
									<div class="bottom">
										
										<a href="javascript:void(0)" class="btn animate"  onClick={logoutbtn}>Logout</a>
									</div>
								</div>
								
							</div>
 )
}






































 
	//if uid is not set
	if(!localStorage.getItem('uid'))
	{
	  AuthButtons2 = (
						  
			
		<div class="sinlge-bar shopping">
		<a href="#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">0</span></a>
		
		<div class="shopping-item">
			<div class="dropdown-cart-header">
				<span>0 Items</span>
				<a href="/cart">View Cart</a>
			</div>
			
			<b>No Cart Item Found</b>
		</div>
		
	</div>			  
	)
  
  
  
  
  
  
  
  }
  else
  {
	AuthButtons2 = (
  
 
		<div class="sinlge-bar shopping">
		<a href="#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">{noofproductcount}</span></a>
		
		<div class="shopping-item">
			<div class="dropdown-cart-header">
				<span>{noofproductcount} Items</span>
				<a href="/cart">View Cart</a>
			</div>
			<ul class="shopping-list">
		
												
			{ product.map((row)=>{

			p = row.price_sale * row.pqty
			dis = p * row.discount / 100
			totalCartPrice += row.price_sale * row.pqty - dis
				  return(
				<li>
					<a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"  onClick={()=>deletedata(row.cid)}></i></a>
					<a class="cart-img" href="#">
						<img  src={`http://localhost:8000/product_upload/${row.img}`} alt="#"/></a>
					<h4><a href="#">{row.pname}</a></h4>
					<p class="quantity"> {row.pqty} X - <span class="amount"> 
					<i class="fa fa-rupee"></i>

					 {row.price_sale}</span></p>

					 
				</li>
				 )
				})
			   }



			
			</ul>
			<div class="bottom">
				<div class="total">
					<span>Discount</span>
					<span class="total-amount"> 
					<i class="fa fa-rupee" ></i>&nbsp;
					{dis}</span>
					
				</div>
				<div class="total">
					<span> 
					 Total Amount</span>
					<span class="total-amount">
					<i class="fa fa-rupee"></i>&nbsp;

						 {totalCartPrice}</span>
					
				</div>
				<a href="/checkout" class="btn animate">Checkout</a>
			</div>
		</div>
		
	</div>
   )
  }
  
  


















  
 
	//if uid is not set
	if(!localStorage.getItem('uid'))
	{
	  AuthButtons3 = (
						  
			
		<nav class="navbar navbar-expand-lg">
		<div class="navbar-collapse">	
			<div class="nav-inner">	
				<ul class="nav main-menu menu navbar-nav">
						<li class="active"><a href="/">Home</a></li>
						<li><a href="/shop">Product</a></li>												
						<li><a href="#">Shop<i class="ti-angle-down"></i><span class="new">New</span></a>
							{/* <ul class="dropdown">
								<li><a href="/shop">Shop Grid</a></li>
								<li><a href="/cart">Cart</a></li>
								<li><a href="/wishlist">WishList</a></li>
									<li><a href="/ordertrack">Order Product</a></li>
							</ul> */}
						</li>
					
						<li><a href="/contact">Contact Us</a></li>
					</ul>
			</div>
		</div>
	</nav>	  
	)
  
  
  
  
  
  
  
  }
  else
  {
	AuthButtons3 = (
  
 
		<nav class="navbar navbar-expand-lg">
									<div class="navbar-collapse">	
										<div class="nav-inner">	
											<ul class="nav main-menu menu navbar-nav">
													<li class="active"><a href="/">Home</a></li>
													<li><a href="/shop">Product</a></li>												
													<li><a href="#">Shop<i class="ti-angle-down"></i><span class="new">New</span></a>
														<ul class="dropdown">
															<li><a href="/shop">Shop Grid</a></li>
															<li><a href="/cart">Cart</a></li>
															<li><a href="/wishlist">WishList</a></li>
																<li><a href="/ordertrack">My Order </a></li>
														</ul>
													</li>
												
													<li><a href="/contact">Contact Us</a></li>
												</ul>
										</div>
									</div>
								</nav>
		)
  }
  
  








  





 
  













	function logoutbtn()
	{
		window.localStorage.clear(); //try this to clear all local storage
		window.location.href="/login";
  
	}

	
	

	
	
	function cartShow() {
	  var user = JSON.parse(localStorage.getItem("uid"));
	  console.log("user=",user);
	  if(user==null)
	  {
		
	
	}
	else
	{
		

		axios.get("http://127.0.0.1:8000/api/Cartshow/" + user.id).then((res) => {
			const data = res.data;
			//console.log(data);
		  
			//setUid(user.id);
			setProduct(data);
			const json = JSON.stringify(data);
			//console.log(json);
			//console.log(data);
	  
			// console.log(data[0]);
			// console.log(data[1].pname);
		  });

	}
	}
  
	useEffect(() => {
	  cartShow();
	}, []);


//console.log(noofproductcount); 

function deletedata(cid){
    
	axios.delete('http://127.0.0.1:8000/api/Cart/'+cid)
	 .then((res)=>{
	const data=res.data;
	console.log(data);
	if(data)
	{
		console.log("Data Deleted")
		alert('Data Deleted!!!');
		window.location.href='/';
	}
	else
	{
		console.log("Sorry")
	}
   
	 })          
}




  return (
   <React.Fragment>

<header class="header shop">
		
		<div class="topbar">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-12 col-12">
						
						<div class="top-left">
							<ul class="list-main">
								<li><i class="ti-headphone-alt"></i> +91 7020270105</li>
								<li><i class="ti-email"></i> ogmart@gmail.com</li>
							</ul>
						</div>
						
					</div>
					<div class="col-lg-8 col-md-12 col-12">
						
						<div class="right-content">
							<ul class="list-main">
								{/* <li><i class="ti-location-pin"></i> Store location</li> */}
								<li><i class="ti-bag"></i> <a href="/ordertrack">My Order</a></li>
								{/* <li><i class="ti-user"></i> <a href="#">My account</a></li> */}
								<li><i class="ti-power-off"></i><a href="/login">Login</a></li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		
		<div class="middle-inner">
			<div class="container">
				<div class="row">
					<div class="col-lg-2 col-md-2 col-12">
						
						<div class="logo">
							<a href="/"><img src="/images/logo.png" alt="logo"/></a>
						</div>
						
						
						<div class="search-top">
							<div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
							
							<div class="search-top">
								<form class="search-form">
									<input type="text" placeholder="Search here..." name="search"/>
									<button value="search" type="submit"><i class="ti-search"></i></button>
								</form>
							</div>
							
						</div>
						
						<div class="mobile-nav"></div>
					</div>
					<div class="col-lg-8 col-md-7 col-12">
						<div class="search-bar-top">
							<div class="search-bar">
								<select>
									<option selected="selected">All Category</option>
									{/* <option>watch</option>
									<option>mobile</option>
									<option>kids item</option> */}
								</select>
								<form>
									<input name="search" placeholder="Search Products Here....." type="search"/>
									<button class="btnn"><i class="ti-search"></i></button>
								</form>
							</div>
						</div>
					</div>
					<div class="col-lg-2 col-md-3 col-12">
						<div class="right-bar">
							
							<div class="sinlge-bar">
								<a  href="/wishlist" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
							</div>
						
						
						
						
						
							
						





  {/* <li class="nav-item">
          <a href={'/Login'}><i class="fas fa-user mx-2" style={{fontSize:"20px",marginTop:"10px"}}></i></a>
        </li> */}
        {/* <li class="nav-item dropdown nav2 userl">style
          <a class="nav-link dropdown-toggle"  href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user mx-2" ={{fontSize: "20px",marginTop:"10px"}}></i></a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="javascript:void(0)">{user!=null && user.fname}</a>
            <a class="dropdown-item" href="javascript:void(0)" onClick={logoutbtn}>Logout</a>
          </div>
        </li> */}
        {AuthButtons}



{AuthButtons2}

							{/* <div class="sinlge-bar shopping">
								<a href="#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">{noofproductcount}</span></a>
								
								<div class="shopping-item">
									<div class="dropdown-cart-header">
										<span>{noofproductcount} Items</span>
										<a href="/cart">View Cart</a>
									</div>
									<ul class="shopping-list">
									if(user==null)
									{
										<li>
										<a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"  ></i></a>
										<a class="cart-img" href="#">
											<img src="https://via.placeholder.com/70x70" alt="#"/></a>
										<h4><a href="#">0</a></h4>
										<p class="quantity">0 X - <span class="amount"> 
										<i class="fa fa-rupee"></i>

										0</span></p>										 
									</li>

									}
									else									
									{ product.map((row)=>{
                  
									p = row.price_sale * row.pqty
									dis = p * row.discount / 100
									totalCartPrice += row.price_sale * row.pqty - dis
										  return(
										<li>
											<a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"  onClick={()=>deletedata(row.cid)}></i></a>
											<a class="cart-img" href="#">
                                                <img src="https://via.placeholder.com/70x70" alt="#"/></a>
											<h4><a href="#">{row.pname}</a></h4>
											<p class="quantity"> {row.pqty} X - <span class="amount"> 
											<i class="fa fa-rupee"></i>

											 {row.price_sale}</span></p>

											 
										</li>
										 )
										})
									   }



									
									</ul>
									<div class="bottom">
										<div class="total">
											<span>Discount</span>
											<span class="total-amount"> 
											<i class="fa fa-rupee" ></i>&nbsp;
											{dis}</span>
											
										</div>
										<div class="total">
											<span> 
											 Total Amount</span>
											<span class="total-amount">
											<i class="fa fa-rupee"></i>&nbsp;

												 {totalCartPrice}</span>
											
										</div>
										<a href="/checkout" class="btn animate">Checkout</a>
									</div>
								</div>
								
							</div> */}




						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="header-inner">
			<div class="container">
				<div class="cat-nav-head">
					<div class="row">
						
						<div class="col-lg-9 col-12">
							<div class="menu-area">
								{AuthButtons3}
								{/* <nav class="navbar navbar-expand-lg">
									<div class="navbar-collapse">	
										<div class="nav-inner">	
											<ul class="nav main-menu menu navbar-nav">
													<li class="active"><a href="/">Home</a></li>
													<li><a href="/shop">Product</a></li>												
													<li><a href="#">Shop<i class="ti-angle-down"></i><span class="new">New</span></a>
														<ul class="dropdown">
															<li><a href="/shop">Shop Grid</a></li>
															<li><a href="/cart">Cart</a></li>
															<li><a href="/wishlist">WishList</a></li>
																<li><a href="/ordertrack">Order Product</a></li>
														</ul>
													</li>
												
													<li><a href="/contact">Contact Us</a></li>
												</ul>
										</div>
									</div>
								</nav> */}
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</header>

    </React.Fragment>
  )
}

export default Header




