"use client";

import React, { useEffect, useState } from "react";
import { TProds } from "@/components/product/product";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";


const ProductPage = ({ params }: { params: { product: string } }) => {
  const [product, setProduct] = useState<TProds|null>(null);
  


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // const response = await fetch(`https://kodviper.pythonanywhere.com/api/products/${params.product}`,{
        //   mode:'no-cors'
        // });
     
        const response = await fetch(`http://localhost:8000/api/products/${params.product}`,{
          mode:'no-cors'
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const dat = await response.json();
        setProduct(dat.product);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProduct();
  }, [params.product]);

  return (
    <div className="w-[1000px] mx-auto p-10">
      <section className="text-3xl font-bold mb-10 flex gap-2 justify-center items-center">
        <Link href="/">
          <FaChevronLeft />
        </Link>
        <h1 className="text-blue-700 font-bold text-2xl">
          Product Details
        </h1>
      </section>

       {product ? (
        <section className="text-center">
          <img
            src={product.image || '/default-image.jpg'}  
            alt={`${product.name} product`}
            className="mx-auto mb-4"
          />
          <p className="text-lg font-semibold">{product.name}</p>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-green-500">Quantity: {product.quantity}</p>
        </section>
      ):(
        <p className="text-center">Loading ..</p>
      ) } 
    </div>
  );
};

export default ProductPage;

































