import React, { useState } from 'react'
import { HiColorSwatch, HiMenu } from "react-icons/hi";
const Navbar = () => {


    const [open, setOpen] = useState(false);
    return (

        <div className='w-full'>
            <div className='max-w-[1240px] flex justify-between mx-auto items-center px-5 py-3 relative md:border-b-2  '>
                <div className='flex items-center justify-evenly '>
                    <HiColorSwatch size={20} />
                    <h1 className='text-2xl font-bold hover:cursor-pointer'>LandWind</h1>

                </div>
                <div className='md:flex hidden'>
                    <ul className='flex gap-5 font-medium text-lg hover:cursor-pointer'>
                        <li className='hover:text-blue-500'>Home</li>
                        <li className='hover:text-blue-500'> Company</li>
                        <li className='hover:text-blue-500'>Marketplace</li>
                        <li className='hover:text-blue-500'>Features</li>
                        <li className='hover:text-blue-500'>Team</li>
                        <li className='hover:text-blue-500'>Contact</li>
                    </ul>
                </div>

                <div className='md:hidden '>
                    <HiMenu size={25} onClick={() => setOpen(!open)} />
                    {open ? <div className='absolute left-0 top-16 ease-in-out duration-500 h-[100vh] w-full bg-white mx-5'>
                        <ul className='font-medium text-lg hover:cursor-pointer flex flex-col gap-6 py-3 '>
                            <li className='hover:text-blue-500 border-b-2 '>Home</li>
                            <li className='hover:text-blue-500 border-b-2'> Company</li>
                            <li className='hover:text-blue-500 border-b-2'>Marketplace</li>
                            <li className='hover:text-blue-500 border-b-2'>Features</li>
                            <li className='hover:text-blue-500 border-b-2'>Team</li>
                            <li className='hover:text-blue-500 border-b-2'>Contact</li>
                        </ul>
                    </div>
                        :
                        <div className='absolute top-16 left-[-100%] ease-in-out duration-500 h-[100vh] w-[35vh] mx-5'>
                            <ul className='font-medium text-lg hover:cursor-pointer   flex flex-col gap-6 py-3  '>
                                <li className='hover:text-blue-500'>Home</li>
                                <li className='hover:text-blue-500'> Company</li>
                                <li className='hover:text-blue-500'>Marketplace</li>
                                <li className='hover:text-blue-500'>Features</li>
                                <li className='hover:text-blue-500'>Team</li>
                                <li className='hover:text-blue-500'>Contact</li>
                            </ul>
                        </div>

                    }

                </div>


            </div>

        </div>
    )
}

export default Navbar