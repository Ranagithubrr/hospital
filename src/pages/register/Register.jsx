import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-screen h-screen flex bg-slate-100">
            <div className="w-1/3 m-auto shadow-md rounded bg-white p-5">
                <span className="text-3xl font-bold text-center block">Me<span className="text-blue-900">Doc</span></span>
                <span className='block font-bold text-black text-center my-3 pb-2'>Register</span>
                <div className='w-3/5 m-auto py-2'>
                    <input type="text" placeholder='First Name' className='outline-none w-full  my-2 px-2 border-gray-400 border-2 rounded'/>
                    <input type="text" placeholder='Last Name' className='outline-none w-full  my-2 px-2 border-gray-400 border-2 rounded'/>
                    <input type="text" placeholder='Email (demo@gmail.com )' className='outline-none w-full  my-2 px-2 border-gray-400 border-2 rounded'/>
                    <input type="password" placeholder='Input Your Password' className='outline-none w-full  my-2 px-2 border-gray-400 border-2 rounded'/>
                    <input type="password" placeholder='Retype Password' className='outline-none w-full  my-2 px-2 border-gray-400 border-2 rounded'/>
                    <span className='text-sm font-semibold'>I'm a </span>
                    <input type="radio" name="userType" id="pataient" className="mx-2"/>
                    <label htmlFor="pataient">Pataient</label>
                    <input type="radio" name="userType" id="doctor" className='mx-2'/>
                    <label htmlFor="doctor">Doctor</label>                   
                    <br />                    
                    <button className="bg-blue-700 text-white block rounded px-5 py-1 w-full my-4 hover:bg-blue-600">Log In</button>
                    <span className='text-sm font-semibold text-gray-500'>Already have an account ? <Link to="/login" className='font-bold text-blue-700 text-sm'>Sign In</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Register;