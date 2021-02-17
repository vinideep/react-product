import React from 'react';


const Products = (props) => {
    return(
            <div className = "productContainer">
                <ul>
                    <li className = "productImg"><img src={props.product.img} /></li>
                    {/* <li className = "productId">{props.product.id}</li> */}
                    <li className = "productName">{props.product.productName}</li>
                </ul>
            </div>
    );
};
export default Products;