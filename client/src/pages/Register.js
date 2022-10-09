import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { registerAsync } from '../redux/accountSlice';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigate = useNavigate();

    const registerStatus = useSelector((state) => state.account.status);
    const user = useSelector((state) => state.account.user);
    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (password !== passwordConfirm) {
            alert('密碼不一致，請再確認一次');
            return;
        }
        dispatch(registerAsync({ name, email, password }));
    };

    useEffect(() => {
        if (registerStatus === 'idle' && user.name) {
            alert('註冊成功！');
            navigate('/');
        }
    }, [registerStatus]);

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-1/3 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white p-10 flex flex-col items-center mb-24">
                <div className="text-2xl font-bold mb-12">註冊</div>
                <div className="flex w-4/5 h-12 rounded-md mb-4">
                    <UserIcon className="h-6 w-6 absolute ml-4 mt-3" />
                    <input
                        type="text"
                        placeholder={'name'}
                        value={name}
                        maxLength={100}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-12 rounded-md bg-gray-50 pl-14 py-2 focus:outline-0 focus:bg-yellow-700/5"
                    ></input>
                </div>
                <div className="flex w-4/5 h-12 rounded-md mb-4">
                    <EnvelopeIcon className="h-6 w-6 absolute ml-4 mt-3" />
                    <input
                        type="email"
                        placeholder={'email'}
                        value={email}
                        maxLength={100}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 rounded-md bg-gray-50 pl-14 py-2 focus:outline-0 focus:bg-yellow-700/5"
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
                        className="w-full h-12 rounded-md bg-gray-50 pl-14 py-2 focus:outline-0 focus:bg-yellow-700/5"
                    ></input>
                </div>
                <div className="flex w-4/5 h-12 rounded-md mb-4">
                    <LockClosedIcon className="h-6 w-6 absolute ml-4 mt-3" />
                    <input
                        type="password"
                        placeholder={'confirm password'}
                        value={passwordConfirm}
                        maxLength={100}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        className="w-full h-12 rounded-md bg-gray-50 pl-14 py-2 focus:outline-0 focus:bg-yellow-700/5"
                    ></input>
                </div>
                <button
                    onClick={handleRegister}
                    className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md mt-24 mb-6 hover:scale-110 transition ease-in"
                >
                    註冊
                </button>
                <div>
                    已經有帳號嗎？
                    <span className="font-bold">
                        <Link to={'/login'}>馬上登入</Link>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
}
