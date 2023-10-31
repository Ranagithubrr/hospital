import React from 'react';
import ProfilePic from '../../../img/docc.png'
import { Link } from 'react-router-dom';

const Userprofile = () => {
  return (
    <div className='flex p-4 pr-0 dark:bg-gray-800'>
      <div className="w-1/5 flex justify-end">
        <img src={ProfilePic} alt="profilePic here" className='h-40 w-40 bg-gray-300 rounded-full' />
      </div>
      <div className="border-t-4 border-gray-300 mt-20 w-full pl-4">
        <h4 className='font-bold text-xl text-gray-600 dark:text-gray-300'>Masud Rana  <span className='text-xs font-bold text-blue-600 bg-blue-200 rounded p-1 ml-3'>Admin</span></h4>
        <Link to="/update-profile" className='bg-blue-800 text-gray-100 dark:text-gray-200 float-right mr-5 font-bold text-sm p-2 rounded -mt-5'>Edit Profile</Link>
        <h6 className='font-semibold text-gray-600 text-sm dark:text-gray-300'>Jr Front-end Developer</h6>
        <div className='pt-4'>
          <span className='font-semibold text-gray-400 dark:text-gray-200'>Contact Informations</span>
          <div className='flex justify-between w-1/2'>
            <div className='w-1/4'>
              <span className='font-semibold text-gray-600 dark:text-gray-300'>Phone</span>
            </div>
            <div className='w-3/4'>
              <span className='text-gray-600 font-semibold dark:text-gray-300'>+8801773229167</span>
            </div>
          </div>
          <div className='flex justify-between w-1/2'>
            <div className='w-1/4'>
              <span className='font-semibold text-gray-600 dark:text-gray-300'>Address</span>
            </div>
            <div className='w-3/4'>
              <span className='text-gray-600 font-semibold dark:text-gray-300'>Rangpur Haragach, Bangladesh</span>
            </div>
          </div>
          <div className='flex justify-between w-1/2'>
            <div className='w-1/4'>
              <span className='font-semibold text-gray-600 dark:text-gray-300'>Email</span>
            </div>
            <div className='w-3/4'>
              <span className='text-gray-600 font-semibold dark:text-gray-300'>ranarr.dev@gmail.com</span>
            </div>
          </div>
          <div className='flex justify-between w-1/2'>
            <div className='w-1/4'>
              <span className='font-semibold text-gray-600 dark:text-gray-300'>Website</span>
            </div>
            <div className='w-3/4'>
              <Link to="https://rana-rr.netlify.app/" target='_blank' className='text-gray-600 font-semibold dark:text-gray-400'>https://rana-rr.netlify.app/</Link>
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
              <span className='text-gray-600 font-semibold'>Male</span>
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
              <span className='text-gray-600 font-semibold'>20 April 2003</span>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h4 className='font-semibold text-gray-800 text-lg mb-2'>Appointments</h4>
          <div className='grid grid-cols-3'>
            <div className='bg-white shadow-xl   p-4 rounded m-2 cursor-pointer'>
              <span className='font-bold text-3xl border text-gray-700 rounded-full w-10 h-10 flex items-center justify-center border-gray-700 mb-3'>1</span>
              <div className='flex '>
                <div className='w-1/4'>
                  <span className='font-semibold'>To:</span>
                </div>
                <div className='w-3/4'>
                  <span className='font-semibold'>Dr. Dinesh Chandra</span>
                </div>
              </div>

              <div className='flex'>
                <div className='w-1/4'>
                  <span className='font-semibold'>Type:</span>
                </div>
                <div className='w-3/4'>
                  <span className='font-semibold'>Health</span>
                </div>
              </div>
              <div className='flex'>
                <div className='w-1/4'>
                  <span className='font-semibold'>Fee:</span>
                </div>
                <div className='w-3/4'>
                  <span className='font-semibold'>$17</span>
                </div>
              </div>
              <div className='flex'>
                <div className='w-1/4'>
                  <span className='font-semibold'>Date:</span>
                </div>
                <div className='w-3/4'>
                  <span className='font-semibold'>11/08/2023</span>
                </div>
              </div>

            </div>
            <div className='bg-white shadow-xl   p-4 rounded m-2 cursor-pointer'>
              <span className='font-bold text-3xl border text-gray-700 rounded-full w-10 h-10 flex items-center justify-center border-gray-700 mb-3'>2</span>
              <div className='flex '>
                <div className='w-1/4'>
                  <span className='font-semibold'>To:</span>
                </div>
                <div className='w-3/4'>
                  <span className='font-semibold'>Dr. Dinesh Chandra</span>
                </div>
              </div>

              <div className='flex'>
                <div className='w-1/4'>
                  <span className='font-semibold'>Type:</span>
                </div>
                <div className='w-3/4'>
                  <span className='font-semibold'>Health</span>
                </div>
              </div>
              <div className='flex'>
                <div className='w-1/4'>
                  <span className='font-semibold'>Date:</span>
                </div>
                <div className='w-3/4'>
                  <span className='font-semibold'>11/08/2023</span>
                </div>
              </div>

            </div>
            <div className='bg-white shadow-xl   p-4 rounded m-2 cursor-pointer'>
              <span className='font-bold text-3xl border text-gray-700 rounded-full w-10 h-10 flex items-center justify-center border-gray-700 mb-3'>3</span>
              <div className='flex- flex-wrap'>


                <div className='flex '>
                  <div className='w-1/4'>
                    <span className='font-semibold'>To:</span>
                  </div>
                  <div className='w-3/4'>
                    <span className='font-semibold'>Dr. Dinesh Chandra</span>
                  </div>
                </div>

                <div className='flex'>
                  <div className='w-1/4'>
                    <span className='font-semibold'>Type:</span>
                  </div>
                  <div className='w-3/4'>
                    <span className='font-semibold'>Health</span>
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-1/4'>
                    <span className='font-semibold'>Date:</span>
                  </div>
                  <div className='w-3/4'>
                    <span className='font-semibold'>11/08/2023</span>
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-1/4'>
                    <span className='font-semibold'>Date:</span>
                  </div>
                  <div className='w-3/4'>
                    <span className='font-semibold'>11/08/2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile