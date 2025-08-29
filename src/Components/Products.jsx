import React from 'react';
import { useState , useEffect } from 'react';
import {add} from '../Store/Cartslice.js'
import { useDispatch , useSelector } from 'react-redux';
import { fetchproducts } from '../Store/Middleware/Productslice.js';
import {STATUSES} from '../Store/Middleware/Productslice.js'
 export const Products = () =>{
      const{ data:products , status}=useSelector((state) => state.Product);

      //const [products , SetProducts] = useState([]);
      const dispatch =useDispatch();

      // details all products 

      useEffect(() =>{

               dispatch(fetchproducts());


               /*  const fetchproducts = async () =>{
                         const res = await fetch('https://fakestoreapi.com/products');
                         const data =  await res.json();

                       // data.forEach(product => {
                  //console.log(product.id); // logs each product ID
                             // });

                              //  this api data is array of obj so access all tha data
                              //  individuals to use forEach method

                              SetProducts(data);
                 }

                 fetchproducts();
                 */
                    
      },[])


      // add each product into the store
      const handleAdd =(product) =>{
              dispatch(add(product));

      }
          if( status==STATUSES.LOADING){
              return  <h3>⌛ Loding....</h3>
          }

        if(status ==STATUSES.ERROR){
             return <h2>❌ Error: Something went wrong.</h2>
        }
             
           return (
            <div className="productsWrapper">
  {products.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="cardContent">
        <h4 className="productTitle">{product.title}</h4>
        <p className="productDesc">{product.description}</p>
        <h5 className="productPrice">${product.price}</h5>
        <button  onClick={()=> handleAdd(product)} className="btn">Add to Cart</button>
      </div>
    </div>
  ))}
</div>

           )
}

