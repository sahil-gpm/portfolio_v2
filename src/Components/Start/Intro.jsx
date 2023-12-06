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
        <div className="iamges w-[20rem] lg:w-[50rem] absolute top-96 -z-10 ">
           <img src={blob1} alt="" className='opacity-10 absolute left-0 md:left-10 -top-96 md:top-32' />
           <img src={blob2} className='absolute -right-[3.9rem] md:left-[58rem] md:top-[34rem] opacity-30' alt="" />
        </div>
            <div className={`flex flex-col mt-40 md:mt-0 lg:flex-row md:justify-center items-center w-[85%] md:w-[90%] lg:w-[70%] mx-auto h-[80vh] md:h-[100vh] gap-6 md:gap-14 headanim ${introVisible ? 'loaded' : ''}`} ref={myRef} >
                <div className="left">
                    <div className="left_image border-4 border-main w-56 md:w-64 h-56 md:h-64 lg:w-80 lg:h-80 p-1 rounded-full shadow-2xl">
                        <img src={demo} className='w-full h-full rounded-full object-cover ' alt="" />
                    </div>
                </div>
                <div className="right  md:bg-trans md:p-0 md:rounded-none md:shadow-none">
                    <div className="heading text-3xl lg:text-7xl text-white font-bold text-center md:text-start tracking-tight">
                        <div className='text-xl text-text_light md:text-3xl tracking-normal mb-6'>👋 Hello folks 👋</div>
                        I am Sahil Chavan, a guy passionate for ↴ <div><Typing /></div>
                    </div>
                    <a href='#about'> <button className='text-white btn-grad text-sm font-semibold w-40 md:w-48 md:py-5 py-4 mt-10 mx-auto md:mx-0'>Know me me ⬇</button></a>
                </div>
            </div>
        </>
    )
}

export default Intro
