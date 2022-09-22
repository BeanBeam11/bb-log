import React from 'react';

export default function Header(){
    return (
        <div className="sticky z-50 h-20 text-xl flex flex-row items-center border-b border-b-yellow-700/50 px-14 bg-transparent">
            <div className="mr-auto">Logo</div>
            <button className="mx-5 hover:text-yellow-700">文章列表</button>
            <button className="mx-5 hover:text-yellow-700">關於我</button>
            <button className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md">寫點東西</button>
        </div>
    );
}