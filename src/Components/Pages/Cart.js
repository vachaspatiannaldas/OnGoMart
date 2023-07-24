import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

function Cart() {
	const [product, setProduct] = useState([""])
    var p = 0;
    var dis = 0;
    var totalCartPrice = 0;


	useEffect(() => {
		var user = JSON.parse(localStorage.getItem("uid"));
		if (!user) {
		  alert("Login to View to cart");
		  window.location.href = "/login";
		  return;
		}
		
    function cartShow()
    {
        var user=JSON.parse(localStorage.getItem("uid"));
        console.log(user.id);
        axios.get('http://127.0.0.1:8000/api/Cartshow/'+user.id).then((res)=>{
        const data=res.data;
        console.log(data);
                    
        setProduct(data);
        // console.log(data[0]);
        // console.log(data[1].pname);
                    })
    }
  
	cartShow();
}, []);

	function deletedata(cid){
    
        axios.delete('http://127.0.0.1:8000/api/Cart/'+cid)
         .then((res)=>{
        const data=res.data;
        console.log(data);
        if(data)
        {
            console.log("Item Cart Deleted Succesfully")
            alert('Item Cart Deleted Succesfully!!!');
            window.location.href='/Cart';
        }
        else
        {
            console.log("Sorry")
        }
       
         })          
    }


	
	function clearCart() {
		axios.delete('http://127.0.0.1:8000/api/clearcart')
		  .then(response => {
			alert('Card cleared successfully!!!');
			  window.location.href='/cart';
			// Refresh your cart or update your cart state here
		  })
		  .catch(error => {
			console.log(error.response.data);
		  });
	  }
	
  return (
    <React.Fragment>
        <Header/>
        <div class="shopping-cart section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					
					<table class="table shopping-summery">
						<thead>
							<tr class="main-hading">
								<th>PRODUCT</th>
								<th class="text-center">Product Name</th>
								<th class="text-center">Quantity</th>
								<th class="text-center">Price</th> 
								<th class="text-center">Discount(%)</th>
								<th class="text-center">Total</th> 
								<th class="text-center">
									<button class="btn btn-sm btn-outline-danger" onClick={clearCart}>Clear Cart</button>
								</th>

							</tr>
						</thead>
						<tbody>
						{ product.map((row)=>{
                  
				  p = row.price_sale * row.pqty
				  dis = p * row.discount / 100
				  totalCartPrice += row.price_sale * row.pqty - dis
										  return(
							<tr>
								<td class="image" data-title="No"><img src={`http://localhost:8000/product_upload/${row.img}`} alt="#" style={{width:"160px",height:"70px"}} /></td>
								<td class="product-des" data-title="Description">
									<p class="product-name"><a href={'/description/'+row.id}>{row.pname}</a></p>
									<p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
								</td>
								<td class="price" data-title="Price"><span>{row.pqty}</span></td>
								
								<td class="total-amount" data-title="Total"><span>{row.price_sale}</span></td>
								<td class="total-amount" data-title="Total"><span>{row.discount}</span></td>
								<td class="total-amount" data-title="Total"><span>{(row.price_sale * row.pqty) - dis}</span></td>

								<td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"   onClick={()=>deletedata(row.cid)}></i></a></td>
							</tr>
							   )
							})
						   }
							
						</tbody>
					</table>
					
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					
					<div class="total-amount">
						<div class="row">
							<div class="col-lg-8 col-md-5 col-12">
								<div class="left">
									<div class="coupon">
										<form action="#" target="_blank">
											<input name="Coupon" placeholder="Enter Your Coupon" />
											<button class="btn">Apply</button>
										</form>
									</div>
									
								</div>
							</div>
							<div class="col-lg-4 col-md-7 col-12">
								<div class="right">
									<ul>
										<li>Cart Subtotal<span><i class="fa fa-rupee"></i>
											{totalCartPrice}</span></li>
										<li>Shipping<span>Free</span></li>
										<li class="last">You Pay<span>
										<i class="fa fa-rupee"></i>
											{totalCartPrice}
											</span></li>
									</ul>
									<div class="button5">
										<a href={'/Checkout'} class="btn">Checkout</a>
										<a href="/shop" class="btn">Continue shopping</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>

    <Footer/>
    </React.Fragment>
  )
}

export default Cart


