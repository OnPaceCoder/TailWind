import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { HiColorSwatch } from 'react-icons/hi'

const FooterLinks = () => {
    return (
        <div className='w-full pt-4 pb-20 bg-gray'>
            <div className='max-w-[1240px] mx-auto mt-10  '>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-10 px-5'>

                    <div className='flex flex-col gap-5'>
                        <p className='text-md font-medium'>COMPANY</p>
                        <span className='text-gray-500 font-sm font-light'>About</span>
                        <span className='text-gray-500 font-sm font-light'>Careers</span>
                        <span className='text-gray-500 font-sm font-light'>Brand Center</span>
                        <span className='text-gray-500 font-sm font-light'>Blog</span>
                    </div>
                    <div className='flex flex-col gap-5'><p className='text-md font-medium'>HELP CENTER</p>
                        <span className='text-gray-500 font-sm font-light'>Discord</span>
                        <span className='text-gray-500 font-sm font-light'>Twitter</span>
                        <span className='text-gray-500 font-sm font-light'>Facebook</span>
                        <span className='text-gray-500 font-sm font-light'>Contact Us</span></div>
                    <div className='flex flex-col gap-5'><p className='text-md font-medium'>LEGAL</p>
                        <span className='text-gray-500 font-sm font-light'>Privacy Policy</span>
                        <span className='text-gray-500 font-sm font-light'>Licensing</span>
                        <span className='text-gray-500 font-sm font-light'>Terms</span>
                        <span className='text-gray-500 font-sm font-light'>Site Map</span></div>
                    <div className='flex flex-col gap-5'><p className='text-md font-medium'>COMPANY</p>
                        <span className='text-gray-500 font-sm font-light'>About</span>
                        <span className='text-gray-500 font-sm font-light'>Careers</span>
                        <span className='text-gray-500 font-sm font-light'>Brand Center</span>
                        <span className='text-gray-500 font-sm font-light'>Blog</span></div>
                    <div className='flex flex-col gap-5'><p>DOWNLOAD</p>
                        <span className='text-gray-500 font-sm font-light'>iOS</span>
                        <span className='text-gray-500 font-sm font-light'>Windows</span>
                        <span className='text-gray-500 font-sm font-light'>Android</span>
                        <span className='text-gray-500 font-sm font-light'>MacOS</span></div>
                </div>
                <hr className='h-2 m-10' />

                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <div className='flex items-center gap-2'>
                        <HiColorSwatch size={30} />

                        <p className=' md:w-[60%] font-bold text-xl md:text-2xl text-gray-900'>LandWind</p>
                    </div>
                    <p className='text-sm font-light text-gray-400'>© 2021-2023 Landwind™. All Rights Reserved. Built with Tailwind CSS by <span className='text-[#8B8ABB]'>Priyank Vasoya</span>.</p>
                    <div className='flex gap-8'>

                        <FaFacebook size={20} fill='gray' />
                        <FaInstagram size={20} fill='gray' />
                        <FaTwitter size={20} fill='gray' />
                        <FaGithub size={20} fill='gray' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterLinks