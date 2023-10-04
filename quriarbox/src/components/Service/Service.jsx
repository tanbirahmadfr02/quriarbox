import React from 'react'

function Service() {
return (
<>
    <section className='bg-bodyColor'>
        <div className="container">
            <div className="heading text-center mb-10 lg:mb-[86px]">
                <h2 className='font-Oxanium font-bold text-2xl md:text-[31px] text-commonClr mb-3'>SERVICES</h2>
                <p className='font-Raleway font-extrabold text-3xl lg:text-[40px] text-[#Our services for you]'>Our
                    services for you
                </p>
            </div>
            <div className="service_body md:flex md:gap-x-6">
                <div
                    className="card lg:px-[60px] md:pt-16 md:pb-12 p-[30px] bg-white md:w-1/3 rounded-2xl mb-7 md:mb-0">
                    <div className='flex justify-center relative mb-[40px]'>
                        <div className="circle h-[68px] w-[68px] bg-yellowClr rounded-full"></div>
                        <div className='absolute left-[50%] translate-x-[-50%] bottom-[-18px]'><svg
                                xmlns="http://www.w3.org/2000/svg" width="55" height="49" viewBox="0 0 55 49"
                                fill="none">
                                <path
                                    d="M49.5 10.8889H38.5V5.44444L33 0H22L16.5 5.44444V10.8889H5.5C2.475 10.8889 0 13.3389 0 16.3333V29.9444C0 31.9861 1.1 33.7011 2.75 34.6539V43.5556C2.75 46.5772 5.1975 49 8.25 49H46.75C49.8025 49 52.25 46.5772 52.25 43.5556V34.6267C53.8725 33.6739 55 31.9317 55 29.9444V16.3333C55 13.3389 52.525 10.8889 49.5 10.8889ZM22 5.44444H33V10.8889H22V5.44444ZM5.5 16.3333H49.5V29.9444H35.75V21.7778H19.25V29.9444H5.5V16.3333ZM30.25 32.6667H24.75V27.2222H30.25V32.6667ZM46.75 43.5556H8.25V35.3889H19.25V38.1111H35.75V35.3889H46.75V43.5556Z"
                                    fill="#F95C19" />
                            </svg></div>
                    </div>
                    <div className="details">
                        <h3
                            className='font-Raleway font-extrabold text-[#464558] text-xl md:text-[25px] text-center mb-8'>
                            Business
                            Services</h3>
                        <p className='font-Raleway font-normal text-base text-gray-600 mb-10'>We give you complete
                            reliable delivery for your company. We will take full responsibility of the deliveries.</p>
                        <ul className='pl-5'>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 mb-3 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Corporate goods</li>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 mb-3 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Shipment</li>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Accesories</li>
                        </ul>
                        <div className='button mt-[60px] flex justify-center'>
                            <a className='font-Raleway font-bold text-commonClr text-base lg:text-xl py-3 w-full text-center border border-commonClr rounded-md hover:bg-commonClr hover:text-white duration-500'
                                href="#">Learn more</a>
                        </div>
                    </div>
                </div>
                <div
                    className="card lg:px-[60px] md:pt-16 md:pb-12 p-[30px] bg-white md:w-1/3 rounded-2xl mb-7 md:mb-0">
                    <div className='flex justify-center relative mb-[40px]'>
                        <div className="circle h-[68px] w-[68px] bg-yellowClr rounded-full"></div>
                        <div className='absolute left-[50%] translate-x-[-50%] bottom-[-18px]'><svg
                                xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55"
                                fill="none">
                                <path
                                    d="M52.9375 11.0069V2.2C52.9375 0.983125 51.9544 0 50.7375 0H4.26254C3.04567 0 2.06254 0.983125 2.06254 2.2V11.0069C0.914417 11.0756 4.2597e-05 12.0312 4.2597e-05 13.2V22.2544C-0.00436019 23.9184 0.332582 25.5657 0.990042 27.0944C1.28567 27.7956 1.65004 28.4556 2.06254 29.0813V52.8C2.06254 54.01 3.04567 55 4.26254 55H50.7375C51.9544 55 52.9375 54.0169 52.9375 52.8V29.0813C53.3565 28.454 53.7156 27.7888 54.01 27.0944C54.6631 25.5613 55 23.9319 55 22.2544V13.2C55 12.0312 54.0856 11.0756 52.9375 11.0069ZM7.01254 4.95H47.9875V11H7.01254V4.95ZM31.9 50.0569H23.1V42.9H31.9V50.0569ZM47.9875 50.0569H36.3V40.7C36.3 39.4831 35.3169 38.5 34.1 38.5H20.9C19.6832 38.5 18.7 39.4831 18.7 40.7V50.0569H7.01254V33.4056C7.21191 33.5019 7.41816 33.5981 7.63129 33.6806C9.16441 34.3269 10.7938 34.65 12.4713 34.65C14.1488 34.65 15.7713 34.3269 17.3113 33.6806C18.26 33.2819 19.1538 32.7731 19.9719 32.1613C19.9857 32.1544 19.9994 32.1544 20.0132 32.1613C20.8338 32.7757 21.7275 33.2861 22.6738 33.6806C24.2069 34.3269 25.8363 34.65 27.5138 34.65C29.1913 34.65 30.8138 34.3269 32.3538 33.6806C33.3025 33.2819 34.1963 32.7731 35.0144 32.1613C35.0281 32.1544 35.0419 32.1544 35.0556 32.1613C35.8763 32.7757 36.77 33.2861 37.7163 33.6806C39.2494 34.3269 40.8788 34.65 42.5563 34.65C44.2338 34.65 45.8563 34.3269 47.3963 33.6806C47.6025 33.5913 47.8088 33.5019 48.015 33.4056V50.0569H47.9875ZM50.05 22.2544C50.05 26.3656 46.6813 29.7 42.5356 29.7C39.7306 29.7 37.2831 28.1806 35.9906 25.9256C35.7913 25.5819 35.4338 25.3687 35.035 25.3687H34.9938C34.6019 25.3687 34.2375 25.5819 34.0381 25.9256C33.3786 27.0759 32.4262 28.0311 31.2778 28.694C30.1294 29.357 28.826 29.7041 27.5 29.7C24.7019 29.7 22.2613 28.1875 20.9688 25.9394C20.7625 25.5887 20.3913 25.3687 19.9857 25.3687C19.58 25.3687 19.2019 25.5887 19.0025 25.9394C18.3391 27.0853 17.3855 28.0362 16.2377 28.6964C15.0899 29.3565 13.7885 29.7027 12.4644 29.7C8.31879 29.7 4.95004 26.3656 4.95004 22.2544V15.9844C4.95004 15.9637 4.96379 15.95 4.98441 15.95H50.0156C50.0363 15.95 50.05 15.9637 50.05 15.9844V22.2544Z"
                                    fill="#F95C19" />
                            </svg></div>
                    </div>
                    <div className="details">
                        <h3
                            className='font-Raleway font-extrabold text-[#464558] text-xl md:text-[25px] text-center mb-8'>
                            Statewide Services</h3>
                        <p className='font-Raleway font-normal text-base text-gray-600 mb-10'>Offering home delivery
                            around the city, where your products will be at your doorstep within 48-72 hours.</p>
                        <ul className='pl-5'>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 mb-3 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Personal items</li>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 mb-3 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Percels</li>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Documents</li>
                        </ul>
                        <div className='button mt-[60px] flex justify-center'>
                            <a className='font-Raleway font-bold text-commonClr text-base lg:text-xl py-3 w-full text-center border border-commonClr rounded-md hover:bg-commonClr hover:text-white duration-500'
                                href="#">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card lg:px-[60px] md:pt-16 md:pb-12 p-[30px] bg-white md:w-1/3 rounded-2xl">
                    <div className='flex justify-center relative mb-[40px]'>
                        <div className="circle h-[68px] w-[68px] bg-yellowClr rounded-full"></div>
                        <div className='absolute left-[50%] translate-x-[-50%] bottom-[-18px]'><svg
                                xmlns="http://www.w3.org/2000/svg" width="44" height="55" viewBox="0 0 44 55"
                                fill="none">
                                <path
                                    d="M33 8.25V5.5C33 4.04131 32.4205 2.64236 31.3891 1.61091C30.3576 0.579462 28.9587 0 27.5 0H16.5C15.0413 0 13.6424 0.579462 12.6109 1.61091C11.5795 2.64236 11 4.04131 11 5.5V8.25C8.08262 8.25 5.28473 9.40893 3.22182 11.4718C1.15892 13.5347 0 16.3326 0 19.25V49.5C0 50.9587 0.579462 52.3576 1.61091 53.3891C2.64236 54.4205 4.04131 55 5.5 55H38.5C39.9587 55 41.3576 54.4205 42.3891 53.3891C43.4205 52.3576 44 50.9587 44 49.5V19.25C44 16.3326 42.8411 13.5347 40.7782 11.4718C38.7153 9.40893 35.9174 8.25 33 8.25ZM16.5 5.5H27.5V8.25H16.5V5.5ZM22 19.25L27.5 24.75L22 30.25L16.5 24.75L22 19.25ZM38.5 49.5H5.5V38.5H11V44H13.75V38.5H38.5V49.5ZM38.5 35.75H5.5V19.25C5.5 17.7913 6.07946 16.3924 7.11091 15.3609C8.14236 14.3295 9.54131 13.75 11 13.75H33C34.4587 13.75 35.8576 14.3295 36.8891 15.3609C37.9205 16.3924 38.5 17.7913 38.5 19.25V35.75Z"
                                    fill="#F95C19" />
                            </svg></div>
                    </div>
                    <div className="details">
                        <h3
                            className='font-Raleway font-extrabold text-[#464558] text-xl md:text-[25px] text-center mb-8'>
                            Personal
                            Services</h3>
                        <p className='font-Raleway font-normal text-base text-gray-600 mb-10'>You can trust us to safely
                            deliver your most sensitive documents to the specific area in a short time.</p>
                        <ul className='pl-5'>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 mb-3 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Gifts</li>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 mb-3 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Package</li>
                            <li
                                className='font-Raleway font-medium text-base text-gray-600 relative after:absolute after:h-2 after:w-2 after:rounded-full after:bg-commonClr after:left-[-20px] after:top-[50%] after:translate-y-[-50%]'>
                                Documents</li>
                        </ul>
                        <div className='button mt-[60px] flex justify-center'>
                            <a className='font-Raleway font-bold text-commonClr text-base lg:text-xl py-3 w-full text-center border border-commonClr rounded-md hover:bg-commonClr hover:text-white duration-500'
                                href="#">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Service