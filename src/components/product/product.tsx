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

<h1 className='font-bold uppercase text-center underline text-blue-500 text-[2rem]'>Products</h1>

<div className='w-[400px] mx-auto p-10 flex gap-[60px] space-x-8  items-center '>
    {products.map((product) => (
            <div className='text-center' key={product.id}>
             
             <div className="flex flex-col">
             <p className='text-center'>{product.id}</p>
             <p>{product.name}</p>
                <img
              src={product.image}
              alt={`${product.name}`}
            />
              
                <p className='text-center'>Deescription: {product.description}</p>
                <p className='text-center'>Quantity: {product.quantity}</p>
             </div>
                



               <Link href={`/${product.id}`}>
               
               <div>
                <button className='border border-orange-400 rounded py-1 px-7 btn'>view details</button>
               </div>
               
               </Link>
            


            </div>
        ))
    }
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