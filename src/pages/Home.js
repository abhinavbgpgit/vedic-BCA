import React from "react";
import { Label, Select } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion, px } from "framer-motion";
import MainLogo from "../assets/vedicbihar.png"
const Home = () => {
  return (

    <motion.div 
    initial={{ y: "-2000px" }}
    animate={{ y: "0px" }}
    transition={{ duration: 2 }}
    className="main  flex justify-center gap-28  m-auto p-24 ali">
      <div className="main-logo "> 
    <img src={MainLogo} className="md:h-[550px] h-full w-full object-cover "/>
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
            value="Select your University"
            className="text-base"
          />
          <motion.div drag className="absolute z-10 mt-3 ml-2 text-2xl">
            <i class="fa-solid fa-graduation-cap"></i>
          </motion.div>
        </div>
        <Select
          id="university"
          required
          class="text-sm text-gray-500 rounded-lg pl-12 w-[400px]"
        >
          <option value="BRABU">
            Babasaheb Bhimrao Ambedkar Bihar University
          </option>
          <option value="CNLU">Chanakya National Law University</option>
          <option value="JPV">Jai Prakash Vishwavidyalaya</option>
          <option value="LNMU">Lalit Narayan Mithila University</option>
          <option value="MU">Magadh University</option>
          <option value="MMHAPU">
            Maulana Mazharul Haque Arabic and Persian University
          </option>
          <option value="NOU">Nalanda Open University</option>
          <option value="PU">Patna University</option>
          <option value="RAU">Rajendra Agricultural University</option>
          <option value="TMBU">Tilka Manjhi Bhagalpur University</option>
          <option value="VKSU">Veer Kunwar Singh University</option>
        </Select>
      </div>

      <div className="w-[500px] pt-6 pl-24">
        <div className="mb-2 block ">
          <Label
            htmlFor="countries"
            value="Select your College"
            className="text-base"
          />
        </div>
        <Select
          id="university"
          required
          class="text-sm text-gray-500 rounded-lg pl-4  w-[400px]"
        >
          <option value="BRABU">Marwari College</option>
          <option value="CNLU">T. N. B. College</option>
          <option value="JPV">S.M. College</option>
          <option value="LNMU">Mahadev Singh College</option>
          <option value="MU">Magadh University</option>
          <option value="MMHAPU">
            Maulana Mazharul Haque Arabic and Persian University
          </option>
          <option value="NOU">Nalanda Open University</option>
          <option value="PU">Patna University</option>
          <option value="RAU">Rajendra Agricultural University</option>
          <option value="TMBU">Tilka Manjhi Bhagalpur University</option>
          <option value="VKSU">Veer Kunwar Singh University</option>
        </Select>
      </div>

      <div className=" flex gap-5 pt-3 pl-24">
        <div className="w-[240px] mt-5">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your Department" className="text-base"/>
          </div>
          <Select id="university" required class="text-sm text-gray-500 rounded-lg pl-4  w-[400px] ">
            <option value="BRABU">BCA</option>
            <option value="CNLU">BBA</option>
            <option value="JPV">BIT</option>
            <option value="LNMU">BSc</option>
            <option value="MU">BCom</option>
            {/* <option value="MMHAPU">
              Maulana Mazharul Haque Arabic and Persian University
            </option>
            <option value="NOU">Nalanda Open University</option>
            <option value="PU">Patna University</option>
            <option value="RAU">Rajendra Agricultural University</option>
            <option value="TMBU">Tilka Manjhi Bhagalpur University</option>
            <option value="VKSU">Veer Kunwar Singh University</option> */}
          </Select>
        </div>
        {/* <div className="w-[240px] mt-5">
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
        </div> */}
      </div>
      <div className="next flex justify-end mt-6 mr-[35px]">
        <button className="text-sm font-semibold text-black border-2 border-gray-400 rounded-lg p-1 pl-4 pr-4">
          Next<i class="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
    </motion.div>
   
  );
};

export default Home;
