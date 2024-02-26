import React, { useState } from 'react'
import logo from "../assests/Color logo - no background.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'

// demo navbar
const Nav = () => {

    let links =[
        {name:"Home",link:"/"},
        {name:"About",link:"/"},
        {name:"Syllabus",link:"/"},
        {name:"Admission",link:"/"},
        {name:"Career",link:"/"},
        {name:"Resourse",link:"/"},
        {name:"Contact",link:"/"},
        {name:"FAQs",link:"/"},
              
    ];
    let [IsOpen, setIsOpen] =useState(false)
  return (   
    <div className=''>
    <div className="Navbar bg-blue-100 h-auto w-screen md:flex justify-around items-center p-2">
    <div className="log h-12">
      <img src={logo} className="h-12"></img>
    </div>
   
  <div onClick={()=>setIsOpen(!IsOpen)} className='hamburger text-2xl absolute right-8 top-2 cursor-pointer md:hidden'>
  <FontAwesomeIcon icon={faHouse} name={IsOpen ? 'close': 'menu'} />
  </div>

    <ul className={`md:flex lg:gap-20 md:gap-5 absolute md:static bg-blue-100 w-screen md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${IsOpen ? 'top-19 ':'top-[-520px]' }  `}>
    {
        links.map((link)=>(
            <li key={link.name} className='md: text-x1 md:m-0 m-2'>
                <a href={link.link} className='text-gray-800 hover:text-orange-600 duration-100 '>{link.name}</a>
            </li>
        ))
    }
 </ul>
 <button className="  border-2 border-red-500 border-solid rounded md:static absolute  top-4 cursor-pointer p-2">Button</button>
    
  </div>
  </div>
 
  )
}

export default Nav
