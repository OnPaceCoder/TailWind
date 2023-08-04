import React from 'react'

const Hero = () => {
    return (
        <div className='w-full pb-10 sm:pb-2'>

            <div className='max-w-[1240px] mx-auto mt-5 px-5'>
                {/* Section 1 */}
                <div className='grid md:grid-cols-2 gap-16'>
                    {/* left */}
                    <div className='flex flex-col justify-center gap-10'>
                        <div>
                            <p className='text-5xl font-extrabold'>Building digital products & brands.</p>
                        </div>
                        <div>
                            <p className='text-xl text-gray-400 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic maxime ex, eius ullam, magnam inventore officiis, fugit voluptates itaque a! Porro, suscipit? Repellat, voluptatum?</p>
                        </div>
                        <div className='flex gap-5 '>
                            <button className='button px-5 py-4 bg-gray-100 hover:bg-gray-400 hover:text-white rounded-lg'>View on Github</button>
                            <button className='button px-5 py-4 bg-gray-100 hover:bg-gray-400 hover:text-white  rounded-lg'>Get Figma File</button>
                        </div>
                    </div>
                    {/* right */}
                    <div className='flex justify-center'>
                        <img src="/assets/Hero.svg" alt="" className='h-auto' />
                    </div>
                </div>
                {/* Section 2 */}

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 p-5 items-center ' >
                    <img className='h-9 hover:cursor-pointer   hover:scale-110 ease-in-out duration-300' src="/assets/Airbnb.svg" alt="" />
                    <img className='h-9 hover:cursor-pointer hover:scale-110 ease-in-out duration-300' src='/assets/Google.svg' />
                    <img className='h-9 hover:cursor-pointer hover:scale-110 ease-in-out duration-300' src='/assets/Microsoft.svg' />
                    <img className='h-9 hover:cursor-pointer hover:scale-110 ease-in-out duration-300' src='/assets/Spotify.svg' />
                    <img className='h-9 hover:cursor-pointer hover:scale-110 ease-in-out duration-300' src='/assets/Mailchimp.svg' />
                    <img className='h-9 hover:cursor-pointer hover:scale-110 ease-in-out duration-300' src='/assets/Mashable.svg' />


                </div>

            </div>
        </div>
    )
}

export default Hero