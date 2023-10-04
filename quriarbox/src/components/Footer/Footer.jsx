import React from 'react'
import logo from '../../assets/logo.png'

function Footer() {
return (
<>
    <section className='py-[50px] bg-gray-900'>
        <div className="container">
            <div className='sm:flex gap-x-2 text-center sm:text-start'>
                <div className='sm:w-3/12 md:w-6/12'>
                    <div>
                        <div className='md:w-1/3'>
                            <div className='flex justify-center sm:block'>
                                <img src={logo} alt="logo" />
                            </div>
                            <p className='font-Raleway font-semibold text-base text-gray-500 mt-3'>The most trusted
                                Courier
                                company in your area.</p>
                        </div>
                    </div>
                </div>
                <div className='sm:w-3/12 md:w-2/12 mt-10 sm:mt-0'>
                    <h3 className='font-Oxanium font-bold text-white text-xl mb-3.5 sm:mb-[22px]'>Other links</h3>
                    <ul>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500 mb-2' href="#">Blogs</a>
                        </li>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500 mb-2' href="#">Movers
                                website</a></li>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500' href="#">Traffic
                                Update</a></li>
                    </ul>
                </div>
                <div className='sm:w-3/12 md:w-2/12 mt-10 sm:mt-0'>
                    <h3 className='font-Oxanium font-bold text-white text-xl mb-3.5 sm:mb-[22px]'>Services</h3>
                    <ul>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500 mb-2' href="#">Corporate
                                goods</a></li>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500 mb-2' href="#">Artworks</a>
                        </li>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500' href="#">Documents</a>
                        </li>
                    </ul>
                </div>
                <div className='sm:w-3/12 md:w-2/12 mt-10 sm:mt-0'>
                    <h3 className='font-Oxanium font-bold text-white text-xl mb-3.5 sm:mb-[22px]'>Customer Care</h3>
                    <ul>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500 mb-2' href="#">About Us</a>
                        </li>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500 mb-2' href="#">Contact
                                US</a></li>
                        <li><a className='font-Raleway font-semibold text-base text-gray-500' href="#">Get Update</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Footer