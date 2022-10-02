import React from 'react';
import { Link } from 'react-router-dom';

export default function Post(props) {
    const { data } = props;

    return (
        <div className="w-4/5 h-auto grid grid-cols-3 gap-6">
            {data.map((el, index) => (
                <Link
                    to={`/post/${el._id}`}
                    className="w-full min-h-fit bg-white rounded-lg drop-shadow-md overflow-hidden"
                    key={index}
                >
                    <img src={el.image} alt={'cover'} className="object-cover w-full h-60" />
                    <div className="p-6">
                        <div className="text-xl font-bold mb-1">{el.title}</div>
                        <div className="text-sm mb-3">
                            {el.author} <span>{el.createdAt}</span>
                        </div>
                        <div className="">{el.content}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
