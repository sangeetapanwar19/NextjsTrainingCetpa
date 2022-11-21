import React, { useEffect } from "react";
import {useRouter} from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/contact');
        },3000)
    },[])
    return(
        <>
            <title>Page Not Found</title>
        </>
    )
}

export default NotFound;