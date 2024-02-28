import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 bg-slate-600 flex items-center justify-between'>
       <div className=" ml-5 text-3xl text-white">Marwari College</div>
    <div className="flex gap-10 text-xl text-white">
        <div className="cursor-pointer"><Link to='/'>Home</Link></div>
        <div className="cursor-pointer"><Link to='/exam'>Exam</Link></div>
        <div className="cursor-pointer"><Link to='/result'>Result</Link></div>
        <div className="cursor-pointer"><Link to='/syllabus'>Syllabus</Link></div>
        <div className="cursor-pointer"><Link to='/events'>Events</Link></div>
        <div className="cursor-pointer"><Link to='/campus'>Campus</Link></div>
       
    </div>
    <div className="h-10 w-10 bg-blue-300 rounded-full m-5 "></div>
    </div>
  )
}

export default Navbar