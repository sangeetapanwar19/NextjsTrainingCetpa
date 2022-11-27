import React from "react";

const ProductDetail = () => {
  return (
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-lg-5 col-md-5 col-sm-6">
          <div class="white-box text-center">
            <img
              src="/product-dummy.png"
              class="img-responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-6">
          <h3 class="card-title">Rounded Chair</h3>
          <h6 class="card-subtitle">globe type chair for rest</h6>
          <h4 class="box-title mt-2">Product description</h4>
          <p>
            Lorem Ipsum available,but the majority have suffered alteration in
            some form,by injected humour,or randomised words which don't look
            even slightly believable.but the majority have suffered alteration
            in some form,by injected humour
          </p>
          <h2 class="mt-5">
            $153<small class="text-success">(36%off)</small>
          </h2>
          <button
            class="btn btn-dark btn-rounded mr-1"
            title=""
            data-original-title="Add to cart"
          >ADD TO CART
          </button>
          <button class="btn btn-primary btn-rounded mx-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
