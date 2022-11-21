import React from "react";

export const getStaticProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return {
        props: { productData: data }
    }
}
const Courses = (props) => {
    const { productData } = props;
    console.log(props);
    /*  return(
          <>
          {productData.map(item => (
            <ul class="grid">
              <li class="card">
              {item.title}
              </li>
            </ul>
         ))}
        </>
        )*/
    return (
        <>
                <div class="row py-5">
                    {productData.map((item) => {
                        return (
                            <>
                                <div class="col-md-3 d-flex mb-2">
                                <div class="card align-items-center">
                                    <img class="mt-3" src={item.image} width={200} height={200} alt="Course Images" />
                                    <h6 class="text-center">{item.title}</h6>
                                    <p class="desc">{item.description}</p>
                                    <h6>{item.price}</h6>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
        </>
    )
}
export default Courses;