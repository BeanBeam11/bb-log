import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import { searchPost } from '../api';

export default function Search() {
    const location = useLocation();
    const [keyword, setKeyword] = useState(location.state.keyword ? location.state.keyword : '');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (keyword.length !== 0) fetchSearchPost();
    }, []);

    const fetchSearchPost = async () => {
        const res = await searchPost({ keyword });
        setPosts(res.data.data);
    };

    const handleSearch = () => {
        if (keyword.length < 1) {
            alert('搜尋關鍵字：請輸入至少 1 個字');
            return;
        }
        fetchSearchPost();
    };

    return (
        <div className="">
            <Header />
            <div className="w-full min-h-screen flex flex-col items-center">
                <div className="text-center text-3xl mb-8">搜尋</div>
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
                {posts.length !== 0 ? (
                    <Post data={posts} />
                ) : (
                    <div className="">沒有符合條件的文章，試試其他關鍵字？</div>
                )}
            </div>
            <Footer />
        </div>
    );
}
