import React from 'react';
import { Link } from 'react-router-dom';
import SigninImg from '../../img/signup.svg';

const Register = () => {
    return (
        <div className="w-2/3 mx-auto h-screen items-center flex bg-white">
            <div className="w-1/2">
                <img src={SigninImg} alt="" className='rotat ' style={{ transform: 'scaleX(-1)' }} />
            </div>
            <div className="w-1/2">
                <div className='w-2/3 ml-10'>
                    <h3 className='text-blue-500 font-sans font-bold text-xl mb-2'>Create Account</h3>
                    <input type="text" placeholder='Your Full Name' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input type="text" placeholder='Email ID' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input type="password" placeholder='Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input type="password" placeholder='Confirm Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <div>
                        <span className='text-sm font-semibold text-gray-500'>Gender : </span>
                        <div className='flex items-center'>
                            <input type="radio" name="sex" id="male" />
                            <label htmlFor="male" className='text-sm font-semibold text-gray-500 px-2'>Male</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" name="sex" id="famale" />
                            <label htmlFor="famale" className='text-sm font-semibold text-gray-500 px-2'>Famale</label>
                        </div>
                    </div>
                    <span className='text-sm font-semibold text-gray-500'> Already a Member ? <Link to="/login" className='text-blue-500'>Sign In</Link></span>
                    <button className='bg-blue-500 text-sm font-serif rounded-full block text-gray-100 w-full py-1 my-2'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Register;