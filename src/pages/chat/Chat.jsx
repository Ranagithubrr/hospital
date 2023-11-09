import React from 'react'

const Chat = () => {
    return (
        <div className='p-4'>
            <div className="flex">
                <div className="w-1/5 border h-auto px-2">
                    <div className='bg-gray-200 px-3 py-4 rounded mt-2 cursor-pointer sticky top-0'>
                        <span className='font-semibold'>MeDoc Discussion</span>
                    </div>
                </div>
                <div className="w-3/5 border h-screen px-2 relative">
                    <div className='bg-gray-200 px-3 py-4 rounded mt-2 cursor-pointer text-center  sticky top-0'>
                        <span className='font-semibold'>Chat</span>
                    </div>
                    <div className='border px-2'>
                        <div className='pr-20'>
                            <div className="bg-blue-300 inline-block px-3 py-2 rounded-sm my-2">
                                <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet. dkjfkd</p>
                            </div>
                        </div>
                        <div className='ml-20 float-right'>
                            <div className="bg-blue-300 inline-block px-3 py-2 rounded-sm my-2">
                                <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet. dkjfkd</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex py-2 absolute bottom-28 w-full pr-3'>
                        <div className='w-5/6'>
                            <input type="text" placeholder='type your message here . . .' className=' border outline-none w-full p-2' />
                        </div>
                        <div className='w-1/6'>

                            <button className='bg-blue-700 h-full text-gray-200 w-full'>Send</button>
                        </div>
                    </div>
                </div>
                <div className="w-1/5">3</div>
            </div>
        </div>
    )
}

export default Chat