import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Bmi from './Bmi';

const Calculators = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-wrap m-5'>
                <div className='w-1/3'>
                    <Bmi />
                </div>
            </div>
        </div>
    );
};

export default Calculators;