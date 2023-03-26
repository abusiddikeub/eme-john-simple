import React from 'react';
import './Product.css'

const Product = (props) => {
                console.log(props)


const {img,name,seller,rating,price} = props.product;

               return (
                              <div className='product'>

<img src={img} alt="" />
<div className='product-info'>
<h5 className='product-name'>Name  : {name}</h5>
<p>price : ${price}</p>
      <h3>Manufacture: {seller}</h3>  
<p>Rating : {rating} Stars</p>
</div>

<button className='btn-cart'>Add to Cart</button>

                              </div>
               );
};

export default Product;