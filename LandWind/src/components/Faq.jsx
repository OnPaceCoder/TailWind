import React from 'react'

const Faq = () => {
    return (

        <div className='w-full py-24'>
            <div className="max-w-[1240px] mx-auto px-5"
            >

                <h1 className='text-center text-4xl font-bold my-10' >Frequently Asked Questions</h1>

                <div class="space-y-4">
                    <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                        >
                            <h2 class="font-medium">
                                Can I use Landwind in open source project?
                            </h2>

                            <svg
                                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p class="mt-4 px-4 leading-relaxed text-gray-500">
                            Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.

                            Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </details>

                    <details class="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                        >
                            <h2 class="font-medium">
                                Is there a Figma file available?
                            </h2>

                            <svg
                                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p class="mt-4 px-4 leading-relaxed text-gray-500">
                            Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.

                            Check out the Figma design system based on the utility classes from Tailwind CSS and components from Landwind.
                        </p>
                    </details>



                    <details class="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                        >
                            <h2 class="font-medium">
                                What are the differences between Landwind and Tailwind UI?
                            </h2>

                            <svg
                                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p class="mt-4 px-4 leading-relaxed text-gray-500">
                            The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.

                            However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                        </p>
                    </details>

                </div>
            </div>
        </div>
    )
}

export default Faq