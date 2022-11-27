import React from "react";
import { useRouter } from "next/router";
//SSR
export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await response.json();
  return {
    props: { productData: data },
  };
};

const ProductId = ({ productData }) => {
  return (
    <>
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-lg-5 col-md-5 col-sm-6">
            <div class="white-box text-center">
              <img
                class="mt-3"
                src={productData.image}
                width={400}
                height={400}
                alt="Course Images"
              />
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-6">
            <h3 class="box-title mt-2">{productData.title}</h3>
            <p>{productData.description}</p>
            <h2 class="mt-5">
              {productData.price}
              <small class="text-success">(36%off)</small>
            </h2>
            <button
              class="btn btn-dark btn-rounded mr-1"
              data-toggle="tooltip"
              title=""
              data-original-title="Add to cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </button>
            <button class="btn btn-primary btn-rounded mx-2">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductId;
