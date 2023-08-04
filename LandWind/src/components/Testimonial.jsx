import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { RxAvatar } from 'react-icons/rx'
const Testimonial = () => {
    return (
        <div className='w-full py-24 bg-gray-100'>
            <div className='max-w-[1240px] mx-auto mt-10 px-5 '>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <div>

                        <FaQuoteLeft size={40} className='fill-gray-400' />
                    </div>
                    <p className=' md:w-[60%] font-semibold text-xl md:text-2xl text-gray-500'>"Landwind is just awesome.It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                    <div className='flex items-center gap-3'>
                        <RxAvatar size={30} />
                        <p className='text-gray-600 font-medium'>Micheal Gough,<span className='text-gray-400 font-light'> CEO at Atlassia</span></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial