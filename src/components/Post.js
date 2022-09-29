import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Post() {
    const posts = useSelector((state) => state.post.posts);

    return (
        <div className="w-4/5 h-auto grid grid-cols-3 gap-6">
            {posts.map((el, index) => (
                <Link
                    to={`/post/${el.id}`}
                    className="w-full h-30 bg-white rounded-lg drop-shadow-md overflow-hidden"
                    key={index}
                >
                    <img src={el.image} alt={''} className="object-cover w-full h-30" />
                    <div className="p-6">
                        <div className="text-xl font-bold mb-1">{el.title}</div>
                        <div className="text-sm mb-3">
                            {el.author} <span>{el.created_at}</span>
                        </div>
                        <div className="">{el.content}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
