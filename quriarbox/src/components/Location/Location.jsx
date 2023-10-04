import React from 'react'

function Location() {
return (
<>
    <section className='pt-[60px] pb-[120px] bg-bodyColor'>
        <div className="container">
            <div className="heading text-center mb-10 md:mb-[86px]">
                <h2 className='font-Oxanium font-bold text-2xl md:text-[31px] text-commonClr mb-3'>FIND US</h2>
                <p className='font-Raleway font-extrabold text-[30px] md:text-[40px] text-gray-950'>Access us easily
                </p>
            </div>
            <div className='md:flex md:gap-x-6'>
                <div className='md:w-7/12'>
                    <iframe className='w-full h-[200px] md:h-[428px]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.43083018947!2d90.75320713244511!3d23.03817176306515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754e864d8643c25%3A0x255bf9b491657257!2sRaipur!5e0!3m2!1sen!2sbd!4v1695613867462!5m2!1sen!2sbd"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="md:w-5/12 py-10 px-7 md:py-[79px] md:pl-20 md:pr-[130px] bg-[#FEFCFA] mt-10 md:mt-0">
                    <h3 className='font-Raleway font-bold text-xl text-gray-800 mb-[25px]'>Contact with us</h3>
                    <div className='mb-[30px]'>
                        <div className='flex gap-x-[13px] items-center mb-[14px]'>
                            <div className='text-[27px] text-[#FFAF0F]'>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <p className='font-Raleway font-medium text-base text-gray-700'>2277 Lorem Ave, San Diego,
                                CA 22553</p>
                        </div>
                        <div className='flex gap-x-[13px] items-center mb-[14px]'>
                            <div className='text-[27px] text-[#FFAF0F]'>
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <p className='font-Raleway font-medium text-base text-gray-700'>Monday - Friday: 10 am -
                                10pm
                                Sunday: 11 am - 9pm3</p>
                        </div>
                        <div className='flex gap-x-[13px] items-center'>
                            <div className='text-[27px] text-[#FFAF0F]'>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <p className='font-Raleway font-medium text-base text-gray-700'>info@quriarbox.com</p>
                        </div>
                    </div>
                    <div className='social-icon flex gap-x-6'>
                        <a className='w-7 h-7 rounded-md flex justify-center items-center bg-gray-400 text-white hover:bg-commonClr duration-500'
                            href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a className='w-7 h-7 rounded-md flex justify-center items-center bg-gray-400 text-white hover:bg-commonClr duration-500'
                            href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a className='w-7 h-7 rounded-md flex justify-center items-center bg-gray-400 text-white hover:bg-commonClr duration-500'
                            href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="button mt-[30px] text-center">
                <a className='font-Oxanium font-bold text-base sm:text-xl text-white px-4 sm:px-20 py-3 sm:py-6 bg-commonClr rounded-md hover:bg-transparent hover:text-commonClr border border-commonClr duration-500'
                    href="#"><i className="mr-2 fa-solid fa-phone"></i> Call us to delivery 123-456789</a>
            </div>
        </div>
    </section>
</>
)
}

export default Location