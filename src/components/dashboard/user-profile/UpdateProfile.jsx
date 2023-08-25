import React from 'react';
import ProfilePic from '../../../img/docc.png'
import { Link } from 'react-router-dom';

const UpdateProfile = () => {
    return (
        <div className='flex p-4 pr-0'>
            <div className="w-1/5 flex justify-end">
                <img src={ProfilePic} alt="profilePic here" className='h-40 w-40 bg-gray-300 rounded-full' />
            </div>
            <div className="border-t-4 border-gray-300 mt-20 w-full pl-4">
                <input className='font-bold text-xl text-gray-600 dark:text-white outline-none border-b-2' placeholder='Masud Rana ' autoFocus></input>
                <button className='bg-green-800 text-gray-100 float-right mr-5 font-bold text-sm p-2 rounded mt-2'>Save Profile</button>
                <input className='font-semibold text-gray-600 text-sm outline-none block border-b-2' placeholder='Jr Front-end Developer'></input>
                <div className='pt-4'>
                    <span className='font-semibold text-gray-400'>Contact Informations</span>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Phone</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='+8801773229167'></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Address</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='Rangpur Haragach, Bangladesh'></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Email</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='ranarr.dev@gmail.com' disabled></input>
                            <span className='block text-xs  my-2 p-1 w-2/3 rounded text-red-600 font-bold'>Email is not changable</span>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Website</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='https://rana-rr.netlify.app/'></input>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <span className='font-semibold text-gray-400'>Basic Informations</span>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Gender</span>
                        </div>
                        <div className='w-3/4'>
                            <input type="radio" id='male' name='gender' className='mx-2'/>
                            <label htmlFor="male">Male</label>
                            <input type="radio" id='famale' name='gender' className='mx-2'/>
                            <label htmlFor="famale">Famale</label>
                        </div>
                    </div>                
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Age</span>
                        </div>
                        <div className='w-3/4'>
                            <span className='text-gray-600 font-semibold'>21</span>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Birth Date</span>
                        </div>
                        <div className='w-3/4'>
                            <input type="date" />
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default UpdateProfile;