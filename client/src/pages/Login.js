import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loginAsync } from '../redux/accountSlice';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginStatus = useSelector((state) => state.account.status);
    const user = useSelector((state) => state.account.user);
    const dispatch = useDispatch();

    const handleLogin = async () => {
        dispatch(loginAsync({ email, password }));
    };

    useEffect(() => {
        if (loginStatus === 'idle' && user.name) {
            alert('登入成功！');
            navigate('/');
        }
    }, [loginStatus]);

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-1/3 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white p-10 flex flex-col items-center mb-60">
                <div className="text-2xl font-bold mb-12">登入</div>
                <div className="flex w-4/5 h-12 rounded-md mb-4">
                    <EnvelopeIcon className="h-6 w-6 absolute ml-4 mt-3" />
                    <input
                        type="email"
                        placeholder={'email'}
                        value={email}
                        maxLength={100}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-full rounded-md bg-gray-50 pl-14 py-2 focus:outline-0 focus:bg-yellow-700/5"
                    ></input>
                </div>
                <div className="flex w-4/5 h-12 rounded-md mb-4">
                    <LockClosedIcon className="h-6 w-6 absolute ml-4 mt-3" />
                    <input
                        type="password"
                        placeholder={'password'}
                        value={password}
                        maxLength={100}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-full rounded-md bg-gray-50 pl-14 py-2 focus:outline-0 focus:bg-yellow-700/5"
                    ></input>
                </div>
                <button
                    onClick={handleLogin}
                    className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md mt-24 mb-6 hover:scale-110 transition ease-in"
                >
                    登入
                </button>
                <div>
                    還沒有帳號嗎？
                    <span className="font-bold">
                        <Link to={'/register'}>馬上註冊</Link>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
}
