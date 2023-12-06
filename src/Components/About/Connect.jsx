import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import mail from '../assets/icons/mail.png'
import phone from '../assets/icons/call.png'

const Connect = () => {

    const ref = useRef(null)
    const cardRef = useRef(null)

    const mainControls = useAnimation()
    const cardControls = useAnimation()

    const isInView = useInView(ref,{once:true})
    const isInView2 = useInView(cardRef,{once:true})

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        if (isInView2) {
            cardControls.start("visible")
        }
    }, [isInView, mainControls, isInView2, cardControls])

    return (
        <motion.div className="connect mt-32 mb-20 w-[65%] mx-auto text-start"
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.25 }}>
            <div className="head text-4xl md:text-6xl font-bold text-white text-center">
                Connect with me ↴
            </div>
            <div className="connections text-white text-xs md:text-sm flex md:flex-row flex-col justify-center gap-4 mt-4 -ml-3 md:-ml-0">
                <motion.div className="email bg-card w-72 h-44 rounded-md flex flex-col gap-3 justify-center items-center mt-5" ref={cardRef} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }} initial="hidden" animate={cardControls} transition={{ duration: 0.6, delay: 0.25 }}>
                    <img src={mail} className='w-9 h-9' alt="" /> sahilchavangithub@gmail.com
                </motion.div>
                <motion.div className="contact bg-card w-72 h-44 flex flex-col gap-3 justify-center items-center rounded-md mt-5" ref={cardRef} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} initial="hidden" animate={cardControls} transition={{ duration: 0.6, delay: 0.25 }}>
                   <img src={phone} className='w-9 h-9' alt="" /> +91 9922 341 223
                </motion.div>
            </div>
            <div className="finish mt-20 mb-10 text-base text-center text-white font-semibold">
                sahilchavanresume@2.0
            </div>
        </motion.div>
    )
}

export default Connect
