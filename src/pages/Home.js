import React from 'react'
import { Label, Select } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (

    <div className="center h-screen flex-col">
   <Link to='/exam'><div className="">Go to exam page</div></Link> 
    <div className="text-5xl">Welcome to <span className='text-blue-400'>Vedic Bihar</span> </div>
    
   
    <div className='w-[500px] mt-10'>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your University" />
      </div>
      <Select id="university" required>
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
        <Label htmlFor="countries" value="Select your College" />
      </div>
      <Select id="university" required>
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


        </div> 
  )
}

export default Home