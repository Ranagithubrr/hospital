import React from 'react';
import { AiOutlineHome, AiOutlineSchedule,AiFillStar} from 'react-icons/ai';
import { MdDashboardCustomize ,MdOutlineLogout} from 'react-icons/md';
import { HiUserAdd } from 'react-icons/hi';
import { BsCalendarDate } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='w-1/6 h-auto border-r shadow-lg min-h-screen dark:bg-gray-800'>
            {/* <span className='
                text-sm
                font-semibold
            '>Dashboard</span> */}
            <ul className='pl-2 pt-2 sticky top-20'>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/' className='h-full w-full py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><MdDashboardCustomize className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Dashboard</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/appointment' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><BsCalendarDate className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Appointment</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/schedule' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><AiOutlineSchedule className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Schedule</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/doctors' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><FaUsers className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Doctors Profile</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/patients' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><HiUserAdd className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Patients</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/review' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><AiFillStar className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Patients Review</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/login' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><MdOutlineLogout className='text-xl'/>  <span className='pl-3 h-full text-sm font-semibold'>Log Out</span></span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;