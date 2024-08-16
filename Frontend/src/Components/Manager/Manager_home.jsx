import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// home render
import M_dashboard from './Manager_components/Manager_dashboard'
import M_task from './Manager_components/Manager_task'
import M_member from './Manager_components/Manager_Member'
import M_chat from './Manager_components/Manager_chat'

import { RiLogoutBoxLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { MdMessage, MdAssessment, MdOutlineHorizontalRule, MdRememberMe } from "react-icons/md";

const Manager_home = () => {

    const [Navbar, setNavbar] = useState("Dashboard")
    const [userName, setUserName] = useState('');

    // user data fetch
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/FetchData/${id}`)
            .then((res) => {
                console.log(res.data)
                setUserName(res.data.Name)
            })
            .catch(err => console.log(err))
    }, [id])

    // logout
    const Logout = () => {
        localStorage.removeItem('LoginToken');
        alert("Log out successful")
    }

    return (
        <div className='co-navbar'>

            <div className="body flex  justify-between p-2 items-center         md:hidden">
                <div className="username">{userName}!</div>

                <div className="icon hidden md:flex">
                    <ul className='list-none inline-flex gap-5'>
                        <li onClick={() => setNavbar("Dashboard")} className='cursor-pointer p-2 rounded-lg  '>
                            <h2 className='items-center gap-2 hidden md:flex'>Dashboard <MdAssessment /></h2> {Navbar === "Dashboard" ? <MdOutlineHorizontalRule className='w-full size-6 text-blue-500' /> : <></>}</li>

                        <li onClick={() => setNavbar("Task")} className='cursor-pointer p-2 rounded-lg '>
                            <h2 className='items-center gap-2 hidden md:flex'>Task <FaTasks /> </h2> {Navbar === "Task" ? <MdOutlineHorizontalRule className='w-full size-6 text-blue-500' /> : <></>}</li>

                        <li onClick={() => setNavbar("Chat")} className='cursor-pointer p-2 rounded-lg '>
                            <h2 className=' items-center gap-2 hidden md:flex'>Chat <MdMessage /> </h2> {Navbar === "Chat" ? <MdOutlineHorizontalRule className='w-full size-6 text-blue-500' /> : <></>}</li>

                        <li onClick={() => setNavbar("Member")} className='cursor-pointer p-2 rounded-lg'>
                            <h2 className=' items-center gap-2 hidden md:flex'>Members <MdRememberMe /> </h2> {Navbar === "Member" ? <MdOutlineHorizontalRule className='w-full size-6 text-blue-500' /> : <></>} </li>
                    </ul>

                </div>

                <div className="log-out flex items-center gap-3">
                    <div onClick={Logout} className="button bg-blue-400 p-2 font-semibold text-black rounded-[50px]     md:p-3 hover:bg-blue-500 hover:ease-in-out transition hover:scale-105">
                        <Link to="/"><div className="log-out flex items-center gap-2 font-semibold">Log out <RiLogoutBoxLine /></div></Link>
                    </div>
                </div>

            </div>


            {/* mob nav */}
            <div className='flex md:hidden justify-center'>
                <ul className='list-none inline-flex text-xl gap-5'>
                    <li onClick={() => setNavbar("Dashboard")} className='cursor-pointer p-2 rounded-lg  '>
                        <MdAssessment />{Navbar === "Dashboard" ? <MdOutlineHorizontalRule className='w-full size-6 text-blue-500' /> : <></>}</li>

                    <li onClick={() => setNavbar("Task")} className='cursor-pointer p-2 rounded-lg '>
                        <FaTasks />  {Navbar === "Task" ? <MdOutlineHorizontalRule className='w-full size-6 text-blue-500' /> : <></>}</li>

                    <li onClick={() => setNavbar("Chat")} className='cursor-pointer p-2 rounded-lg '>
                        <MdMessage />{Navbar === "Chat" ? <MdOutlineHorizontalRule className='w-full size-6 text-blue-500' /> : <></>}</li>

                    <li onClick={() => setNavbar("Member")} className='cursor-pointer p-2 rounded-lg'>
                        <MdRememberMe /> {Navbar === "Member" ? <MdOutlineHorizontalRule className='w-full size-6 text-blue-500' /> : <></>} </li>
                </ul>
            </div>


            {/* mob Home components */}
            <div className="home-render flex    md:hidden">
                {Navbar === "Dashboard" && <M_dashboard />}
                {Navbar === "Task" && <M_task />}
                {Navbar === "Chat" && <M_chat />}
                {Navbar === "Member" && <M_member />}
            </div>

            {/* New navbar */}
            <div className="home-2 hidden md:flex">
                <div className="body flex flex-col w-[200px] bg-gray-800 h-screen p-8  justify-between items-center">
                    <div className="username">
                        <div className="username">Hello {userName}!</div>
                    </div>

                    <div className="icon hidden md:flex h-[50%] w-[130px] text-center items-center">
                        <ul className='list-none w-[100px] text-center justify-center'>
                            <li onClick={() => setNavbar("Dashboard")} className='cursor-pointer p-2 items-center gap-2 hidden md:flex  rounded-lg '>
                                {Navbar === "Dashboard" ? <h2 className='items-center gap-2 hidden md:flex border border-blue-500 p-2 rounded-lg scale-105'>Dashboard <MdAssessment /></h2>
                                    : <h2 className='items-center gap-2 hidden md:flex'>Dashboard <MdAssessment /></h2>
                                }
                            </li>

                            <li onClick={() => setNavbar("Task")} className='items-center gap-2 hidden md:flex p-2  rounded-lg  '>
                                {Navbar === "Task" ? <h2 className='items-center gap-2 hidden md:flex border border-blue-500 p-2 rounded-lg ease-in-out transition scale-110'>Task <FaTasks /> </h2>
                                    : <h2 className='items-center gap-2 hidden md:flex'>Task <FaTasks /> </h2>
                                }</li>

                            <li onClick={() => setNavbar("Chat")} className='cursor-pointer items-center gap-2 hidden md:flex p-2  rounded-lg'>
                                {Navbar === "Chat" ? <h2 className='items-center gap-2 hidden md:flex border border-blue-500 p-2 rounded-lg scale-105'>Chat <MdMessage /> </h2>
                                    : <h2 className=' items-center gap-2 hidden md:flex'>Chat <MdMessage /> </h2>
                                }</li>

                            <li onClick={() => setNavbar("Member")} className='cursor-pointer items-center gap-2 hidden md:flex p-2   rounded-lg'>
                                {Navbar === "Member" ? <h2 className='items-center gap-2 hidden md:flex border border-blue-500 p-2 rounded-lg scale-105'>Members <MdRememberMe /> </h2>
                                    : <h2 className=' items-center gap-2 hidden md:flex'>Members <MdRememberMe /> </h2>
                                }</li>
                        </ul>

                    </div>

                    <div className="log-out flex items-center gap-3">
                        <div onClick={Logout} className="button bg-blue-400 p-2 font-semibold text-black rounded-[50px]     md:p-3 hover:bg-blue-500 hover:ease-in-out transition hover:scale-105">
                            <Link to="/"><div className="log-out flex items-center gap-2 font-semibold">Log out <RiLogoutBoxLine /></div></Link>
                        </div>
                    </div>

                </div>

                <div className="home-render mx-auto mt-[20px] md:min-w-[1000px] md:max-w-[1200px]">
                    {Navbar === "Dashboard" && <M_dashboard />}
                    {Navbar === "Task" && <M_task />}
                    {Navbar === "Chat" && <M_chat />}
                    {Navbar === "Member" && <M_member />}
                </div>
            </div>
        </div>
    )
}

export default Manager_home;
