import React from 'react'
import {AiFillEdit} from 'react-icons/ai'

const Hospitalsurvey = () => {
  return (
    <div className='m-5 p-3 border'>
      <h4>Hospital Survey</h4>
      <div className='flex gap-4 my-2'>
        <div className='w-1/2 border p-2'>
          <h4 className='font-semibold'>Staff</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Doctors</span>
              <input type="number" disabled placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Receptionists</span>
              <input type="number" placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Nurses (Interns)</span>
              <input type="number" placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Chief Surgeon</span>
              <input type="number" placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Surgical Nurses</span>
              <input type="number" placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Nurses</span>
              <input type="number" placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Pharmacy Manager</span>
              <input type="number" placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Security Guard</span>
              <input type="number" placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div>
              <button className='bg-green-600 flex items-center text-gray-200 px-4 py-2 rounded-sm'><AiFillEdit/>Update</button>
            </div>
          </div>
        </div>
        <div className='w-1/2 border p-2'>
          <h4>Others</h4>
          <div className="">
            <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Total Ambulance</span>
            <input type="number" placeholder='3' className='border outline-none p-2 w-full' />
          </div>
          <div className='my-2'>
            <button className='bg-green-600 flex items-center text-gray-200 px-4 py-2 rounded-sm'><AiFillEdit /> Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hospitalsurvey