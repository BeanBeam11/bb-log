import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createPost } from '../api';

export default function AddPost() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');

    const author = useSelector((state) => state.account.user.name);

    const handleAddPost = async () => {
        const res = await createPost({ title, author, image, content });
        setTitle('');
        setImage('');
        setContent('');
    };

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-1/2 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white p-10">
                <div className="text-2xl font-bold mb-4">
                    標題
                    <span className="text-base font-normal ml-6 text-gray-400">100字以內</span>
                </div>
                <input
                    type="text"
                    placeholder={'標題'}
                    value={title}
                    maxLength={100}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"
                ></input>
                <div className="text-2xl font-bold mb-4">
                    文章封面圖
                    <span className="text-base font-normal ml-6 text-gray-400">請輸入圖片網址</span>
                </div>
                <input
                    type="text"
                    placeholder={'文章封面圖'}
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"
                ></input>
                <div className="text-2xl font-bold mb-4">內容</div>
                <textarea
                    type="text"
                    placeholder={'內容'}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="resize-none w-full h-80 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"
                ></textarea>
            </div>
            <button
                onClick={handleAddPost}
                className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md mt-12 hover:scale-110 transition ease-in"
            >
                發布文章
            </button>
            <Footer />
        </div>
    );
}
