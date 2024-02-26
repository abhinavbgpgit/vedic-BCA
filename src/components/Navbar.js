import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  let [IsBurger, setIsBurger] = useState(false)
  return (
    <div className='h-20 bg-sky-900 flex items-center justify-between '>
       <div className=" ml-5 text-3xl text-white">Marwari College</div>
    
    <div onClick={()=>setIsBurger(!IsBurger)} className='hamburger text-2xl absolute right-8 top-2 cursor-pointer md:hidden'>
    <FontAwesomeIcon icon={faSquareCaretDown} className='h-10 w-10 text-blue-200' name={IsBurger ? 'close' : 'menu'}/>
    </div>
    <div className={`md:flex text-xl text-white lg:gap-20 md:gap-10  absolute md:static  w-screen md:z-auto left-0 md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${IsBurger? 'left-0 top-20' : 'left-[-800px] top-20' } md:bg-sky-900 bg-red-500 	overflow-x- hidden;`}>
        <div className="cursor-pointer"><Link to='/'>Home</Link></div>
        <div className="cursor-pointer"><Link to='/exam'>Exam</Link></div>
        <div className="cursor-pointer"><Link to='/result'>Result</Link></div>
        <div className="cursor-pointer"><Link to='/syllabus'>Syllabus</Link></div>
        <div className="cursor-pointer"><Link to='/result'>Result</Link></div>
        <div className="cursor-pointer"><Link to='/events'>Events</Link></div>
        <div className="cursor-pointer"><Link to='/campus'>Campus</Link></div>
    </div>
    <div className="h-10 w-10  m-5 invisible md:visible">
    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white h-6 p-2'/>
    </div>
    </div>
  )
}

export default Navbar