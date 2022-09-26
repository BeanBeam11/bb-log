import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

export default function Home(){
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="text-center text-3xl mb-8">首頁</div>
            <div className="w-2/5 h-10 rounded-md mb-12">
                <input type="search" placeholder={"關鍵字"} value={"關鍵字"} onChange={()=>console.log("Hello!")} className="absolute w-2/5 h-10 rounded-md pl-10"></input>
                <MagnifyingGlassIcon className="absolute h-6 w-6 my-2 ml-2"/>
            </div>
            <Post />
            <Footer />
        </div>
    );
}