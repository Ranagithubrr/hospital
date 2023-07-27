import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center flex-col'>
            <span className='
            block font-bold text-6xl
            '>404</span>
            <span className='font-bold block mt-5'> Page not found</span>            
            <span className='font-bold block mt-2 '> Return to <Link to="/" className='text-blue-900'>/Home</Link></span>            
        </div>
    );
};

export default Notfound;