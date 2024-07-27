import React from 'react';
import Footer from './Footer/Footer';
import Carousel from './Carousel'
import Middle from './Middle/Middle';
import Chat from './Chat/Chat';
import NavBar from './NavBar/Navbar';
export default function Home() {
    return (
        <div>
            <Carousel/>
            <Middle/>
            <Chat/>
        </div>
    )
}


