import React from 'react';
import { Link } from 'react-router-dom';
import SigninImg from '../../img/login.svg';

const Login = () => {
    return (
        <div className="w-2/3 mx-auto h-screen items-center flex bg-white">
            <div className="w-1/2">
                <img src={SigninImg} alt="" />
            </div>
            <div className="w-1/2">
                <div className='w-2/3 ml-10'>
                    <h3 className='text-blue-500 font-sans font-bold text-xl mb-2'>Login Account</h3>
                    <input type="text" placeholder='Email ID' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input type="password" placeholder='Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <span className='text-sm font-semibold text-gray-500'> Not a Member ? <Link to="/register" className='text-blue-500'>Sign Up</Link></span>
                    <button className='bg-blue-500 text-sm font-serif rounded-full block text-gray-100 w-full py-1 my-2'>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;