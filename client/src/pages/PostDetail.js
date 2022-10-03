import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPost } from '../api';
import { formatDate } from '../utils/formatter';

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const res = await getPost({ id });
        setPost(res.data.data);
    };

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-1/2 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white">
                <img src={post.image} alt={''} className="object-cover w-full h-96" />
                <div className="p-10">
                    <div className="text-3xl font-bold mb-2">{post.title}</div>
                    <div className="mb-6">
                        <span className="font-medium">{post.author}</span>
                        <span className="ml-3 opacity-80 text-sm">{formatDate(post.createdAt)}</span>
                    </div>
                    <div className="text-lg">{post.content}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
