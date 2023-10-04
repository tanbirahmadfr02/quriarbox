import React from 'react'

function Subscription() {
return (
<>
    <section className='py-[50px] md:py-[90px] bg-gray-950'>
        <div className="container">
            <div className='sm:flex md:justify-between text-center md:text-start'>
                <div className='sm:w-5/12'>
                    <h2 className='font-Raleway font-extrabold text-[30px] md:text-[39px] text-white'>Get an update
                        every week</h2>
                    <p className='font-Raleway font-normal text-base text-gray-300 mt-2'>We ensure that your product is
                        delivered in the safest possible manner, at the correct location, at the right time.</p>
                </div>
                <div className='sm:w-6/12 mt-10 sm:mt-0 md:mt-sm'>
                    <h4 className='font-Oxanium font-bold text-[18px] text-commonClr mb-[13px]'>SUBSCRIBE TO NEWSLETTER
                    </h4>
                    <form className='md:flex md:gap-x-4' action="#">
                        <input
                            className='font-Raleway text-base text-gray-500 bg-transparent border border-gray-500 py-[10px] px-[18px] rounded-md'
                            placeholder='Enter your mail' type="email" />
                        <div className='button mt-8 md:mt-0'>
                            <button
                                className='font-Oxanium font-bold text-white capitalize py-3 px-5 bg-commonClr rounded-md inline-block hover:bg-transparent hover:text-commonClr duration-500 border border-commonClr'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Subscription