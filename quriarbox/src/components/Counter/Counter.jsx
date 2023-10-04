import React from 'react'
import counter1 from '../../assets/counter1.png'
import counter2 from '../../assets/counter2.png'
import counter3 from '../../assets/counter3.png'
import counter4 from '../../assets/counter4.png'
import counter5 from '../../assets/counter5.png'

function Counter() {
return (
<>
    <section className='py-[100px] md:py-[165px] bg-bodyColor'>
        <div className="container">
            <div className='flex justify-center flex-wrap sm:justify-between sm-gap-x-0'>
                <div className="item text-center font-Raleway">
                    <div className='flex justify-center'>
                        <img src={counter1} alt="icon" />
                    </div>
                    <h3 className='font-extrabold text-3xl md:text-[39px] text-commonClr'>26+</h3>
                    <p className='font-bold text-gray-800 text-base md:text-xl'>Awards won</p>
                </div>
                <div className="item text-center">
                    <div className='flex justify-center'>
                        <img src={counter2} alt="icon" />
                    </div>
                    <h3 className='font-extrabold text-3xl md:text-[39px] text-commonClr'>65+</h3>
                    <p className='font-bold text-gray-800 text-base md:text-xl'>States covered</p>
                </div>
                <div className="item text-center">
                    <div className='flex justify-center'>
                        <img src={counter3} alt="icon" />
                    </div>
                    <h3 className='font-extrabold text-3xl md:text-[39px] text-commonClr'>689K+</h3>
                    <p className='font-bold text-gray-800 text-base md:text-xl'>Happy clients</p>
                </div>
                <div className="item text-center">
                    <div className='flex justify-center'>
                        <img src={counter4} alt="icon" />
                    </div>
                    <h3 className='font-extrabold text-3xl md:text-[39px] text-commonClr'>130M+</h3>
                    <p className='font-bold text-gray-800 text-base md:text-xl'>Goods delivered</p>
                </div>
                <div className="item text-center">
                    <div className='flex justify-center'>
                        <img src={counter5} alt="icon" />
                    </div>
                    <h3 className='font-extrabold text-3xl md:text-[39px] text-commonClr'>130M+</h3>
                    <p className='font-bold text-gray-800 text-base md:text-xl'>Business hours</p>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Counter