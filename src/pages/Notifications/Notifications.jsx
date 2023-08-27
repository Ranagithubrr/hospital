import React from 'react'
import Notification from './Notification/Notification'

const Notifications = () => {
  return (
    <div className='w-1/2 m-auto'>
      <h4 className='font-semibold text-xl m-3 ml-0'>Notifications</h4>
      <Notification />
      <Notification />
      <Notification />
    </div>
  )
}

export default Notifications