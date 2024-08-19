import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import { FaLock } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

import Log_in_img from "../../assets/Images/Log_in.png";


const Log_in = () => {

  const navigate = useNavigate()

  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [Role, setRole] = useState("Admin")

  const handleChange = (e) => { setRole(e.target.value); }

  const landing = (id) => {
    if (Role === "Admin") { navigate('/Admin_home/' + id) }
    if (Role === "Manager") { navigate('/Manager_home/' + id) }
    if (Role === "Member") { navigate('/User_home/' + id) }
  }

  // const submit() => {}
  const Submit = async (event) => {
    if (!Name.trim()) {
      alert('Name label is empty');
    }
    event.preventDefault();
    axios.post("http://localhost:3001/login", { Role, Name, Password })

      .then((res) => {
        console.log(res.data);
        const id = res.data._id
        landing(id)
        alert("Log in successful")

      })
      .catch((err) => {
        console.log(err)
        alert("Log in failed")
      }
      );

  };

  return (
    <div className="log-in-box px-[40px] pt-[30%] flex flex-col container       md:w-[60%] lg:w-[40%] lg:pt-[20px] md:mx-auto md:pt-[60px]">
      <div className="log-in pt-[10px]"></div>
      <img src={Log_in_img} alt="Log in img" className="h-[200px] lg:w-[250px] mx-auto" />

      <h1 className="text-xl font-bold">Log in</h1>
      <p className="text-sm mt-2">Please sign in to continue</p>

      {/* Combo box */}
      <form onSubmit={Submit} >
        <div className="email relative mt-7 hover:bg-gray-600 hover:rounded-lg">
          <FaRegUser className="absolute mt-3 ml-3" />
          <select
            id="comboBox"
            placeholder="-- Please choose your Role --"
            onChange={handleChange}
            className="bg-transparent text-white w-full font-bold text-center border border-gray-600 rounded-lg p-2">
            <option value="Admin" className="text-black">
              -- Admin --
            </option>
            <option value="Manager" className="text-black">
              -- Manager --
            </option>
            <option value="Member" className="text-black">
              -- Member --
            </option>
          </select>
        </div>

        <div className="email relative mt-7 hover:bg-gray-600 hover:rounded-lg">
          <FaRegUser className="absolute mt-3 ml-3" />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10"
          />
        </div>
        <div className="password relative mt-7 hover:bg-gray-600 hover:rounded-lg">
          <FaLock className="absolute mt-3 ml-3" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10"
          />
        </div>


        {/* buttons */}

        <button type="submit" className="login-btn mt-[30%] bg-blue-400 p-3 flex justify-center  rounded-[50px] mx-auto font-semibold text-black w-[30%]         md:mt-[50px]   hover:bg-blue-500 hover:ease-in-out transition hover:scale-105">
          <h1 className="text-center">LOG IN</h1>
        </button>
      </form>
      <p className="text-sm mt-2 text-center text-blue-600 hover:underline">
        Forget Password?
      </p>
      <p className="text-sm mt-[40px] text-center">
        Don't have an account?{" "}
        <Link to="/Sign_up">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Sign up
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Log_in;
