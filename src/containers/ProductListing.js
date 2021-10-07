import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";
import axios from "axios";

function ProductListing() {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch();

async function  fetchProducts() {
    const responce  = await axios.get("https://aveosoft-react-assignment.herokuapp.com/products").catch((err)=>{
        console.log("error",err)
    });
    dispatch(setProducts(responce.data))
    
};

useEffect(()=>{
fetchProducts();
},[])


    console.log(products);

    return (
        <div className="ui grid container">
          
<ProductComponent/>
        </div>
    )
}
export default ProductListing;