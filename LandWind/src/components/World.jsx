import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'
const World = () => {
    return (
        <div className='w-full pb-2 sm:pb-10 '>
            <div className='max-w-[1240px]  mx-auto mt-5 px-5'>
                <div className='grid md:grid-cols-2 gap-16 py-5 ' >

                    {/* Left Section */}
                    <div className='flex justify-center py-5'>
                        <img src="/assets/World.svg" alt="" className='h-auto' />
                    </div>
                    {/*Right section  */}
                    <div className='flex flex-col justify-around'>
                        {/* Top Section */}
                        <div className='flex flex-col gap-4'>
                            <p className='text-3xl md:text-4xl font-bold'>We invest in the world's potential</p>
                            <p className='text-gray-400 font-light text-md md;text-lg '>Deliver great service experience fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                            <hr />
                        </div>
                        {/* Middle Section */}
                        <div className=' font-light text-gray-500 flex flex-col gap-4'>
                            <div className='flex items-center gap-2'><HiCheckCircle className='fill-[#8B8ABB]' /> <p>Dynamic reports and dashboards</p></div>
                            <div className='flex items-center gap-2'><HiCheckCircle className='fill-[#8B8ABB]' /> <p>Development workflow</p></div>
                            <div className='flex items-center gap-2'><HiCheckCircle className='fill-[#8B8ABB]' /> <p>Templates for everyone</p></div>
                            <div className='flex items-center gap-2'><HiCheckCircle className='fill-[#8B8ABB]' /> <p>Knowledge management</p></div>

                        </div>
                        {/* Lower Section */}
                        <div>
                            <p className='text-gray-400 font-light text-md md;text-lg '>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default World