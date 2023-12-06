import React from 'react'

const Projectcomponent = ({name,description,color,link}) => {
  return (
    <div className='bg-card mt-2 p-10 w-full md:w-[34rem] rounded-2xl '>
      <div className="logo text-8xl font-bold flex justify-center items-center" style={{color:color}}>
        {name.substring(0,1)}
      </div>
      <div className="project-name text-white text-center mt-6 text-3xl font-bold">
        {name}
      </div>
      <div className="project-description text-sm md:text-base text-white text-center mt-4 font-semibold">
        {description}
      </div>
      <button style={{color:"#fffff",backgroundColor:color,marginTop:"3.5rem"}} className='px-7 py-3 rounded-md'>Github</button>
    </div>
  )
}

export default Projectcomponent
