import React, { useEffect } from "react";
import './Ecommerce.css'
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { setProducts } from "../ApiRedux/Action/Ecommerceaction";
import { Link } from "react-router-dom";
// import allreducerecommerce from "../ApiRedux/Reducer/Ecommercecombinereducer";
import { useDispatch } from "react-redux";

const Ecommerce = () => {
  const getdata = useSelector((state) => state.SetProductReducer.products);
  const dispatch=useDispatch();

  const getdatafromapi = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
     
      dispatch(setProducts(response.data))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
getdatafromapi();


  },[dispatch])

  console.log(getdata);

  return (
    <>
      <div className="container">
      {getdata.length > 0 ? (
        getdata.map((item) => {
          const { id, title, price, image, description, category,rating } = item;
          return (

            <div className="row">
              <div className="col">
               
              <Link to={`/product/${id}`}>
            <div className="product-card" key={id}>
              <img src={image} alt="image" className="card-img-top" />
              <div className="card-body">
                <div className="card-title">{title}</div>
                <button className="rating" type="button" style={{backgroundColor:rating.rate > 3 ? " rgb(8, 122, 16)" : "red"}}>{rating.rate} <span><FontAwesomeIcon icon={faStar} /></span></button>
                <div className="price">Price : {price}</div>
                <div className="card-text">Description : {description}</div>
                <div className="category">Category : {category}</div>
                <div className="count" style={{color:rating.count > 10 ? "green":"red"}}> Only {rating.count} Products Left ...</div>
              </div>
            </div>
           </Link>
              </div>
            </div>
          
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </div>
    </>
  );
};

export default Ecommerce;
