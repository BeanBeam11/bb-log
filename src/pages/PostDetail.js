import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import postData from '../json/post.json';

export default function PostDetail() {
    const { id } = useParams();
    const post = postData.find((el) => el.id === id);

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-1/2 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white">
                <img src={post.image} alt={''} className="object-cover w-full h-96" />
                <div className="p-10">
                    <div className="text-3xl font-bold mb-2">{post.title}</div>
                    <div className="mb-6">
                        {post.author} <span>{post.created_at}</span>
                    </div>
                    <div className="text-lg">{post.content}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
