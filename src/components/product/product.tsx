'use client'
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export type TProds = {
id: number;
name: string;
image:string
description:string;
quantity: number;



}




const Product = () =>{
const [products, setProducts] = useState<TProds[]>([]);
// const [products, setProducts] =  useState([])


useEffect(() => {
     const getProducts =  async () =>{
    //    const response = await fetch("https://kodviper.pythonanywhere.com/api/products/",{
    //     mode:'cors'
    //    });
       const response = await fetch("http://localhost:8000/api/products/");
        const data = await response.json();
        console.log(data)
        setProducts(data)

    };
    getProducts();


}, []);



return(


<div>

<h1>Products</h1>

<div>
    {products && products.length > 0 ? (
        products.map((product) => (
            <div key={product.id}>
             
                <p>{product.id}</p>
                <img
              src={product.image}
              alt={`${product.name}`}
            />
                <p>{product.name}</p>
                {/* <p>{product.description}</p>
                <p>{product.quantity}</p> */}



               <Link href={`/${product.id}`}>
               
               <div>
                <button className='border border-orange-400'>view details</button>
               </div>
               
               </Link>
            


            </div>
        ))
    ) : (
        <p>Not found</p>
    )}
</div>









{/* <div>
    {products && products ?(
    <div key={user.id}>
     
     <p>{user.id}</p>
     <p>{user.name}</p>
     <p>{user.description}</p>
     <p>{user.quantity}</p>
     
    </div>

    ):(
        <p> not found </p>
    )



)}
</div> */}


</div>


);





};

export default Product