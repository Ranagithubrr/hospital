import React from 'react';
import Avatar from '../../../img/docc.png';
import Rating from '@mui/material/Rating';

const Singlereview = () => {
    return (
        <div className='flex my-10'>
            <div>
                <img src={Avatar} alt="profile img" className='h-20 w-20 bg-gray-300 rounded' />
            </div>
            <div className='w-56 p-2'>
                <h4 className='font-semibold m-0 p-0'>Masud Rana</h4>
                <span className='text-sm text-gray-500 block'>Doctor: Dr. Dinesh Roy</span>
                <span className='text-sm text-gray-500 block'>Case: Headeache</span>

            </div>
            <div className='ml-2 w-6/12'>
                <div className='flex items-center'>
                    <Rating name="read-only" value={5} readOnly precision={0.1} />
                    <span className='text-sm font-semibold text-gray-500 ml-2'>24/08/2023</span>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam labore animi nesciunt mollitia delectus, accusamus error earum molestias voluptatum natus.</p>
                </div>
            </div>
        </div>
    )
}

export default Singlereview