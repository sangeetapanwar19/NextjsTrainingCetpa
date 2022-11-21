import React, { Children } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
    const {children,footerstatus} = props;
    return(
        <>
           {true ? (<div className="container">
            <Header/>
            <Navbar/>
            {children}
            {!footerstatus && <Footer/>}
           </div>):(
            <div className="container">
            <Header/>
            <Navbar/>
            {children}
            {!footerstatus && <Footer/>}
            </div>
           )}
        </>
    )
}

export default Layout;