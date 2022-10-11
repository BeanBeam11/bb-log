import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { getPost } from '../api';
import { formatDate } from '../utils/formatter';

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const res = await getPost({ id });
        setPost(res.data.data);
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-1/2 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white">
                {loading ? (
                    <Skeleton className="w-full h-60" borderRadius="0" style={{ top: -4 }} />
                ) : (
                    <img src={post.image} alt={''} className="object-cover w-full h-96" />
                )}
                <div className="p-10">
                    <div className="text-3xl font-bold mb-2">
                        {loading ? <Skeleton width="70%" height="2rem" /> : post.title}
                    </div>
                    <div className="mb-6">
                        <span className="font-medium">
                            {loading ? <Skeleton width="20%" inline={true} /> : post.author}
                        </span>
                        <span className="ml-3 opacity-80 text-sm">
                            {loading ? <Skeleton width="25%" /> : formatDate(post.createdAt)}
                        </span>
                    </div>
                    <div className="text-lg">{loading ? <Skeleton count={3} /> : post.content}</div>
                </div>
            </div>
            {loading && <Loading />}
            <Footer />
        </div>
    );
}
