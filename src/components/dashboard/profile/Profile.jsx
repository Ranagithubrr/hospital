import React from 'react';
import Doctor from '../../../img/docc.png';
import { AiOutlineFieldTime, AiOutlineSchedule } from 'react-icons/ai';

const Profile = () => {
    return (
        <div className='p-2 border m-3'>
            <h3 className='font-semibold text-gray-900'>Doctors Profile</h3>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 lg:w-1/4 px-2 my-2'>
                    <div className='border rounded cursor-pointer box-border overflow-clip hover:shadow-lg'>
                        <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'></div>
                        <div>
                            <img src={Doctor} alt="" className='rounded-full h-28 w-28 m-auto -mt-16 bg-gradient-to-r from-gray-400  to-gray-200 pt-3 ring ring-white' />
                            <h4 className='font-semibold text-center text-gray-800'>Dr. Abraham Ehshan</h4>
                            <span className='font-semibold text-center block text-xs text-gray-800'>MBBS</span>
                            <div className='px-5'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex items-center'><span className='text-base pr-1'><AiOutlineFieldTime /></span> Avaiable on</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>10AM To 6PM</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex'><span className='text-base pr-1'><AiOutlineSchedule /></span>  Working Day</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>Mon To Fri</span>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='border rounded px-3 py-1 my-2 bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200'>Request Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 px-2 my-2'>
                    <div className='border rounded cursor-pointer box-border overflow-clip'>
                        <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'></div>
                        <div>
                            <img src={Doctor} alt="" className='rounded-full h-28 w-28 m-auto -mt-16 bg-gradient-to-r from-gray-400  to-gray-200 pt-3 ring ring-white' />
                            <h4 className='font-semibold text-center text-gray-800'>Dr. Abraham Ehshan</h4>
                            <span className='font-semibold text-center block text-xs text-gray-800'>MBBS</span>
                            <div className='px-5'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex items-center'><span className='text-base pr-1'><AiOutlineFieldTime /></span> Avaiable on</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>10AM To 6PM</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex'><span className='text-base pr-1'><AiOutlineSchedule /></span>  Working Day</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>Mon To Fri</span>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='border rounded px-3 py-1 my-2 bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200'>Request Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 px-2 my-2'>
                    <div className='border rounded cursor-pointer box-border overflow-clip'>
                        <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'></div>
                        <div>
                            <img src={Doctor} alt="" className='rounded-full h-28 w-28 m-auto -mt-16 bg-gradient-to-r from-gray-400  to-gray-200 pt-3 ring ring-white' />
                            <h4 className='font-semibold text-center text-gray-800'>Dr. Abraham Ehshan</h4>
                            <span className='font-semibold text-center block text-xs text-gray-800'>MBBS</span>
                            <div className='px-5'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex items-center'><span className='text-base pr-1'><AiOutlineFieldTime /></span> Avaiable on</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>10AM To 6PM</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex'><span className='text-base pr-1'><AiOutlineSchedule /></span>  Working Day</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>Mon To Fri</span>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='border rounded px-3 py-1 my-2 bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200'>Request Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 px-2 my-2'>
                    <div className='border rounded cursor-pointer box-border overflow-clip'>
                        <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'></div>
                        <div>
                            <img src={Doctor} alt="" className='rounded-full h-28 w-28 m-auto -mt-16 bg-gradient-to-r from-gray-400  to-gray-200 pt-3 ring ring-white' />
                            <h4 className='font-semibold text-center text-gray-800'>Dr. Abraham Ehshan</h4>
                            <span className='font-semibold text-center block text-xs text-gray-800'>MBBS</span>
                            <div className='px-5'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex items-center'><span className='text-base pr-1'><AiOutlineFieldTime /></span> Avaiable on</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>10AM To 6PM</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex'><span className='text-base pr-1'><AiOutlineSchedule /></span>  Working Day</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>Mon To Fri</span>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='border rounded px-3 py-1 my-2 bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200'>Request Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 px-2 my-2'>
                    <div className='border rounded cursor-pointer box-border overflow-clip'>
                        <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'></div>
                        <div>
                            <img src={Doctor} alt="" className='rounded-full h-28 w-28 m-auto -mt-16 bg-gradient-to-r from-gray-400  to-gray-200 pt-3 ring ring-white' />
                            <h4 className='font-semibold text-center text-gray-800'>Dr. Abraham Ehshan</h4>
                            <span className='font-semibold text-center block text-xs text-gray-800'>MBBS</span>
                            <div className='px-5'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex items-center'><span className='text-base pr-1'><AiOutlineFieldTime /></span> Avaiable on</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>10AM To 6PM</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex'><span className='text-base pr-1'><AiOutlineSchedule /></span>  Working Day</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>Mon To Fri</span>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='border rounded px-3 py-1 my-2 bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200'>Request Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 px-2 my-2'>
                    <div className='border rounded cursor-pointer'>
                        <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'></div>
                        <div>
                            <img src={Doctor} alt="" className='rounded-full h-28 w-28 m-auto -mt-16 bg-gradient-to-r from-gray-400  to-gray-200 pt-3 ring ring-white' />
                            <h4 className='font-semibold text-center text-gray-800'>Dr. Abraham Ehshan</h4>
                            <span className='font-semibold text-center block text-xs text-gray-800'>MBBS</span>
                            <div className='px-5'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex items-center'><span className='text-base pr-1'><AiOutlineFieldTime /></span> Avaiable on</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>10AM To 6PM</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700 flex'><span className='text-base pr-1'><AiOutlineSchedule /></span>  Working Day</span>
                                    </div>
                                    <div className='w-1/2'>
                                        <span className='text-xs font-semibold text-gray-700'>Mon To Fri</span>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='border rounded px-3 py-1 my-2 bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200'>Request Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;