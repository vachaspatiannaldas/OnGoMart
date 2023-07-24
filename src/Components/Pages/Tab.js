import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { tab } from '@testing-library/user-event/dist/tab';

function Tab() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tab')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
    <div className="col-12">
      <div className="product-info">
        <div className="nav-main">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {Object.keys(products).map((type, index) => (
              <li key={index} className="nav-item">
                <a className={index === 0 ? 'nav-link active' : 'nav-link'} data-toggle="tab" href={`#${type}`} role="tab">{type}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          {Object.keys(products).map((type, index) => (
            <div key={index} className={index === 0 ? 'tab-pane fade show active' : 'tab-pane fade'} id={type} role="tabpanel">
              <div className="tab-single">
                <div className="row">
                  {products[type] && products[type].map((product, index) => (
                    <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-12">
                      <div className="single-product">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img className="default-img" src={`http://localhost:8000/product_upload/${product.img}`} alt="#" id="tabimg"/>
                          </a>
                          <div className="button-head">
                            <div className="product-action">
                              <a title="Quick View" href={'/description/' + product.id}>
                                <i class=" ti-eye"></i><span>Quick Shop</span>
                              </a>
                              <a title="Wishlist" href="#">
                                <i className=" ti-heart "></i><span>Add to Wishlist</span>
                              </a>
                              <a title="Compare" href="#">
                                <i className="ti-bar-chart-alt"></i><span>Add to Compare</span>
                              </a>
                            </div>
                            <div className="product-action-2">
                              <a title="Add to cart" href="#">Add to cart</a>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3><a href="product-details.html">{product.pname}</a></h3>
                          <div className="product-price">
                            <span>${product.price_sale}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Tab;
