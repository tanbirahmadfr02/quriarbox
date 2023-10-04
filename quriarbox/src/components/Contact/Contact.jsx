/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import illustration from '../../assets/Illustration.png'

function Contact() {


const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');
const [name, setName] = useState('');
const [nameError, setNameError] = useState('');

const handlerName = (e) =>{
setName(e.target.value);
setNameError('');

}

const handleEmail = (e) =>{
setEmail(e.target.value);
setEmailError('')
}

const handleSubmit = () =>{
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!email){
setEmailError('Email is required')
}else if(!regexEmail.test(email)){
setEmailError('Please Enter a valid Email');
}

if(!name){
setNameError("Please Enter Your Name")
}
}



return (
<>
    <section className='pt-0 pb-12 md:py-[100px] bg-bodyColor'>
        <div className="container">
            <div className='sm:flex sm:justify-center'>
                <div className='md:w-8/12'>
                    <div className='sm:flex sm:gap-x-6 items-center'>
                        <div className='sm:w-1/2 text-center md:text-start mb-8 md:mb-0'>
                            <div className='mb-3 flex justify-center'>
                                <img src={illustration} alt="illustration" />
                            </div>
                            <h3 className='font-Oxanium font-bold text-xl md:text-2xl text-commonClr mb-4'>REQUEST A
                                CALLBACK</h3>
                            <h2
                                className='font-Raleway font-extrabold text-gray-950 text-3xl md:text-[39px] mb-2 leading-10 md:leading-[52px]'>
                                We
                                will contact in the shortest time.</h2>
                            <p className='font-Raleway font-semibold text-[18px] md:text-2xl text-gray-500'>Monday to
                                Friday, 9am-5pm.
                            </p>
                        </div>
                        <div className='sm:w-1/2'>
                            <form action="#">
                                <div className='relative mb-8'>
                                    <input onChange={handlerName} value={name}
                                        className='w-full text-gray-600 py-4 px-[19px] placeholder:text-[#C5C5D2] placeholder:text-base text-base bg-transparent border border-[#C5C5D2] rounded-md'
                                        placeholder='Name' type="text" />
                                    {
                                    nameError &&
                                    <p
                                        className='font-Raleway font-normal text-base w-full py-1.5 px-3 bg-red-500 text-center text-white absolute bottom-[-40px] left-0 z-10'>
                                        {nameError}</p>
                                    }
                                </div>

                                <div className='relative mb-8'>
                                    <input onChange={handleEmail} value={email}
                                        className='w-full text-gray-600 py-4 px-[19px] placeholder:text-[#C5C5D2] placeholder:text-base text-base bg-transparent border border-[#C5C5D2] rounded-md'
                                        placeholder='Email Address' type="Email" />
                                    {
                                    emailError &&
                                    <p
                                        className='font-Raleway font-normal text-base w-full py-1.5 px-3 bg-red-500 text-center text-white absolute bottom-[-40px] left-0'>
                                        {emailError}</p>
                                    }
                                </div>
                                <textarea
                                    className='w-full text-gray-600 py-3 px-[19px] placeholder:text-[#C5C5D2] placeholder:text-base text-base bg-transparent border border-[#C5C5D2] rounded-md h-[100px] md:h-[154px] resize-none'
                                    placeholder='Message (optional)'></textarea>
                                <div className='mt-[30px] md:mt-[66px] flex justify-center'>
                                    <button onClick={handleSubmit}
                                        className='md:w-full py-3 px-8 md:px-0 bg-commonClr font-Oxanium font-bold text-white text-[18px] md:text-xl rounded-md border border-commonClr hover:bg-transparent hover:text-commonClr duration-500'>Send
                                        Message <i className="ml-2 fa-solid fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Contact