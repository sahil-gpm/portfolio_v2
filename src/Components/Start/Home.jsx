import React from 'react'
import Intro from './Intro'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Connect from '../About/Connect'


const Home = () => {
  return (
    <div className='h-[300vh] overflow-x-hidden scroll-smooth'>
      <Intro/>
      <About/>
      <Skills/> 
      <Projects/> 
      <Connect/> 
    </div>
  )
}

export default Home
