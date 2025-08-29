
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {remove} from '../Store/Cartslice.js'

 export const Cart = () => {
         const dispatch = useDispatch()
         const products = useSelector((state) => state.cart.items);

        

        const handleremove =(productid) =>{
                dispatch(remove(productid))
                  
        }

    return (
        <div className="cart-container">
           <h2 className="cart-title">🛒 Your Cart Items</h2>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h3> {product.title}</h3>
                        <h3> {product.price}</h3>
                        
                        <button className="remove" onClick={()=> handleremove(product.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


