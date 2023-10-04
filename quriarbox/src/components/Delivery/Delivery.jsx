import React from 'react'

function Delivery() {
return (
<>
    <section className='bg-bodyColor'>
        <div className="container">
            <div className='bg-videoBG bg-no-repeat bg-center bg-cover rounded-xl'>
                <div className='bg-rgbBlack py-10 lg:pt-[126px] lg:pb-[168px] px-8 lg:px-[355px] rounded-xl'>
                    <div className="content">
                        <div
                            className='h-[60px] w-[60px] lg:h-20  lg:w-20 rounded-full flex justify-center items-center bg-commonClr mx-auto mb-6 md:mb-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="115" height="116" viewBox="0 0 115 116"
                                fill="none">
                                <ellipse cx="58" cy="58.5044" rx="43" ry="43.3739" fill="#F95C19" />
                                <path
                                    d="M74 57.0419C75.3333 57.8117 75.3333 59.7362 74 60.506L50 74.3624C48.6667 75.1322 47 74.1699 47 72.6303V44.9175C47 43.3779 48.6667 42.4157 50 43.1855L74 57.0419Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <h2
                            className='font-Oxanium font-bold text-2xl md:text-[31px] text-commonClr text-center mb-[28px]'>
                            FASTEST
                            DELIVERY</h2>
                        <p className='font-Raleway font-medium text-xl md:text-[25px] text-white text-center'> You can
                            get your
                            valuable item in the fastest period of
                            time with safety. Because your emergency
                            is our first priority.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Delivery