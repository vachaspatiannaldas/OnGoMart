import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

function Cart() {
  const [product, setProduct] = useState([""]);

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("uid"));
    if (!user) {
      alert("Login View Order Product");
      window.location.href = "/login";
      return;
    }

    function cartShow() {
      console.log(user.id);
      axios.get('http://127.0.0.1:8000/api/users/' + user.id).then((res) => {
        const data = res.data;
        console.log(data);
        setProduct(data);
      });
    }

    cartShow();
  }, []);








  function deletedata(id){
    
	axios.delete('http://127.0.0.1:8000/api/Order/'+id)
	 .then((res)=>{
	const data=res.data;
	console.log(data);
	if(data)
	{
		console.log("Order Cancel Successfully")
		alert('Order Cancel Successfully!!!');
		window.location.href='/ordertrack';
	}
	else
	{
		console.log("Sorry")
	}
   
	 })          
}



  return (
    <React.Fragment>
      <Header />
      
<div class="breadcrumbs">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="bread-inner">
                <ul class="bread-list">
                    <li><a href="/">Home<i class="ti-arrow-right"></i></a></li>
                    <li class="active"><a href="/ordertrack">My Order</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>


      <div className="shopping-cart section">
        <div className="container">
          <div className="row">
            <div className="col-12">
           
              <table className="table shopping-summery">
                <thead>
                  <tr className="main-hading">
                    <th>PRODUCT</th>
                    <th className="text-center">Product Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Discount(%)</th>
                    <th className="text-center">Total</th>
					<th class="text-center">Order Cancle</th> 
                  </tr>
                </thead>
                <tbody>
                  {product.map((row) => {
                    return (
                      <tr key={row.id}>
                        <td className="image" data-title="No">
                          <img src={`http://localhost:8000/product_upload/${row.img}`} alt="#" style={{ width: "120px", height: "80px" }} />
                        </td>
                        <td className="product-des" data-title="Description">
                          <p className="product-name"><a href={'/description/' + row.id}>{row.pname}</a></p>
                        </td>
                        <td className="price" data-title="Price"><span>{row.qty}</span></td>
                        

                        <td className="price" data-title="Price">
  <span>{new Date(row.created_at).toLocaleDateString('en-GB')}</span>
</td>

                        <td className="total-amount" data-title="Total"><span>{row.price}</span></td>
                        <td className="total-amount" data-title="Total"><span>{row.disc}</span></td>
                        <td className="total-amount" data-title="Total"><span>{row.total}</span></td>
						<button className='btn btn-danger ml-2 mt-5 mx-3' onClick={()=>deletedata(row.id)}>Cancle Order</button>
                                                
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Cart;
