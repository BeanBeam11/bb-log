import React from 'react';
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="sticky z-50 h-20 text-xl flex flex-row items-center border-b border-b-yellow-700/50 px-14 bg-transparent">
            <Link to={"/"} className="mr-auto">Logo</Link>
            <Link to={"/"} className="mx-5 hover:text-yellow-700">文章列表</Link>
            <Link to={"/about"} className="mx-5 hover:text-yellow-700">關於我</Link>
            <Link to={"/"} className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md">寫點東西</Link>
        </div>
    );
}