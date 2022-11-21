import React from "react";

export const getStaticProps = () =>{
    return{
        props : {footerstatus : true}
    }
}
const Labs = (props) => {
    return(
        <div>Labs</div>
    )
}

export default Labs;