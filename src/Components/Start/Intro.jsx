import React from 'react'
import demo from '../assets/demo.jpg'
import { useInView } from 'react-intersection-observer'
import Typing from '../Typed/Typing'
import blob1 from '../assets/svgs/blob.svg'
import blob2 from '../assets/svgs/blob-2.svg'

const Intro = () => {
    const { ref: myRef, inView: introVisible } = useInView();
    return (
        <>
        <div className="iamges w-[20rem] lg:w-[50rem] relative top-96 -z-10 ">
           <img src={blob1} alt="" className='opacity-0 absolute left-14 md:left-10 -top-96 md:top-52' />
           <img src={blob2} alt="" className='opacity-30 absolute -right-[85%] md:-right-[80%] -top-[30rem] md:top-[40rem]' />
        </div>
            <div className={`flex flex-col mt-40 md:mt-0 lg:flex-row md:justify-center items-center w-[85%] md:w-[90%] lg:w-[70%] mx-auto h-[80vh] md:h-[100vh] gap-6 md:gap-14 headanim ${introVisible ? 'loaded' : ''}`} ref={myRef} >
                <div className="left">
                    <div className="left_image border-4 border-main w-56 md:w-64 h-56 md:h-64 lg:w-80 lg:h-80 p-1 rounded-full shadow-2xl">
                        <img src={demo} className='w-full h-full rounded-full object-cover ' alt="" />
                    </div>
                </div>
                <div className="right md:bg-trans md:p-0 md:rounded-none md:shadow-none">
                    <div className="heading text-3xl md:text-6xl lg:text-7xl text-white font-bold text-center md:text-center lg:text-start tracking-tight">
                        <div className='text-xl text-text_light md:text-3xl tracking-normal mb-6'>👋 Hello folks 👋</div>
                        I am Sahil Chavan, a guy passionate for ↴ <div><Typing /></div>
                    </div>
                    <a href='#about'> <button className='text-white btn-grad text-sm font-semibold w-40 md:w-48 md:py-5 py-4 mt-10 mx-auto md:mx-0'>Know me more ⬇</button></a>
                </div>
            </div>
        </>
    )
}

export default Intro
