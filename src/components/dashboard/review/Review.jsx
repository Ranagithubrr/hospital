import React from 'react';
import Rating from '@mui/material/Rating';
import Singlereview from './Singlereview';
import { Pagination } from '@mui/material';

const Review = () => {
    // const [value, setValue] = useState(4.6);
    const value = 4.6;
    return (
        <div className='pl-10 pt-5'>
            <h4 className='font-semibold text-xl'>Reviews</h4>
            <div className='flex justify-between w-1/3 my-4'>
                <div>
                    <span className='block font-semibold'>Total Reviews</span>
                    <span className='block font-semibold text-4xl'>360</span>
                </div>
                <div>
                    <span className='block font-semibold'>Average Rating</span>
                    <span className='font-semibold text-4xl mr-2'>4.9</span>
                    <Rating name="read-only" value={value} readOnly precision={0.1}/>
                </div>
            </div>

            <Singlereview />
            <Singlereview />
            <Singlereview />
            <Singlereview />
            <Singlereview />

            <div className='my-5'>
            <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
};

export default Review;