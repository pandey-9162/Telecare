import React from 'react';
import Footer from './Footer/Footer';
import Carousel from './Carousel'
import Middle from './Middle/Middle';


export default function Home() {
    return (
        <div>
            <Carousel/>
            <Middle/>
            <Footer/>
        </div>
    )
}


