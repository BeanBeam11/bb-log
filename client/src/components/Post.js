import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { formatDate } from '../utils/formatter';

export default function Post(props) {
    const { data, loading } = props;

    return (
        <div className="w-4/5 h-auto grid grid-cols-3 gap-6">
            {data.map((el, index) => (
                <Link
                    to={`/post/${el._id}`}
                    className="w-full min-h-fit bg-white rounded-lg drop-shadow-md overflow-hidden"
                    key={index}
                >
                    {loading ? (
                        <Skeleton className="w-full h-60" borderRadius="0" style={{ top: -4 }} />
                    ) : (
                        <img src={el.image} alt={'cover'} className="object-cover w-full h-60" />
                    )}

                    <div className="p-6">
                        <div className="text-xl font-bold mb-1">
                            {loading ? <Skeleton width="80%" height="1.25rem" /> : el.title}
                        </div>
                        <div className="text-sm mb-3">
                            <span className="font-medium">
                                {loading ? <Skeleton width="20%" inline={true} /> : el.author}
                            </span>
                            <span className="ml-3 opacity-80 text-sm">
                                {loading ? <Skeleton width="25%" /> : formatDate(el.createdAt)}
                            </span>
                        </div>
                        <div className="">
                            {loading ? (
                                <Skeleton count={3} />
                            ) : el.content.length > 60 ? (
                                `${el.content.slice(0, 60)}...`
                            ) : (
                                el.content
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
