import React,{useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productAction";
function ProductDetails() {
const product = useSelector((state)=>state.product)
const {name,model,description,price,image}=product


    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const  fetchProductDetails = ()=>{
        const responce =  axios.get(`https://aveosoft-react-assignment.herokuapp.com/products/${productId}`).catch((err)=>{
            console.log("error",err);
        });
        dispatch(selectedProducts(responce.data));

    };
    useEffect(()=>{
        if(productId && productId !== "") fetchProductDetails();

    },[productId])
    return (
        <div className="ui link cards">        
        <div className="card">
            <div className="image">s
                <img src={image} alt={name} />
            </div>
            <div className="content">
                <div className="header"> {name}</div>
                <div className="meta price "> ${price}</div>
                <div className="meta">{description}</div>
                <div className="meta">{image}</div>

            </div>
           
        </div>
        
        
    </div>
    )
}
export default ProductDetails;