import React from 'react';
import AppointmentTable from './AppointmentTable';

const Appointment = () => {
    return (
        <div>
            <h4 className='font-semibold my-5 pl-2'>Appoinments</h4>
            <AppointmentTable />
        </div>
    );
};

export default Appointment;