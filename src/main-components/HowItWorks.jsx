import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className=" bg-[#001d21] mt-10  relative p-4 z-10">
      {/* <div className="text-center text-3xl font-semibold my-10 text-[#cdcbff] h-[50%]">
        How it works
      </div> */}
      <h1 className="text-center text-3xl font-semibold my-10 text-[#cdcbff]">How it works</h1>
      <div className="flex flex-col lg:flex-row items-center gap-4 max-w-4xl mx-auto z-20 ">
        <div className="card w-[300px] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Free Sign Up <FaUserEdit /></h2>
            <p>You can sign up for free and become a surveyor </p>
            
          </div>
        </div>
        <div className="card w-[300px] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Pro user <MdVerifiedUser /></h2>
            <p>Become a pro user to get special features</p>
            
          </div>
        </div>
        <div className="card w-[300px] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">See charts<FaChartBar /></h2>
            <p>You can see all your data by charts </p>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}
