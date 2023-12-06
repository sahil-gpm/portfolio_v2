import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import name from '../assets/icons/user.png'
import dob from '../assets/icons/dob.png'
import add from '../assets/icons/address.png'
import mail from '../assets/icons/mail.png'
import phone from '../assets/icons/call.png'
import resume from '../assets/sahilchavanresume.pdf'

const About = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <motion.div ref={ref} id='about'
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            transition={{ duration: 0.8, delay: 0.25 }}
            animate={mainControls}
            className='w-[85%] lg:w-[65%] h-fit min-[1500px]:h-[60vh] mx-auto'>
            <div className='text-white heading text-4xl lg:text-6xl font-bold tracking-tight'>About <span className='text-main'>me</span> ↴</div>
            <div className='flex flex-col min-[1500px]:flex-row justify-center text-white mt-10 gap-10'>
                <div className="basic-details text-base md:text-xl flex flex-col justify-center gap-3 md:gap-6">
                    <div className="name flex justify-start gap-3">
                        <span className='flex justify-start items-center md:gap-3 gap-1 font-semibold'><img className='w-4 h-4' src={name} alt="" />Name ↦</span>Sahil Chavan
                    </div>
                    <div className="dob flex justify-start gap-3">
                        <span className='flex justify-start items-center md:gap-3 gap-1 font-semibold'><img className='w-4 h-4' src={dob} alt="" />Date of Birth ↦</span> April 30, 2005
                    </div>
                    <div className="address flex justify-start gap-3">
                        <span className='flex justify-start items-center md:gap-3 gap-1 font-semibold'><img className='w-4 h-4' src={add} alt="" />Address ↦</span> Mumbai,Maharashtra,India
                    </div>
                    <div className="email flex justify-start gap-3">
                        <span className='flex justify-start items-center md:gap-3 gap-1 font-semibold'><img className='w-4 h-4' src={mail} alt="" />Email ↦</span> sahilchavangithub@gmail.com
                    </div>
                    <div className="phone flex justify-start gap-3">
                        <span className='flex justify-start items-center md:gap-3 gap-1 font-semibold'><img className='w-4 h-4' src={phone} alt="" />Phone ↦</span> +91 9922341223
                    </div>
                    <a href={resume} download={"resume.pdf"} target='_blank' rel='noreferrer'>
                        <button className='text-white btn-grad text-sm font-semibold w-40 lg:w-52 lg:px-5 py-4 mt-2'>
                            Download Resume
                        </button>
                    </a>
                </div>
                <div className="my-info md:font-semibold text-sm md:text-xl w-[90%] md:w-[60%]">
                    Passionate and hardworking <span className='text-main'>Full stack web developer 🧑‍💻</span>, <span className='text-main'>Learning UI/UX designer ⌘</span> and a <span className='text-main'>Little bit of android developer 📲</span>.
                    I am currently a student looking for a chance to use my skills in real world problem solving 🌍.
                    Besides tech, I am also intersted in playing video games ( FH5 is my favourite open world game 🏎️ ),exploring nature ☘️ and clicking pics of beautiful animals 🐶.I always focus on keeping myself updated with latest emerging technologies. My journey ✈️ is marked by a passion for problem-solving, user-centric design, and effective collaboration. From building robust web applications to navigating the world of Figma and crafting Android apps, I'm driven by a commitment to excellence.🧑‍💻.Join me on this dynamic journey where each line of code tells a story of innovation 🌟 and continuous 🚀 learning, making myself better day-by-day.
                </div>
            </div>
        </motion.div>
    )
}

export default About