import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import BackToTop from '../components/BackToTop';
import { getAllPost } from '../api';

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchAllPost();
    }, []);

    const fetchAllPost = async () => {
        const res = await getAllPost();
        setPosts(res.data.data);
        setLoading(false);
    };

    const handleSearch = () => {
        if (keyword.length < 1) {
            alert('搜尋關鍵字：請輸入至少 1 個字');
            return;
        }
        navigate(`/search`, { state: { keyword } });
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
                <Post data={posts} loading={loading} />
            </div>
            <BackToTop />
            <Footer />
        </div>
    );
}
