import React from 'react'

import { FaArrowRightLong } from 'react-icons/fa6'
import { IoIosSwitch } from 'react-icons/io'
const Invest = () => {
    return (
        <div className='w-full pb-10 sm:pb-2'>
            <div className='max-w-[1240px]  mx-auto mt-5 px-5'>
                <div className='grid md:grid-cols-2 gap-16 py-5 ' >


                    {/*Left section  */}
                    <div className='flex flex-col justify-around'>
                        {/* Top Section */}
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#8B8ABB] font-bold'>Trusted Worldwide</p>
                            <p className='text-2xl md:text-3xl font-extrabold'>Trusted by over 600 million users and 10,000 teams</p>
                            <p className='text-gray-400 font-light text-md md;text-lg '>Our rigorous security and compoliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
                            <hr />
                        </div>
                        {/* Middle Section */}
                        <div className=' font-light text-gray-500 flex flex-col gap-4 my-4'>
                            <div className='flex items-center gap-3'>
                                <p className='text-[#8B8ABB] font-medium hover:cursor-pointer'>Explore Legality Guide </p><FaArrowRightLong size={18} className='hover:scale-x-125 duration-300 ease-in-out hover:cursor-pointer' fill='#8B8ABB' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='text-[#8B8ABB] font-medium hover:cursor-pointer'>Visit the Trust Center</p><FaArrowRightLong size={18} className='hover:scale-x-125 duration-300 ease-in-out hover:cursor-pointer' fill='#8B8ABB' />
                            </div>
                        </div>
                        {/* Lower Section */}
                        <div>
                            {/* <p className='text-gray-400 font-light text-md md;text-lg '>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p> */}
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className='flex  py-5 '>
                        {/* <img src="/assets/Data.svg" alt="" className='h-auto' />
                         */}
                        <div>
                            {/* Top */}
                            <div className='sm:flex sm:gap-5'>
                                <div className='p-4 flex flex-col gap-3 shadow-lg rounded-md'>
                                    <IoIosSwitch size={35} fill='#8B8ABB' />
                                    <p className='text-xl md:text-2xl font-bold'>99.99% uptime</p>
                                    <p className='text-lg md:text-xl font-light text-gray-500' >For Landwind, with zero maintannce</p>
                                </div>
                                <div className='p-4 flex flex-col gap-3 shadow-lg rounded-md'>
                                    <IoIosSwitch size={35} fill='#8B8ABB' />
                                    <p className='text-xl md:text-2xl font-bold'>99.99% uptime</p>
                                    <p className='text-lg md:text-xl font-light text-gray-500' >For Landwind, with zero maintannce</p>
                                </div>
                            </div>
                            {/* Bottom */}
                            <div className='sm:flex sm:gap-5'>
                                <div className='p-4 flex flex-col gap-3 shadow-lg rounded-md'>
                                    <IoIosSwitch size={35} fill='#8B8ABB' />
                                    <p className='text-xl md:text-2xl font-bold'>99.99% uptime</p>
                                    <p className='text-lg md:text-xl font-light text-gray-500' >For Landwind, with zero maintannce</p>
                                </div>
                                <div className='p-4 flex flex-col gap-3 shadow-lg rounded-md'>
                                    <IoIosSwitch size={35} fill='#8B8ABB' />
                                    <p className='text-xl md:text-2xl font-bold'>99.99% uptime</p>
                                    <p className='text-lg md:text-xl font-light text-gray-500' >For Landwind, with zero maintannce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invest