import React from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon } from '@heroicons/react/24/solid';

export default function Header() {
    return (
        <div className="sticky top-0 z-50 w-screen h-20 text-xl flex flex-row items-center border-b border-b-yellow-700/50 px-14 bg-transparent mb-14">
            <Link to={'/'} className="mr-auto">
                <img src={'/images/logo.png'} alt="logo" className="h-12" />
            </Link>
            <Link to={'/'} className="mx-5 hover:text-yellow-700">
                文章列表
            </Link>
            <Link to={'/about'} className="mx-5 hover:text-yellow-700">
                關於我
            </Link>
            <Link
                to={'/add-post'}
                className="flex mx-5 text-white font-medium px-4 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md"
            >
                <PencilIcon className="h-6 w-6 mr-2" />
                寫點東西
            </Link>
        </div>
    );
}
