import React, { useState } from 'react'
import axios from "axios";

import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

const AddUser = () => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Number, setNumber] = useState("");
    const [Password, setPassword] = useState("");
    const Role = "Member"

    const Submit = (event) => {
        event.preventDefault();
        alert("Clicked");
        axios.post("http://localhost:3001/AddUser", {
            Name,
            Email,
            Number,
            Password,
            Role,
        })
            .then((res) => {
                console.log(res);
                alert("User Added")
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div>
            <form onSubmit={Submit} className='backdrop-blur-0 flex flex-col items-center bg-gray-600 rounded-lg mt-[5%] w-[50%] mx-auto'>

                <div className="title w-full px-[30px] mt-[10px] relative flex justify-between items-center">
                    <h1 className='font-bold text-2xl pt-[20px]'>Add new member</h1>

                </div>

                <div className="email relative mt-7 w-[80%]  hover:bg-gray-600 hover:rounded-lg">
                    <FaRegUser className="absolute mt-3 ml-3" />
                    <input onChange={(e) => setName(e.target.value)}
                        type="text" placeholder="Full name" className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10" required
                    />
                </div>
                <div className="password relative mt-7 w-[80%]  hover:bg-gray-600 hover:rounded-lg">
                    <IoIosPhonePortrait className="absolute mt-3 ml-3" />
                    <input onChange={(e) => setNumber(e.target.value)}
                        type="number" placeholder="Phone" className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10" required
                    />
                </div>

                <div className="email relative mt-7 w-[80%]  hover:bg-gray-600 hover:rounded-lg">
                    <MdOutlineMailOutline className="absolute mt-3 ml-3" />
                    <input onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder="Email" className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10" required
                    />
                </div>

                <div className="password relative mt-7 w-[80%]  hover:bg-gray-600 hover:rounded-lg">
                    <FaLock className="absolute mt-3 ml-3" />
                    <input onChange={(e) => setPassword(e.target.value)}
                        type="password" placeholder="Password" className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10" required
                    />
                </div>

                {/* buttons */}
                <button type='submit' className='bg-green-600 p-2 px-5 rounded-lg my-[20px]     hover:ease-in-out transition hover:scale-105 hover:bg-green-700'>Add user</button>
            </form>
        </div>
    )
}

export default AddUser
