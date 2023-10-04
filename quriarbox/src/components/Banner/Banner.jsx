import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
return (
<>
    <section className='bg-bodyColor lg:py-[170px] py-[100px]'>
        <div className="container">
            <div className='sm:flex'>
                <div className="sm:w-5/12 text-center sm:text-start">
                    <div className="content">
                        <h1
                            className='font-Raleway font-normal text-[30px] leading-10 lg:text-5xl text-[#261134] lg:leading-[70px] mb-4'>
                            A trusted
                            provider of <span className='font-extrabold'>courier services.</span></h1>
                        <p className='font-Raleway font-normal lg:text-2xl text-xl text-[#4D4D4D]'>We deliver your
                            products safely
                            to your home in a reasonable time.</p>
                        <div className='button mt-[41px]'>
                            <a className='font-Oxanium font-bold text-white capitalize py-3 px-5 bg-commonClr rounded-md inline-block hover:bg-transparent hover:text-commonClr duration-500 border border-commonClr'
                                href="#">Get started <i className="ml-1 fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className='sm:w-7/12 mt-10 md:mt-0'>
                    <div>
                        <img className='w-full' src={banner} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Banner