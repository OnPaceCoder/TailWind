import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { HiColorSwatch } from 'react-icons/hi'

const Footer = () => {
    return (
        <div>
            <div className='w-full py-6 bg-gray'>
                <div className='max-w-[1240px] mx-auto mt-10 px-5 '>
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <div className='flex items-center gap-2'>
                            <HiColorSwatch size={30} />

                            <p className=' md:w-[60%] font-bold text-xl md:text-2xl text-gray-900'>LandWind</p>
                        </div>
                        <p className='text-sm font-light text-gray-400'>© 2021-2023 Landwind™. All Rights Reserved. Built with Tailwind CSS by <span className='text-[#8B8ABB]'>Priyank Vasoya</span>.</p>
                        <FaFacebook />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer