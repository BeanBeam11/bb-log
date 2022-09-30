import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

export default function Home() {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        alert('搜尋： ' + keyword);
    };

    return (
        <div className="">
            <Header />
            <div className="w-full min-h-screen flex flex-col items-center">
                <div className="text-center text-3xl mb-8">首頁</div>
                <div className="w-2/5 h-10 rounded-md mb-12">
                    <input
                        type="text"
                        placeholder={'關鍵字'}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyPress={(e) => (e.key === 'Enter' ? handleSearch() : null)}
                        className="absolute w-2/5 h-10 rounded-md pl-10 focus:outline-0 focus:bg-yellow-700/5"
                    ></input>
                    <MagnifyingGlassIcon className="absolute h-6 w-6 my-2 ml-2" />
                </div>
                <Post />
            </div>
            <Footer />
        </div>
    );
}
