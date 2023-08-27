import React from 'react';
import Pataientstable from './Pataientstable';
import { Pagination } from '@mui/material';

const Patients = () => {
    return (
        <div>
            <h4 className='font-semibold text-lg pl-2 my-5'>Pataients</h4>
            <Pataientstable />
            <div className='my-5'>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
};

export default Patients;