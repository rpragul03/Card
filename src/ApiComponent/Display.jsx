import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts,removeProducts } from "../ApiRedux/Action/Ecommerceaction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./DisplayProduct.css";
import axios from "axios";

const Display = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.GetProductReducer.products);

  const getdatafromapi = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(getProducts(response.data));
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getdatafromapi();
    console.log(getdata);
    return ()=>{
        dispatch(removeProducts());
    }
    
  }, [id]);

  return (

  <>

 {getdata && <div>
    
    <div className="containerdisplay">
        <div className="imagedisplay">
            <img src={getdata.image} alt="" className="image-card-topdisplay"/>
        </div>
        <div className="cardbodydisplay">
        <div className="card-titledisplay">{getdata.title}</div>
        <button className="rating" type="button" style={{backgroundColor:getdata.rating.rate > 3 ? " rgb(8, 122, 16)" : "red"}}>{getdata.rating.rate} <span><FontAwesomeIcon icon={faStar} /></span></button>
        <div className="pricedisplay">Price : ${getdata.price}</div>
        <div className="descriptiondisplay">{getdata.description}</div>
        <div className="categorydisplay">{getdata.category}</div>
        <div className="count" style={{color:getdata.rating.count > 10 ? "green":"red"}}> Only {getdata.rating.count} Products Left ...</div>
        </div>
        
    </div>
    </div>}
    </> 
  )
}
export default Display;
