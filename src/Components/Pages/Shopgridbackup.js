import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

function Shopgrid() {
    const [Showdata, setShowdata] = useState([""])
    const [Showcategory, setShowcategory] = useState([""])
  function fetchData()
  {
      axios.get('http://127.0.0.1:8000/api/Product')
       .then((res)=>{
      const data=res.data;
      console.log(data);
                  
      setShowdata(data)
                  })
  }
  function fetchCategory()
  {
      axios.get('http://127.0.0.1:8000/api/Category')
       .then((res)=>{
      const data=res.data;
      console.log(data);
                  
      setShowcategory(data)
                  })
  }

  useEffect(()=>{
      fetchData();
      fetchCategory();
  },[])
  return (
    <React.Fragment>


<Header/>




<div class="breadcrumbs">
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="bread-inner">
                <ul class="bread-list">
                    <li><a href="index1.html">Home<i class="ti-arrow-right"></i></a></li>
                    <li class="active"><a href="blog-single.html">Shop Grid</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>





<section class="product-area shop-sidebar shop section">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-4 col-12">
						<div class="shop-sidebar">
								
								<div class="single-widget category">
									<h3 class="title">Categories</h3>
									<ul class="categor-list">
                                        {Showcategory.map((row)=>{
                                            return(
                                           
										<li><a href={'/Category/'+row.id}>{row.cname}</a></li>
                                             
                                        )
                                    })}
										
									</ul>
								</div>
								
								
									<div class="single-widget range">
										<h3 class="title">Shop by Price</h3>
										<div class="price-filter">
											<div class="price-filter-inner">
												<div id="slider-range"></div>
													<div class="price_slider_amount">
													<div class="label-input">
														<span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price"/>
													</div>
												</div>
											</div>
										</div>
										<ul class="check-box-list">
											<li>
												<label class="checkbox-inline" for="1"><input name="news" id="1" type="checkbox" />$20 - $50<span class="count">(3)</span></label>
											</li>
											<li>
												<label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />$50 - $100<span class="count">(5)</span></label>
											</li>
											<li>
												<label class="checkbox-inline" for="3"><input name="news" id="3" type="checkbox" />$100 - $250<span class="count">(8)</span></label>
											</li>
										</ul>
									</div>
									
								
						
								
								
							
								
						</div>
					</div>
					<div class="col-lg-9 col-md-8 col-12">
						<div class="row">
							<div class="col-12">
								
								<div class="shop-top">
									<div class="shop-shorter">
										<div class="single-shorter">
											<label>Show :</label>
											<select>
												<option selected="selected">09</option>
												<option>15</option>
												<option>25</option>
												<option>30</option>
											</select>
										</div>
										<div class="single-shorter">
											<label>Sort By :</label>
											<select>
												<option selected="selected">Name</option>
												<option>Price</option>
												<option>Size</option>
											</select>
										</div>
									</div>
									<ul class="view-mode">
										<li class="active"><a href="shop-grid.html"><i class="fa fa-th-large"></i></a></li>
										<li><a href="shop-list.html"><i class="fa fa-th-list"></i></a></li>
									</ul>
								</div>
								
							</div>
						</div>
						<div class="row">
                        {Showdata.map((row)=>{
                        return(
                            
                       
            		<div class="col-lg-4 col-md-6 col-12">
								<div class="single-product">
									<div class="product-img">
										<a href="product-details.html">
											<img class="default-img" src={`http://localhost:8000/product_upload/${row.img}`} alt="#" id='tabimg3'/>
											<img class="hover-img" src={`http://localhost:8000/product_upload/${row.img}`} alt="#" id='tabimg3'/>
										</a>
										<div class="button-head">
											<div class="product-action">
												<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
												<a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
												<a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
											</div>
											<div class="product-action-2">
												<a title="Add to cart" href="#">Add to cart</a>
											</div>
										</div>
									</div>
									<div class="product-content">
										<h3><a href="product-details.html">{row.pname}</a></h3>
										<div class="product-price">
											<span>$29.00</span>
										</div>
									</div>
								</div>
							</div>
                             )
                            })}
						
						</div>
					</div>
				</div>
			</div>
		</section>





			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ti-close" aria-hidden="true"></span></button>
						</div>
						<div class="modal-body">
							<div class="row no-gutters">
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									
										<div class="product-gallery">
											<div class="quickview-slider-active">
												<div class="single-slider">
													<img src="https://via.placeholder.com/569x528" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="https://via.placeholder.com/569x528" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="https://via.placeholder.com/569x528" alt="#"/>
												</div>
												<div class="single-slider">
													<img src="https://via.placeholder.com/569x528" alt="#"/>
												</div>
											</div>
										</div>
									
								</div>
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									<div class="quickview-content">
										<h2>Flared Shift Dress</h2>
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
											<div class="quickview-stock">
												<span><i class="fa fa-check-circle-o"></i> in stock</span>
											</div>
										</div>
										<h3>$29.00</h3>
										<div class="quickview-peragraph">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
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
											
											<div class="input-group">
												<div class="button minus">
													<button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
														<i class="ti-minus"></i>
													</button>
												</div>
												<input type="text" name="quant[1]" class="input-number"  data-min="1" data-max="1000" value="1"/>
												<div class="button plus">
													<button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
														<i class="ti-plus"></i>
													</button>
												</div>
											</div>
											
										</div>
										<div class="add-to-cart">
											<a href="#" class="btn">Add to cart</a>
											<a href="#" class="btn min"><i class="ti-heart"></i></a>
											<a href="#" class="btn min"><i class="fa fa-compress"></i></a>
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
						</div>
					</div>
				</div>
			</div>
			

<Footer/>

    </React.Fragment>
  )
}

export default Shopgrid