import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { FaAmbulance, FaUsers } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { RxScissors } from 'react-icons/rx';
import { IoMdBed, IoLogoUsd } from 'react-icons/io';
import Doctor from '../../../img/docc.png';
import Charts from './Charts';

const Maindashboard = () => {
    return (
        <div className="flex flex-wrap w-full items-start p-2">
            <div className='w-full md:w-1/2 lg:w-2/3 p-2 flex flex-wrap'>
                <div className="w-full flex flex-wrap py-2">
                    <div className="w-full  lg:w-1/2 lg:pr-1">
                        <div className='border p-2 rounded-sm'>
                            <h5 className='font-semibold pl-2'>Activity Overview</h5>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1'>
                                    <div className="bg-gradient-to-b from-blue-800 to-blue-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><BiCalendar /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>500</span>
                                        <span className='text-xs text-gray-500'>Appointments</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><RxScissors /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>32</span>
                                        <span className='text-xs text-gray-500'>Operations</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1'>
                                    <div className="bg-gradient-to-b from-purple-800 to-purple-500 text-white
                            rounded py-2 px-2 text-2xl  flex items-center
                            "><IoMdBed /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>84</span>
                                        <span className='text-xs text-gray-500'>New Patients</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-green-400 to-green-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><IoLogoUsd /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>$1440</span>
                                        <span className='text-xs text-gray-500'>Earning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  lg:w-1/2 lg:pl-1">
                        <div className='border p-2 rounded-sm'>
                            <h5 className='font-semibold pl-2'>Hospital Survey</h5>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1'>
                                    <div className="bg-gradient-to-b from-fuchsia-600 to-fuchsia-400 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><FaUsers /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>150</span>
                                        <span className='text-xs text-gray-500'>Total Stuff</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-emerald-800 to-emerald-500 text-white
                            rounded py-2 px-2 text-2xl  flex items-center
                            "><IoMdBed /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>220</span>
                                        <span className='text-xs text-gray-500'>Total Bed</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-purple-800 to-purple-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><GiCheckMark /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>84</span>
                                        <span className='text-xs text-gray-500'><abbr title="Pataients Released" className='no-underline'>P. Released</abbr></span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-red-400 to-red-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><FaAmbulance /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>12</span>
                                        <span className='text-xs text-gray-500'>Ambulance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border p-2 w-full'>
                    <Charts />
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className='border p-2 rounded-sm '>
                    <h5 className='font-semibold pl-2'>Top Doctors</h5>
                    <ul className='mt-3 sticky top-32'>
                        <li className='flex my-2 bg-gradient-to-r from-gray-200 to-blue-200 rounded py-1 px-3'>
                            <a href="/" className='flex items-center no-underline w-full h-full'>
                                <img src={Doctor} alt="" className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full" />
                                <div>

                                    <span className='pl-2 text-sm font-semibold text-gray-700'>Dr Abraham Ehsan</span>
                                    <span className='block text-xs pl-2 font-semibold text-gray-600'>Heart Surgeon</span>
                                </div>
                            </a>
                        </li>
                        <li className='flex my-2 bg-gradient-to-r from-gray-200 to-blue-200 rounded py-1 px-3'>
                            <a href="/" className='flex items-center no-underline w-full h-full'>
                                <img src={Doctor} alt="" className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full" />
                                <div>

                                    <span className='pl-2 text-sm font-semibold text-gray-700'>Dr Abraham Ehsan</span>
                                    <span className='block text-xs pl-2 font-semibold text-gray-600'>Heart Surgeon</span>
                                </div>
                            </a>
                        </li>
                        <li className='flex my-2 bg-gradient-to-r from-gray-200 to-blue-200 rounded py-1 px-3'>
                            <a href="/" className='flex items-center no-underline w-full h-full'>
                                <img src={Doctor} alt="" className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full" />
                                <div>

                                    <span className='pl-2 text-sm font-semibold text-gray-700'>Dr Abraham Ehsan</span>
                                    <span className='block text-xs pl-2 font-semibold text-gray-600'>Heart Surgeon</span>
                                </div>
                            </a>
                        </li>
                        <li className='flex my-2 bg-gradient-to-r from-gray-200 to-blue-200 rounded py-1 px-3'>
                            <a href="/" className='flex items-center no-underline w-full h-full'>
                                <img src={Doctor} alt="" className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full" />
                                <div>

                                    <span className='pl-2 text-sm font-semibold text-gray-700'>Dr Abraham Ehsan</span>
                                    <span className='block text-xs pl-2 font-semibold text-gray-600'>Heart Surgeon</span>
                                </div>
                            </a>
                        </li>
                        <li className='flex my-2 bg-gradient-to-r from-gray-200 to-blue-200 rounded py-1 px-3'>
                            <a href="/" className='flex items-center no-underline w-full h-full'>
                                <img src={Doctor} alt="" className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full" />
                                <div>

                                    <span className='pl-2 text-sm font-semibold text-gray-700'>Dr Abraham Ehsan</span>
                                    <span className='block text-xs pl-2 font-semibold text-gray-600'>Heart Surgeon</span>
                                </div>
                            </a>
                        </li>
                        <li className='flex my-2 bg-gradient-to-r from-gray-200 to-blue-200 rounded py-1 px-3'>
                            <a href="/" className='flex items-center no-underline w-full h-full'>
                                <img src={Doctor} alt="" className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full" />
                                <div>

                                    <span className='pl-2 text-sm font-semibold text-gray-700'>Dr Abraham Ehsan</span>
                                    <span className='block text-xs pl-2 font-semibold text-gray-600'>Heart Surgeon</span>
                                </div>
                            </a>
                        </li>
                        <li className='flex my-2 bg-gradient-to-r from-gray-200 to-blue-200 rounded py-1 px-3'>
                            <a href="/" className='flex items-center no-underline w-full h-full'>
                                <img src={Doctor} alt="" className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full" />
                                <div>

                                    <span className='pl-2 text-sm font-semibold text-gray-700'>Dr Abraham Ehsan</span>
                                    <span className='block text-xs pl-2 font-semibold text-gray-600'>Heart Surgeon</span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>



    );
};

export default Maindashboard;