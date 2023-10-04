import React from 'react'
import client from '../../assets/client.png'


function Testimonial() {
return (
<>
    <section className='py-[100px] md:py-[150px] bg-bodyColor'>
        <div className="container">
            <div className="heading text-center mb-10 md:mb-[86px] relative">
                <h2 className='font-Oxanium font-bold text-2xl md:text-[31px] text-commonClr mb-3'>TESTIMONIAL</h2>
                <p className='font-Raleway font-extrabold text-3xl md:text-[40px] text-gray-950'>Our Awesome
                    Clients
                </p>
                <div className='absolute left-[22%] top-[50%] translate-y-[-50%]'>
                    <i className="text-[90px] md:text-[140px] text-yellowClr fa-solid fa-quote-left"></i>
                </div>
            </div>
            <div className='md:flex justify-center'>
                <div className='md:w-8/12'>
                    <div className='px-[15px] py-7 text-center md:text-start md:p-[39px] bg-white rounded-lg'>
                        <h3 className='font-Raleway font-bold text-[25px] text-commonClr mb-[11px]'>Fantastic service!
                        </h3>
                        <p className='font-Raleway font-normal text-base text-gray-800'>I purchased a phone from an
                            e-commerce site, and this courier service provider assisted me in getting it delivered to my
                            home. I received my phone within one day, and I was really satisfied with their service when
                            I received it. They are really quick and dependable. They give me with the option of
                            real-time delivery status, which allows me to track the progress of my goods delivery. I get
                            a lot of questions from call center support and key account managers. They come highly
                            recommended. Confidently say that they are really reliable.</p>
                        <div className='sm:flex sm:justify-between sm:items-center mt-6'>
                            <div>
                                <i className="text-commonClr mr-1 fa-solid fa-star"></i>
                                <i className="text-commonClr mr-1 fa-solid fa-star"></i>
                                <i className="text-commonClr mr-1 fa-solid fa-star"></i>
                                <i className="text-commonClr mr-1 fa-solid fa-star"></i>
                                <i className="text-commonClr fa-solid fa-star"></i>
                            </div>
                            <div className='flex gap-x-4 mt-8 sm:mt-0 justify-center'>
                                <div>
                                    <h4 className='font-Raleway font-bold text-base text-gray-950 text-end'>Yves Tanguy
                                    </h4>
                                    <p className='font-Raleway font-normal text-base text-gray-800 mt-1 text-end'>Chief
                                        Executive, DLF</p>
                                </div>
                                <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
                                    <img className='h-full w-full' src={client} alt="client" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Testimonial