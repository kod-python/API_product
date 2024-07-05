"use client";
import React, { useEffect, useState } from "react";
import { TProds } from "@/components/product/product"
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const ProductPage = ({ params }: { params: { product: string } }) => {
  const [product, setProduct] = useState<TProds | null>(null);




  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://kodviper.pythonanywhere.com/api/products/${params.product}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [params.product]);

  return (
    <div className="w-[1000px] mx-auto p-10">
      <section className="text-3xl font-bold mb-10 flex gap-[10px] justify-center space-x-10">
      <Link href="/">
          <span>
            <FaChevronLeft />
          </span>
        </Link>
        <h1 className="text-blue-700 font-bold text-[2.2rem]">
          Product Details
        </h1>
      </section>

      {product ? (
        <section>
          <p className="text-center">{product.name}</p>
          <p className="text-center">{product.description}</p>
          <p className="text-center">{product.quantity}</p>
        </section>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};





export default ProductPage;
