import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Homepage;