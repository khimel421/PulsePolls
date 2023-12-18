import React, { useState } from "react";
import reactLogo from "../assets/logo.png";
import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";
import Container from "../container/Container";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="text-[#cdcbff]  hover:text-black font-inter bg-[#001d21] hover:bg-white flex p-2 items-center justify-between">
      {/* logo and website name */}
      <section className="flex items-end gap-4">
        <p className="font-inter text-2xl lg:text-2xl pl-2">PullsPolls</p>

        <section className="hidden md:block">
          <ul className=" flex gap-2 ">
            <li className="hover:underline hover:underline-offset-8">
              Surveys
            </li>
            <li className="hover:underline hover:underline-offset-8">
              Become a Pro
            </li>
            <li className="hover:underline hover:underline-offset-8">
              Dashboard
            </li>
          </ul>
        </section>
      </section>

      <section className="hidden md:flex gap-4">
        <button className=" bg-none">Sign In</button>
        <button className="btn hover:bg-[#001d21] hover:text-[#cdcbff]">Get Started</button>
      </section>
      <section className=" block md:hidden">
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
              setOpen(!isOpen)
              console.log(isOpen)
            } else {
              // close a menu
              setOpen(!isOpen)
              console.log(isOpen)
            }
          }}
        />
      </section>
      <section className= {`absolute top-[60px] w-full bg-white h-screen md:hidden ${isOpen ? 'block': 'hidden'} h-screen`}>
      <ul className=" flex flex-col gap-4  text-lg p-2 ">
            <li className="hover:underline hover:underline-offset-8">
              Surveys
            </li>
            <li className="hover:underline hover:underline-offset-8 ">
              Become a Pro
            </li>
            <li className="hover:underline hover:underline-offset-8">
              Dashboard
            </li>
          </ul>

          <div className="flex flex-col gap-4 mt-10 bg-white">
            <button className=" bg-none">Sign In</button>
            <button className="btn bg-[#001d21] text-[#cdcbff]  ">Get Started</button>
          </div>
      </section>
      {/* <section>
          <div className="" id="outer-container">
            
            <Menu right  className="w-[50px] bg-white bm-burger-bars" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
              <a id="home" className="menu-item" href="/">
                Home
              </a>
              <a id="about" className="menu-item" href="/about">
                About
              </a>
              <a id="contact" className="" href="/contact">
                Contact
              </a>
              
            </Menu>
          </div>
        </section> */}
    </div>
  );
}
