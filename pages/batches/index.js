import React from 'react'
import Link from 'next/link';


export const getStaticProps = async () => {
    //api call
    const response = await fetch(process.env.API_URL);
    const data = await response.json(); 
    return {
        props: {productData: data}
    }
}


//products list
const Batches = (props) => {
    console.log('props', props);
    const {productData} = props;
    return (
        <div>
                <h2 className='text_nextjs'>This is Btaches file.</h2>
                {productData.map(item => (
                    <div><Link href={`/batches/${item.id}`}>{item.title}</Link></div>
                    
                ))}
            </div>
    )
}

export default Batches;