import React from 'react';


const Womens = (props) => {
    return(
            <div className = "productContainer">
                <ul>
                    <li className = "productImg"><img src={props.womendata.womenImg} /></li>
                    {/* <li className = "productId">{props.product.id}</li> */}
                    <li className = "productName">{props.womendata.name}</li>
                </ul>
            </div>
    );
};
export default Womens;