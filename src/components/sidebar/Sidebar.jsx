import React from 'react';
import { AiOutlineHome, AiOutlineSchedule,AiFillStar} from 'react-icons/ai';
import { MdDashboardCustomize ,MdOutlineLogout} from 'react-icons/md';
import { HiUserAdd } from 'react-icons/hi';
import { BsCalendarDate } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='w-1/6 h-auto border-r shadow-lg min-h-screen'>
            {/* <span className='
                text-sm
                font-semibold
            '>Dashboard</span> */}
            <ul className='pl-2 pt-2 sticky top-20'>
                <li className='flex  hover:bg-slate-200 rounded'>
                    <Link to='/' className='h-full w-full py-4 px-2 block'>
                        <span className='flex items-center text-base'><MdDashboardCustomize className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Dashboard</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded'>
                    <Link to='/appointment' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base'><BsCalendarDate className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Appointment</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded'>
                    <Link to='/schedule' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base'><AiOutlineSchedule className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Schedule</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded'>
                    <Link to='/profile' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base'><FaUsers className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Doctors Profile</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded'>
                    <Link to='/patients' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base'><HiUserAdd className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Patients</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded'>
                    <Link to='/review' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base'><AiFillStar className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Patients Review</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded'>
                    <Link to='/login' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base'><MdOutlineLogout className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Log Out</span></span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;