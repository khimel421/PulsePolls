import React, { useContext, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../authprovider/AuthProvider";
import { redirect } from "react-router-dom";

export default function DashBoard() {
  const {logOut} = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(true);
  const [isAdmin,isAdminLoading] = useAdmin()
  // const [isAdmin,setIsAdmin] = useState(true)

  // if(!isAdminLoading){
  //   console.log("loading......")
  // }

  console.log(isAdmin)

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row relative pt-20">
        <div className="p-3 lg:hidden fixed top-0 z-10 bg-[#001d21] w-full">
          <button className="btn" onClick={toggle}>
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="">
            <section className="absolute z-10 lg:static">
              <div className=" p-3 space-y-2 w-60 bg-gray-50 text-gray-800 h-screen">
                <div className="flex items-center p-2 space-x-4">
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="w-12 h-12 rounded-full bg-gray-500"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                    <span className="flex items-center space-x-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs hover:underline text-gray-600"
                      >
                        View profile
                      </a>
                    </span>
                  </div>
                </div>
                <div className="divide-y divide-gray-300">
                  {isAdmin ? (
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                      <li className="bg-gray-100 text-gray-900">
                        <NavLink
                          to={`users`}
                          rel="noopener noreferrer"

                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current text-gray-600"
                          >
                            <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                          </svg>
                          <span>All users</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`surveyRequest`}
                          rel="noopener noreferrer"
                          href="#"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <IoCreateOutline />
                          <span>Survey requests</span>
                        </NavLink>
                      </li>
                      {/* <li>
                        <NavLink
                          to={`mysurvey`}
                          rel="noopener noreferrer"
                          href="#"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <FaUserEdit />
                          <span>My surveys</span>
                        </NavLink>
                      </li> */}
                    </ul>
                  ) : (
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                      <li className="bg-gray-100 text-gray-900">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current text-gray-600"
                          >
                            <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                          </svg>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <NavLink
                          to={`createSurvey`}
                          rel="noopener noreferrer"
                          href="#"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <IoCreateOutline />
                          <span>Create Survey</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`mysurvey`}
                          rel="noopener noreferrer"
                          href="#"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <FaUserEdit />
                          <span>My surveys</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`surveyResponse`}
                          rel="noopener noreferrer"
                          href="#"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <FaUserEdit />
                          <span>Survey Response</span>
                        </NavLink>
                      </li>
                    </ul>
                  )}

                  <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                      <NavLink
                        to={`/`}
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <IoHomeOutline className="text-xl" />

                        <span>Home</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        rel="noopener noreferrer"
                        
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current text-gray-600"
                        >
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <span onClick= {() => {logOut(); redirect('/')}}>Logout</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        <div className="borderborder-red-400 flex-grow p-4">
          <section className=" space-y-4">
            <Outlet></Outlet>
          </section>
        </div>
      </div>
    </>
  );
}
