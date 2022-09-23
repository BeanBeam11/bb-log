import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home(){
    return (
        <div className="">
            <Header />
            <p className="text-center text-3xl mt-20">This is Home</p>
            <Footer />
        </div>
    );
}