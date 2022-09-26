import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AddPost(){

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-1/2 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white p-10">
                <div className="text-2xl font-bold mb-4">標題</div>
                <input type="text" placeholder={"標題"} value={"標題"} onChange={()=>console.log("Hello!")} className="w-full h-10 rounded-md bg-gray-50 px-4 mb-10"></input>
                <div className="text-2xl font-bold mb-4">作者</div>
                <input type="text" placeholder={"作者"} value={"作者"} onChange={()=>console.log("Hello!")} className="w-full h-10 rounded-md bg-gray-50 px-4 mb-10"></input>
                <div className="text-2xl font-bold mb-4">文章封面圖</div>
                <input type="text" placeholder={"文章封面圖"} value={"文章封面圖"} onChange={()=>console.log("Hello!")} className="w-full h-10 rounded-md bg-gray-50 px-4 mb-10"></input>
                <div className="text-2xl font-bold mb-4">內容</div>
                <input type="text" placeholder={"內容"} value={"內容"} onChange={()=>console.log("Hello!")} className="w-full h-10 rounded-md bg-gray-50 px-4 mb-10"></input>
                
            </div>
            <button onClick={()=> null} className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md mt-12">發布文章</button>
            <Footer />
        </div>
    );
}