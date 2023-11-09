import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdDashboardCustomize, MdOutlineLogout } from 'react-icons/md';
import { HiUserAdd } from 'react-icons/hi';
import { BsCalendarDate, BsHospitalFill, BsCurrencyDollar, BsFillChatDotsFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { MdArrowDropDown, MdManageAccounts } from 'react-icons/md';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const toggleSubmenu = () => {
        isSubMenuOpen ? setIsSubMenuOpen(false) : setIsSubMenuOpen(true);
    }
    return (
        <div className='w-1/6 h-auto border-r shadow-lg min-h-screen dark:bg-gray-800'>
            {/* <span className='
                text-sm
                font-semibold
            '>Dashboard</span> */}
            <ul className='pl-2 pt-2 sticky top-20'>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/' className='h-full w-full py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><MdDashboardCustomize className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Dashboard</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/appointment' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><BsCalendarDate className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Appointment</span></span>
                    </Link>
                </li>
                <li className='rounded dark:hover:bg-gray-700 relative'>
                    <span className='h-full w-full  py-4 px-2 block cursor-pointer' onClick={() => toggleSubmenu()}>
                        <span className='flex items-center text-base dark:text-gray-300'><MdArrowDropDown className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'><span className='flex items-center'>Medical Instruments </span></span></span>
                    </span>
                    <div className={`border-l-2 border-gray-800 transition duration-500 ${isSubMenuOpen ? 'pointer-events-auto ml-3 ' : 'pointer-events-none h-0 overflow-hidden'
                        }`}>
                        <Link to="/hospital-survey" className='pl-3 ml-2 flex items-center hover:bg-slate-200 rounded text-sm font-semibold py-1 dark:text-gray-300'><span className='pr-2 text-sm'><BsHospitalFill/> </span>- Hospital Survey</Link>                        
                        <Link to="/earnings" className='pl-3 ml-2 flex items-center hover:bg-slate-200 rounded text-sm font-semibold py-1 dark:text-gray-300'><span className='pr-2 text-sm'><BsCurrencyDollar/> </span>- Earnings</Link>                        
                    </div>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/doctors' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><FaUsers className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Doctors Profile</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/patients' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><HiUserAdd className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Patients</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/review' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><AiFillStar className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Patients Review</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/accounts-review' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><MdManageAccounts className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Accounts Review</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/chat' className='h-full w-full  py-4 px-2 flex'>
                        <span className='flex items-center text-base dark:text-gray-300'><BsFillChatDotsFill className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Chat</span></span>
                        <div className='h-5 w-5 bg-red-700 rounded-full ml-auto mr-5 flex items-center justify-center'>
                            <span className='text-gray-200 text-xs font-semibold'>12</span>
                        </div>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-700'>
                    <Link to='/login' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-300'><MdOutlineLogout className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Log Out</span></span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;