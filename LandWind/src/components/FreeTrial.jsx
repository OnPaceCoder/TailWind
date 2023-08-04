import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'
import { RxAvatar } from 'react-icons/rx'

const FreeTrial = () => {
    return (
        <div className='w-full py-12 bg-gray-50'>
            <div className='max-w-[1240px] mx-auto mt-10 px-5 '>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>

                    <p className=' md:w-[60%] font-extrabold text-xl md:text-3xl text-gray-900'>Start your free trail now</p>
                    <p className='text-xl font-light text-gray-400'>Try LandWind Platform for 30 days. No credit card required</p>
                    <button className='px-4 py-2 bg-[#8B8ABB] hover:cursor-pointer hover:scale-110 ease-in-out duration-300 rounded-md text-white font-medium'>Free trial for 30 days</button>
                </div>
            </div>
        </div>
    )
}

export default FreeTrial