import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='overflow-scroll w-full overflow-x-hidden scroll no-scrollbar'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;