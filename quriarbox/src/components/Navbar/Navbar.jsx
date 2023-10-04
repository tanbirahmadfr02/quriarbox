import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import {AiOutlineBars} from 'react-icons/ai'

function Navbar() {

const [show, setShow] = useState(false)

const handleClick = () =>{
setShow(!show)
}

return (
<>
    <nav className='font-Raleway py-[20px] md:py-[15px] items-center bg- bg-gray-100 fixed top-0 left-0 w-full z-[999]'>
        <div className="container">
            <div className='flex'>
                <div className='w-1/2'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='w-1/2'>
                    <ul className={`font-extrabold md:text-[#817382] text-base flex md:items-center md:justify-end
                        absolute md:static w-full md:w-auto bg-gray-100 md:bg-transparent flex-col md:flex-row
                        items-center gap-y-7 md:gap-y-0 md:pt-0 pt-16 duration-300 ease-in ${show
                        ? 'top-[76px] left-0 opacity-100 pb-20 md:pb-0' : 'top-[-70%] left-0 opacity-0 md:opacity-100'
                        }`}>
                        <li><a className='md:mr-[22px]' href="#">Home</a></li>
                        <li><a className='md:mr-[22px]' href="#">Our services</a></li>
                        <li><a className='md:mr-[22px]' href="#">About Us</a></li>
                        <li><a className='md:mr-[22px]' href="#">What’s new?</a></li>
                        <li><a className='text-xl h-[45px] w-[100px] md:w-[45px] rounded-lg bg-[#e8d8b7] text-center leading-[49px] flex justify-center items-center md:ml-[45px]'
                                href="#">
                                <AiOutlineSearch /></a></li>
                        <li><a className='text-xl font-bold font-Oxanium px-5 py-3 bg-[#FFE4D9] text-commonClr md:ml-[9px] rounded-md'
                                href="#">Contact us</a></li>
                    </ul>
                    <div className='absolute top-[50%] translate-y-[-50%] right-10 text-black font-bold  text-3xl md:hidden cursor-pointer'
                        onClick={handleClick}>
                        {
                        show ?
                        <RxCross2 />
                        :
                        <AiOutlineBars />
                        }
                    </div>
                </div>
            </div>
        </div>
    </nav>
</>
)
}

export default Navbar