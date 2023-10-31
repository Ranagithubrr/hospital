import React from 'react'

const Notification = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-800 shadow p-4 rounded my-2'>
            <h4 className='font-semibold dark:text-gray-200'>Notification title</h4>
            <div className='flex justify-between'>
                <p className='text-sm text-gray-700 dark:text-gray-300 text-justify pr-4'>Notification descriptions! </p>
                <span className='text-sm font-semibold dark:text-gray-300'>23/08/2023 at 11:30 AM</span>
            </div>
        </div>
    )
}

export default Notification