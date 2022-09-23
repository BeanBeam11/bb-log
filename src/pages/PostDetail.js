import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PostDetail(){
    const { id } = useParams();

    return (
        <div className="">
            <Header />
            <p className="text-center text-3xl mt-20">The post ID is {id}</p>
            <Footer />
        </div>
    );
}