import React from "react";
import { Link } from "react-router-dom";
import { motion, px } from "framer-motion";
import MainLogo from "../assets/HomepageD-img.png";
import { useEffect } from "react";

const HomepageD = () => {
  useEffect(() => {
    const inputBoxes = document.querySelectorAll('input[type="number"]');
    inputBoxes.forEach((input,index) => {
      input.addEventListener("input", () => {
        input.value = input.value.slice(0, 1);

        // if (input.value.length > 1) {
        //   input.value = input.value[0];
        // }
        if (input.value !=="" && index<inputBoxes.length-1){
            inputBoxes[index+1].focus();
             
        }

      });
      input.addEventListener('keydown',(e)=>{
        if(e.key ==="Backspace" && input.value==="" && index>0){
          
          inputBoxes[index -1].value = "";
          inputBoxes[index -1].focus();
        }
      })
    });
  });
  return (
    <div      
      className="main  flex justify-center gap-28  m-auto p-24 ali"
    >
      <motion.div
       initial={{ opacity:0}}
       animate={{opacity:5}}
       transition={{ duration: 1.5 }}
      className="main-logo ">
        <img
          src={MainLogo}
          className="md:h-[550px] h-full w-full object-cover rounded-3xl"
        />
      </motion.div>
      <div className=" h-screen flex-col mt-10">
        <Link to="/exam">
          <div className=" text-xs">Go to exam page</div>
        </Link>
        <motion.div 
          initial={{ x: "2000px" }}
          animate={{ x: "0px" }}
          transition={{ duration: .3 }}
        className="border-b-4 inline-block border-green-500 pb-2 text-3xl font-bold tracking-widest ">
          Information Portal For
        </motion.div>
        <motion.div 
          initial={{ x: "2000px" }}
          animate={{ x: "0px" }}
          transition={{ duration: .4 }}
        className="text-5xl mt-4  font-bold">
          {" "}
          <motion.span className="text-red-600 ">Bihar</motion.span> Higher
          Education
        </motion.div>
        <motion.div
          initial={{ x: "2000px" }}
          animate={{ x: "0px" }}
          transition={{ duration: .5 }}
        className="flex flex-col items-center justify-center mt-14 pl-8">
          <label htmlFor="otp" className="p-2">
            Enter Your OTP
          </label>
          <div className="flex gap-8 mt-12">
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                type="number"
                maxLength="1"
                className="w-12 h-12 text-2xl text-center border border-gray-700 rounded-md"
                required
              />
            ))}
          </div>
        </motion.div>

        <div className="flex flex-row justify-between mt-24">
          <div className="previous mt-6 pl-24">
            <Link to="/HomepageC">
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

export default HomepageD;
