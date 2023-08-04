import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'

const Tools = () => {
    return (
        <div className='w-full pb-10 sm:pb-2'>
            <div className='max-w-[1240px]  mx-auto mt-5 px-5'>
                <div className='grid md:grid-cols-2 gap-16 py-5 ' >


                    {/*Left section  */}
                    <div className='flex flex-col justify-around'>
                        {/* Top Section */}
                        <div className='flex flex-col gap-4'>
                            <p className='text-3xl md:text-4xl font-bold'>Work with tools you already use</p>
                            <p className='text-gray-400 font-light text-md md;text-lg '>Deliver great service experience fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                            <hr />
                        </div>
                        {/* Middle Section */}
                        <div className=' font-light text-gray-500 flex flex-col gap-4'>
                            <div className='flex items-center gap-2'><HiCheckCircle className='fill-[#8B8ABB]' /> <p>Continous integration and deployment</p></div>
                            <div className='flex items-center gap-2'><HiCheckCircle className='fill-[#8B8ABB]' /> <p>Development workflow</p></div>
                            <div className='flex items-center gap-2'><HiCheckCircle className='fill-[#8B8ABB]' /> <p>Knowledge management</p></div>
                        </div>
                        {/* Lower Section */}
                        <div>
                            <p className='text-gray-400 font-light text-md md;text-lg '>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className='flex justify-center py-5'>
                        <img src="/assets/Data.svg" alt="" className='h-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools