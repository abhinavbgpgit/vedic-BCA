import React, { useEffect } from "react";
import { Label, Select } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion, px } from "framer-motion";
import MainLogo from "../assets/HomepageC-img.png";
import IndianFlag from "../assets/twemoji_flag-india.png";

const HomepageB = () => {
useEffect(()=>{
  const phoneInput = document.querySelector("#phoneNumber");
  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.slice(0, 10);
  });
})



  return (
    <div

      className="main  flex justify-center gap-28  m-auto p-24 ali"
    >
      <motion.div
       initial={{ opacity:0 }}
       animate={{ opacity:5}}
       transition={{ duration: 1.5 }}
      className="main-logo ">
        <img
          src={MainLogo}
          className="md:h-[550px] h-full w-full object-cover rounded-3xl "
        />
      </motion.div>
      <div className=" h-screen flex-col mt-10">
        <Link to="/exam">
          <div className=" text-xs">Go to exam page</div>
        </Link>
        <motion.div
         initial={{ x: "2000px" }}
         animate={{ x: "0px" }}
         transition={{ duration: .2 }}
        className="border-b-4 inline-block border-green-500 pb-2 text-3xl font-bold tracking-widest ">
          Information Portal For
        </motion.div>
        <motion.div 
         initial={{ x: "2000px" }}
         animate={{ x: "0px" }}
         transition={{ duration: .3 }}
        className="text-5xl mt-4  font-bold">
          {" "}
          <motion.span className="text-red-600 ">Bihar</motion.span> Higher
          Education
        </motion.div>

        <motion.div
         initial={{ x: "2000px" }}
         animate={{ x: "0px" }}
         transition={{ duration: .4 }}
        className="w-[500px] pt-10 pl-24">
          <div className="mb-2 block relative text-base">
            <Label
              htmlFor="phoneNumber"
              value="Phone Number"
              className="text-base"
            />
            <div drag className="absolute z-10 mt-4 ml-2 text-2xl">
              <img src={IndianFlag} alt="" className="h-6" />
            </div>
          </div>
          <div
          className="flex">
            <select
              id="countryCode"
              name="countryCode"
              inputMode="numeric"
              pattern="\d{0,10}"
              maxLength={10}
              className="text-sm text-gray-500 rounded-l-lg  pl-9 w-[100px]"
              required
            >
              <option value="+91">+91</option>
            </select>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className="text-sm text-gray-500 rounded-r-lg pl-2 w-[300px]"
              required
            />
          </div>
        </motion.div>
        <motion.div
         initial={{ x: "2000px" }}
         animate={{ x: "0px" }}
         transition={{ duration: .5 }}
        className="w-[500px] pt-6 pl-24">
          <div className="mb-2 block relative text-base">
            <label htmlFor="password" className="text-base">
              Password
            </label>
            <motion.div drag className="absolute z-10 mt-3 ml-2 text-2xl">
              <i class="fa-solid fa-key"></i>
            </motion.div>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            className="text-sm text-gray-500 rounded-lg pl-12 w-[400px]"
            required
          />
        </motion.div>

        <motion.div
         initial={{ x: "2000px" }}
         animate={{ x: "0px" }}
         transition={{ duration: .6 }}
       className="w-[500px] pt-6 pl-24">
          <div className="mb-2 block relative text-base">
            <label htmlFor="confirmPassword" className="text-base">
              Confirm Password
            </label>
            <motion.div drag className="absolute z-10 mt-3 ml-2 text-2xl">
              <i class="fa-solid fa-key"></i>
            </motion.div>
          </div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="text-sm text-gray-500 rounded-lg pl-12 w-[400px]"
            required
          />
        </motion.div>
        <div className="flex flex-row justify-between ">
          <div className="previous   mt-6 pl-24">
            <Link to="/HomepageB">
              <button className="text-sm font-semibold text-black  p-1 pl-4 pr-4">
                <i class="fa-solid fa-arrow-left mr-2"></i>Previous
              </button>
            </Link>
          </div>
          <div className="next  justify-end mt-6 pr-8">
            <Link to="/HomepageD">
              <button className="text-sm font-semibold p-1 pl-4 pr-4">
                Next<i class="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageB;
