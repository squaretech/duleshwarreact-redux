import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products)
   
    const renderList = products.map((products)=>{
        const {id,name,model,categoryId,price,image}=products
        return(   <div className="four wide column" key={id}>
            <Link to={`/product/${id}`}>
        <div className="ui link cards">        
            <div className="card">
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="content">
                    <div className="header"> {name}</div>
                    <div className="meta price "> $ {price}</div>
                    <div className="meta">{model}</div>
                </div>
               
            </div>
            
            
        </div>
        </Link>
    </div>
    
    );
    });
    return(
        <>{renderList} </>
    )

   
}
export default ProductComponent;