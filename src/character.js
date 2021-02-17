import React from 'react';

const Characters = ({characterlist}) => {
    return(
            <div className = "productContainer">
                <ul>
                    <li className = "productImg"><img src={characterlist.image} /></li>
                    {/* <li className = "productId">{props.product.id}</li> */}
                    <li className = "productName">{characterlist.name}</li>
                </ul>
            </div>
    );
};
export default Characters;