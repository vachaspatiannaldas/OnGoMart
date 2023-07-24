
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
// import Headcss from '../Layout/Headecss';

function ProductDesc() {
    const id = useParams();
    const pid = id.id;
  console.log(pid);

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  function fetchDesription()
  {
      axios.get('http://127.0.0.1:8000/api/Productdesc/'+pid)
       .then((res)=>{
      const data=res.data;
      console.log(data);
                  
      setProduct(data[0]);
      // console.log(data[0].pname);
                  })
  }


  

//   Quantity Increment/Decrement in Hooks 
const handleDecrement = () =>{
	if(quantity>1){
	setQuantity(prevCount => prevCount - 1);
	}
}

const handleIncrement = () =>{
	if(quantity<10){
	setQuantity(prevCount => prevCount + 1);
	}
}






//Add to card code

// const submitAddtoCart = (e) =>{
//     e.preventDefault();
//     var user=JSON.parse(localStorage.getItem("uid"));
//     var today = new Date(),
//     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//     const data = {
//         pid: product.id,
//         pqty: quantity,
//         uid: user['id'],
//         datetime: date,
//     }
//     console.log(data);
    
//     if(!localStorage.getItem(user))
//     {
    
// 		axios.post('http://127.0.0.1:8000/api/AddToCart', data)
// 		.then((resp) => {
// 		  try {
// 			const data = resp.data;
// 			console.log(data);
// 			if (data[0].status === "error") {
// 			  console.log("Error");
// 			  alert('Data Added!!!'); // Show error message in alert
// 			} else {
// 			  console.log("Data Added");
// 			  alert('Data Added!!!');
// 			  window.location.href = '/';
// 			}
// 		  } catch (err) {
// 			console.log('Error:', err);
			
// 		  }
// 		})
// 		.catch((error) => {
// 		  console.log('Error:', error);
// 		alert('Product Out Of Stock');
// 		});
	  
//     }
//     else
//     {
//             alert("Login to add to cart")
//     }
//   }


const submitAddtoCart = (e) =>{
    e.preventDefault();
    var user=JSON.parse(localStorage.getItem("uid"));
    console.log(user);
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const data = {
        pid: product.id,
        pqty: quantity,
        uid: user ? user['id'] : null,
        datetime: date,
    }
    console.log(data);
    
    if (!user) { // Check if user is null or not
        alert("Login to add to cart");
		window.location.href="/login"
        return;
    }
    
    axios.post('http://127.0.0.1:8000/api/AddToCart', data)
        .then((resp) => {
            try {
                const data = resp.data;
                console.log(data);
                if (data[0].status === "error") {
                    console.log("Error");
                    alert('Something wrong !!!'); // Show error message in alert
					//window.location.href = '/';
                } else {
                    console.log("Data Added");
                    alert('Data Added!!!');
                    window.location.href = '/cart';
                }
            } catch (err) {
                console.log('Error:', err);
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('Product Out Of Stock');
        });
}



  useEffect(()=>{
      fetchDesription();
  },[])

  const [pqty, setPqty] = useState(1);
  const handleQuantityChange = (event) => {
	setPqty(event.target.value);
};

  return (

    
    <React.Fragment>
		<Header/>
      
        			<div class="row no-gutters">
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									
										<div class="product-gallery">
											<div class="quickview-slider-active">
												<div class="single-slider">
													<img src="./images/iphone.jpg" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="./images/iphone2.jpg" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="images/iphone.jpg" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="./images/iphone.jpg" alt="#"/>
												</div>
											</div>
										</div>
									
								</div>
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									<div class="quickview-content">
										<h2>{product.pname}</h2>
										<div class="quickview-ratting-review">
											<div class="quickview-ratting-wrap">
												<div class="quickview-ratting">
													<i class="yellow fa fa-star"></i>
													<i class="yellow fa fa-star"></i>
													<i class="yellow fa fa-star"></i>
													<i class="yellow fa fa-star"></i>
													<i class="fa fa-star"></i>
												</div>
												<a href="#"> (1 customer review)</a>
											</div>
											0<div class="quickview-stock">
												<span><i class="fa fa-check-circle-o"></i> in stock</span>
											</div>
										</div>
                                        
										<h3><i class="fa fa-rupee"></i> {product.price_purchase}</h3>
										<div class="quickview-peragraph">
											<p>{product.des}</p>
										</div>
										<div class="size">
											<div class="row">
												<div class="col-lg-6 col-12">
													<h5 class="title">Size</h5>
													<select>
														<option selected="selected">s</option>
														<option>m</option>
														<option>l</option>
														<option>xl</option>
													</select>
												</div>
												<div class="col-lg-6 col-12">
													<h5 class="title">Color</h5>
													<select>
														<option selected="selected">orange</option>
														<option>purple</option>
														<option>black</option>
														<option>pink</option>
													</select>
												</div>
											</div>
										</div>
										<div class="quantity">
											
											{/* <div class="input-group">
												<div class="button minus">
													<button type="button" class="btn btn-primary btn-number" onClick={handleDecrement}>
														<i class="ti-minus"></i>
													</button>
												</div>
												<input type="text" name="quant[1]" class="input-number"  data-min="1" data-max="1000" value="1" onClick={handleIncrement}/>
												<div class="button plus">
													<button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
														<i class="ti-plus"></i>
													</button>
												</div>
											</div> */}

						<div class="row mr-5">
						
                       
                            <button type='button' class="btn btn-primary btn-number" onClick={handleDecrement}>-</button>
                            <div  className='form-control text-center' style={{ width:"100px" }}>{quantity}</div>
                            <button type='button' class="btn btn-primary btn-number" onClick={handleIncrement}>+</button>
                        
                      
						</div>
											
										</div>
										<label>Quantity:</label>
            <input type="number" value={pqty} onChange={handleQuantityChange} />
										<div class="add-to-cart">
										<button class="btn btn-outline-success mt-2 btn-long cart" onClick={submitAddtoCart}>Add to Cart</button>
											<a href="#" class="btn min"><i class="ti-heart"></i></a>
										</div>
										<div class="default-social">
											<h4 class="share-now">Share:</h4>
											<ul>
												<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
												<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
												<li><a class="youtube" href="#"><i class="fa fa-pinterest-p"></i></a></li>
												<li><a class="dribbble" href="#"><i class="fa fa-google-plus"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

                            <Footer/>
    </React.Fragment>
  )
}

export default ProductDesc