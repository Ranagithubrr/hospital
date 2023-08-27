import React from 'react';
import AppointmentTable from './AppointmentTable';
import { Pagination } from '@mui/material';

const Appointment = () => {
    return (
        <div>
            <h4 className='font-semibold my-5 pl-2'>Appoinments</h4>
            <AppointmentTable />
            <div className='my-5'>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
};

export default Appointment;