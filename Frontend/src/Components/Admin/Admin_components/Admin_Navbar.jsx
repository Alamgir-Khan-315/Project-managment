import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// home render
import H_dashboard from './Admin_dashboard'
import H_task from './Admin_task'
import H_member from './Admin_Member'
import H_chat from './Admin_chat'

import { RiLogoutBoxLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { MdMessage, MdAssessment, MdOutlineHorizontalRule, MdRememberMe } from "react-icons/md";

const Co_Navbar = () => {

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
        <div className='co-navbar container mx-auto'>

            <div className="body flex justify-between p-2 items-center">
                <div className="username">Hello {userName}!</div>

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
                    <Link to="/">
                        <div onClick={Logout} className="button bg-blue-400 p-2 font-semibold text-black rounded-[50px]     md:p-3 hover:bg-blue-500 hover:ease-in-out transition hover:scale-105">
                            <div className="log-out flex items-center gap-2 font-semibold">Log out <RiLogoutBoxLine /></div>
                        </div>
                    </Link>
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

            {/* Home components */}
            <div className="home-render">
                {Navbar === "Dashboard" && <H_dashboard />}
                {Navbar === "Task" && <H_task />}
                {Navbar === "Chat" && <H_chat />}
                {Navbar === "Member" && <H_member />}
            </div>
        </div>
    )
}

export default Co_Navbar;