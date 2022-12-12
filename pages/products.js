import React from "react";
import Link from "next/link";

export const getServerSideProps = async () => {
  const response = await fetch(process.env.API_URL);
  const data = await response.json();
  return {
    props: { productData: data },
  };
};

const Products = (props) => {
  const { productData } = props;
  console.log(props);
  return (
    <>
      <div class="row py-5">
        <h2 className="text_nextjs">Product page</h2>
        {productData.map((item) => {
          return (
            <>
              <div class="col-md-3 d-flex mb-2">
                <div class="card align-items-center">
                <Link href={`/products/${item.id}`}> <img
                    class="mt-3"
                    src={item.image}
                    width={200}
                    height={200}
                    alt="Course Images"
                  /></Link>
                  <h6 class="text-center"><Link href={`/products/${item.id}`}>{item.title}</Link></h6>
                  <p class="desc"><Link href={`/products/${item.id}`}>{item.description}</Link></p>
                  <h6><Link href={`/products/${item.id}`}>{item.price}</Link></h6>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
