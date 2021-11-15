import { Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from '../../hooks/useAuth';
import PurchasePageTopBanner from "../../images/banner2.jpg";
import OrderForm from "./OrderForm";
import ReviewForm from "./ReviewForm";

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    console.log(id);
    const [products, setProducts] = useState([]);
    const [singleProduct, setsingleProduct] = useState({});
    useEffect(() => {
      fetch("https://young-everglades-47177.herokuapp.com/viewProducts")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    useEffect(() => {
      const found = products.find((service) => service._id === id);
      setsingleProduct(found);
    }, [products, id]);
    
    return (
      <div>
        <div className="card bg-light text-dark mb-1">
          <img height="250" src={PurchasePageTopBanner} alt="..." />
          <div className="card-img-overlay text-center text-white d-flex align-items-center justify-content-center">
            <h1 className="card-title fw-bold text-dark">
              Purchase Your Product
              <br />
              {singleProduct?.productname}
            </h1>
          </div>
        </div>

      <div className="container my-5">
        <div className="row ">
          <div className="col-12 col-md-8">
            <div className=" mb-3">
              <img
                src={singleProduct?.img}
                className="card-img-top w-50"
                alt="..."
              />
              <div className="card-body">
                <h1 className="card-title">{singleProduct?.productname}</h1>
                <div>
                  <h3>
                    <span className="fw-bold text-danger">
                      TK {singleProduct?.price}
                    </span>
                   
                  </h3>
                </div>
                <div>
                <Rating name="Rating" value={singleProduct?.rating} readOnly />
                </div>
                <div className="fw-bold card-text mt-3"><h2>Overview</h2></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            {singleProduct?.productname ? (
              <div className="card bg-primary text-white">
                <h3 className="fw-bold text-center my-3">
                  Order This Product Now
                </h3>
                <OrderForm
                  id={id}
                  img={singleProduct?.img}
                  productname={singleProduct?.productname}
                  price={singleProduct?.price}
                ></OrderForm>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row ">
        <div className="col-12 col-md-8">
            <div className="text-center text-white d-flex flex-column align-items-center justify-content-center">
              <h1 className="fw-bold text-dark">
                Review Your Product
                <br />
                {singleProduct?.productname}
              </h1>
              <Avatar alt={user.displayName}sx={{ width: 80, height: 80 }} src={singleProduct?.img} />
              {singleProduct?.productname ? (<ReviewForm
                      id={id}
                      img={singleProduct?.img}
                      productname={singleProduct?.productname}
                    ></ReviewForm>
              ) :(
                  <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Purchase;