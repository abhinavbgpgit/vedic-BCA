import React from 'react'
import { Label, Select } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const Home = () => {
  return (

    <motion.div 
    initial={{y:"-2000px"}}
    animate={{y:"0px"}}
    transition={{ duration:3}}
    
    className="center h-screen flex-col">
   <Link to='/exam'><div className="">Go to exam page</div></Link> 
    <motion.div drag className="text-5xl">Welcome to <motion.span  className='text-blue-400'>Vedic Bihar</motion.span> </motion.div>
    
   
    <div className='w-[500px] mt-10'>
      <div className="mb-2 block relative">
        <Label htmlFor="countries" value="Select your University" className='text-lg' />
        <motion.div drag className="absolute z-10 mt-3 ml-2 text-2xl"><i class="fa-solid fa-graduation-cap"></i></motion.div>
      </div>
      <Select id="university" required class='text-lg text-gray-700 rounded-lg pl-12'>
      <option value="BRABU">Babasaheb Bhimrao Ambedkar Bihar University</option>
  <option value="CNLU">Chanakya National Law University</option>
  <option value="JPV">Jai Prakash Vishwavidyalaya</option>
  <option value="LNMU">Lalit Narayan Mithila University</option>
  <option value="MU">Magadh University</option>
  <option value="MMHAPU">Maulana Mazharul Haque Arabic and Persian University</option>
  <option value="NOU">Nalanda Open University</option>
  <option value="PU">Patna University</option>
  <option value="RAU">Rajendra Agricultural University</option>
  <option value="TMBU">Tilka Manjhi Bhagalpur University</option>
  <option value="VKSU">Veer Kunwar Singh University</option>
      </Select>
    </div>

    <div className='w-[500px] mt-5'>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your College" className='text-lg' />
      </div>
      <Select id="university" required class='text-lg text-gray-700 rounded-lg'>
      <option value="BRABU">Marwari College</option>
  <option value="CNLU">T. N. B. College</option>
  <option value="JPV">S.M. College</option>
  <option value="LNMU">Mahadev Singh College</option>
  <option value="MU">Magadh University</option>
  <option value="MMHAPU">Maulana Mazharul Haque Arabic and Persian University</option>
  <option value="NOU">Nalanda Open University</option>
  <option value="PU">Patna University</option>
  <option value="RAU">Rajendra Agricultural University</option>
  <option value="TMBU">Tilka Manjhi Bhagalpur University</option>
  <option value="VKSU">Veer Kunwar Singh University</option>
      </Select>
    </div>


    <div className=" flex gap-5">
    <div className='w-[240px] mt-5'>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your Department" />
        
      </div>
      <Select id="university" required>
      <option value="BRABU">BCA</option>
  <option value="CNLU">BBA</option>
  <option value="JPV">BIT</option>
  <option value="LNMU">BSc</option>
  <option value="MU">BCom</option>
  <option value="MMHAPU">Maulana Mazharul Haque Arabic and Persian University</option>
  <option value="NOU">Nalanda Open University</option>
  <option value="PU">Patna University</option>
  <option value="RAU">Rajendra Agricultural University</option>
  <option value="TMBU">Tilka Manjhi Bhagalpur University</option>
  <option value="VKSU">Veer Kunwar Singh University</option>
      </Select>
    </div>
    <div className='w-[240px] mt-5'>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your Semester/Year" />
      </div>
      <Select id="university" required>
      <option value="1st Sem">1st Sem</option>
  <option value="CNLU">2nd sem</option>
  <option value="JPV">3rd sem</option>
  <option value="LNMU">4th sem</option>
  <option value="MU">5th sem</option>
  <option value="MMHAPU">6th sem</option>
  <option value="NOU">7th sem</option>
  <option value="PU">8th sem</option>
  <option value="RAU">1st year</option>
  <option value="TMBU">2nd year</option>
  <option value="VKSU">3rd year</option>
 
      </Select>
    </div>
    </div>


        </motion.div> 
  )
}

export default Home