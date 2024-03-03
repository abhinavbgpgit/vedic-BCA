import React from "react";
import { Label, Select } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion, px } from "framer-motion";
import MainLogo from "../assets/HomepageB-img.png"
const HomepageB = () => {
  return (

    <motion.div 
    initial={{ x: "2000px" }}
    animate={{ x: "0px" }}

    transition={{ duration: 2 }}
    className="main  flex justify-center gap-28  m-auto p-24 ali">
      <div className="main-logo "> 
    <img src={MainLogo} className="md:h-[550px] h-full w-full object-cover rounded-3xl"/>
       </div>
      <div
   
      className=" h-screen flex-col mt-10"
    >
      <Link to="/exam">
        <div className=" text-xs">Go to exam page</div>
      </Link>
      <span className="border-b-4 border-green-500 pb-2 text-3xl font-bold tracking-widest ">Information Portal For</span>
      <motion.div drag className="text-5xl mt-4  font-bold">
      {" "}
      <motion.span className="text-red-600 ">Bihar</motion.span> {" "}Higher Education

      </motion.div>

      <div className="w-[500px] pt-10 pl-24">
        <div className="mb-2 block relative text-base ">
          <Label
            htmlFor="countries"
            value="Select your Semester / Year"
            className="text-base"
          />
          <motion.div drag className="absolute z-10 mt-3 ml-2 text-2xl">
          <i class="fa-solid fa-book"></i>
          </motion.div>
        </div>
        
        <Select
          id="semesters"
          required
          class="text-sm text-gray-500 rounded-lg pl-12 w-[400px]"
        >
          <option value="1st Sem">1st Semester</option>
<option value="2nd Sem">2nd Semester</option>
<option value="3rd Sem">3rd Semester</option>
<option value="4th Sem">4th Semester</option>
<option value="5th Sem">5th Semester</option>
<option value="6th Sem">6th Semester</option>
<option value="7th Sem">7th Semester</option>
<option value="8th Sem">8th Semester</option>
<option value="1st Year">1st Year</option>
<option value="2nd Year">2nd Year</option>
<option value="3rd Year">3rd Year</option>

         
        </Select>
      </div>
      <div className="w-[500px] pt-6 pl-24">
  <div className="mb-2 block ">
    <Label
      htmlFor="dateOfBirth"
      value="Date of Birth"
      className="text-base"
    />
    <motion.div drag className="absolute z-10 mt-3 ml-2 text-2xl">
      <i class="fa-regular fa-calendar"></i>
    </motion.div>
  </div>
  <input
    type="date"
    id="dateOfBirth"
    name="dateOfBirth"
    className="text-sm text-gray-500 rounded-lg pl-12 w-[400px]"
    required
  />
</div>


<div className="w-[500px] pt-6 pl-24">
  <div className="mb-2 block ">
    <Label
      htmlFor="collegeRollNumber"
      value="College Roll Number"
      className="text-base"
    />
    <motion.div drag className="absolute z-10 mt-3 ml-2 text-2xl">
      <i class="fa-regular fa-id-badge"></i>
    </motion.div>
  </div>
  <input
    type="number"
    id="collegeRollNumber"
    name="collegeRollNumber"
    className="text-sm text-gray-500 rounded-lg pl-12 w-[400px]"
    required
  />
</div>
<div className="flex flex-row justify-between " >
    <div className="previous   mt-6 pl-24">
<Link to="/"><button className="text-sm font-semibold text-black  p-1 pl-4 pr-4"><i class="fa-solid fa-arrow-left mr-2"></i>Previous</button></Link>
    </div>
    <div className="next  justify-end mt-6 pr-8">
        <Link to="/HomepageC"><button className="text-sm font-semibold p-1 pl-4 pr-4">
          Next<i class="fa-solid fa-arrow-right ml-2"></i>
        </button></Link>
        
      </div>
</div>

     
    </div>
    </motion.div>
   
  );
};

export default HomepageB;
