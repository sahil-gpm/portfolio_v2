import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skills = () => {

  const skills = [
    {
      id: 1,
      skillname: "HTML",
      proficiency: "Advanced",
    },
    {
      id: 2,
      skillname: "CSS",
      proficiency: "Advanced",
    },
    {
      id: 3,
      skillname: "JavaScript",
      proficiency: "Advanced",
    },
    {
      id: 4,
      skillname: "Tailwind",
      proficiency: "Advanced",
    },
    {
      id: 5,
      skillname: "Bootstrap",
      proficiency: "Advanced",
    },
    {
      id: 6,
      skillname: "React.js",
      proficiency: "Advanced",
    },
    {
      id: 7,
      skillname: "Node.js",
      proficiency: "Advanced",
    },
    {
      id: 8,
      skillname: "Firebase",
      proficiency: "Advanced",
    },
    {
      id: 9,
      skillname: "MongoDB",
      proficiency: "Intermediate",
    },
    {
      id: 10,
      skillname: "MySQL",
      proficiency: "Advanced",
    },
    {
      id: 11,
      skillname: "Redux",
      proficiency: "Intermediate",
    },
    {
      id: 12,
      skillname: "Git & Github",
      proficiency: "Advanced",
    },
    {
      id: 13,
      skillname: "Express.js",
      proficiency: "Advanced",
    },
    {
      id: 14,
      skillname: "Socket.io",
      proficiency: "Intermediate",
    },
    {
      id: 15,
      skillname: "Figma",
      proficiency: "Basic",
    }
  ]

  const ref = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(ref, { once: false })
  const isInView2 = useInView(cardRef, { once: false })

  const mainControls = useAnimation()
  const cardControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
    if (isInView2) {
      cardControls.start("visible")
    }
  }, [isInView, mainControls, cardControls, isInView2])

  return (
    <motion.div className='h-fit mt-28 w-[95%] lg:w-[65%] md:mx-auto mx-4 overflow-x-hidden'
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.25 }}>
      <div className="head w-[75%] mx-auto text-center text-4xl md:text-6xl font-bold text-white">
        My Skills 🧑‍💻↴
      </div>

      <div id='skill' className="skill-array flex flex-wrap justify-center gap-3 md:gap-4 my-10">
        {skills.map((skill) => {
          return (
            <motion.div key={skill.id} ref={cardRef} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} initial="hidden" animate={cardControls} transition={{ duration: 0.6, delay: skill.id * 0.1 }} className='card w-28 h-36 md:w-52 md:h-64 bg-card flex flex-col gap-3 justify-center items-center rounded-md text-sm md:text-xl shadow-md shadow-slate'>
              <div className="skillname text-white font-semibold text-xs md:text-base">
                <span className='text-xs'>✔︎</span> {skill.skillname}
              </div>
              <div className='w-14 h-14 lg:w-24 lg:h-24'>
                <CircularProgressbar maxValue={100} styles={buildStyles({
                  pathColor: "#ee3f85",
                  textColor: "white",
                  textSize: 18,
                })} strokeWidth={4} value={skill.proficiency === "Basic" ? 60 : skill.proficiency === "Intermediate" ? 80 : 100} text={skill.proficiency === "Basic" ? "3/5" : skill.proficiency === "Intermediate" ? "4/5" : "5/5"} />
              </div>
              <div className="proficiency text-xs md:text-base mt-1 lg:mt-5">
                {skill.proficiency === "Basic" ? "⭐️⭐️⭐️" : skill.proficiency === "Intermediate" ? "⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️⭐️⭐️"}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Skills
