import React from "react";
import Header from "../common/Header";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Styles from "../styles/About.module.css"
import Head from "next/head";
import Image from "next/image"

const About = () => {
    return(
        <>
        <Head>
            <title>About us page</title>
            <meta name="description" content="About us - keywords"></meta>
        </Head>
        <div>
            <h2 className={Styles.about_text}>About us page</h2>
            <Image src="/flower.jpg" width={500} height={400}/>
        </div>
        </>
    )
}

export default About;