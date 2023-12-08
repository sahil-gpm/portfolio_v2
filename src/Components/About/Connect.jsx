import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import phone from '../assets/icons/phone.png'
import fb from '../assets/icons/facebook-circular-logo.png'
import github from '../assets/icons/github.png'
import ig from '../assets/icons/instagram.png'
import { Link } from 'react-router-dom'
const Connect = () => {

    const ref = useRef(null)
    const cardRef = useRef(null)

    const mainControls = useAnimation()
    const cardControls = useAnimation()

    const isInView = useInView(ref, { once: true })
    const isInView2 = useInView(cardRef, { once: true })

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        if (isInView2) {
            cardControls.start("visible")
        }
    }, [isInView, mainControls, isInView2, cardControls])

    return (
        <motion.div className="connect mt-32 mb-20 w-[65%] mx-auto text-start overflow-x-hidden"
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.25 }}>
            <div className="head text-4xl md:text-6xl font-bold text-white text-center">
                Connect with me 👋↴
            </div>
            <div className="connections text-white text-xs md:text-sm flex md:flex-row items-center flex-col justify-center gap-4 mt-4">
                <motion.div className="email bg-card w-72 h-44 rounded-md flex flex-col gap-3 justify-center items-center mt-5" ref={cardRef} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }} initial="hidden" animate={cardControls} transition={{ duration: 0.6, delay: 0.25 }}>
                    <div className='text-3xl'>@</div> sahilchavangithub@gmail.com
                </motion.div>
                <motion.div className="contact bg-card w-72 h-44 flex flex-col gap-3 justify-center items-center rounded-md mt-5" ref={cardRef} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} initial="hidden" animate={cardControls} transition={{ duration: 0.6, delay: 0.25 }}>
                   <img src={phone} className='w-7 h-7' alt="" /> +91 9922 341 223
                </motion.div>
            </div>
            <div className='mx-auto flex justify-center items-center mt-14 gap-5' >
               <Link target='_blank' to={"https://www.facebook.com/profile.php?id=61554470909104"}> <motion.img ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.35 }} className='w-10 h-10' src={fb} alt="" /></Link>
                <Link target='_blank' to={"https://github.com/sahil-gpm"}><motion.img ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.6 }} className='w-10 h-10' src={github} alt="" /></Link>
                <Link target='_blank' to={"https://www.instagram.com/infinite_void_30/"}><motion.img ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.8 }} className='w-10 h-10' src={ig} alt="" /></Link>
            </div>
            <div className="finish mt-20 mb-10 text-base text-center text-white font-semibold">
                sahilchavanportfolio@2.0 || 2023
            </div>
        </motion.div>
    )
}

export default Connect
