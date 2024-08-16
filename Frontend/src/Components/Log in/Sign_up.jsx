import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { MdArrowBack } from "react-icons/md";

const Sign_up = () => {

  //////////////////////////////// Password is match

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");

  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true); // For validation feedback

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(Password, e.target.value);
  };

  const validatePasswords = (Password, confirmPassword) => {
    setIsMatch(Password === confirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMatch) {
      // Handle form submission logic here
      console.log("Passwords match. Form submitted.");
    } else {
      console.log("Passwords do not match.");
    }
  };

  //////////////////////////////// password match ends

  // combo box
  const [Role, setRole] = useState("Manager");

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  //////////////////////////////// end combo

  const navigate = useNavigate();

  //////////////////////////////// post
  const Submit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/AddUser", {
        Name,
        Email,
        Number,
        Password,
        Role,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="sign-up-box px-[40px] pt-[30%] py-9 container     lg:w-[40%] md:w-[60%] md:mx-auto md:pt-[60px]">
        {/*  form  */}
        <form onSubmit={Submit}>
          <Link to="/" className="cursor-pointer">
            <MdArrowBack className="text-xl mb-3" />
          </Link>
          <h1 className="text-xl mt-[30px] font-bold">Create Account</h1>
          <p className="text-sm mt-2">Please fill the input box here</p>

          {/* combo box */}
          <div className="combo mt-4">
            <select
              id="comboBox"
              placeholder="-- Please choose your Role --"
              onChange={handleChange}
              className="bg-transparent text-white w-full font-bold text-center border border-gray-600 rounded-lg p-2">
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
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10"
              required
            />
          </div>
          <div className="password relative mt-7 hover:bg-gray-600 hover:rounded-lg">
            <IoIosPhonePortrait className="absolute mt-3 ml-3" />
            <input
              type="number"
              placeholder="Phone"
              onChange={(e) => setNumber(e.target.value)}
              className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10"
              required
            />
          </div>

          <div className="email relative mt-7 hover:bg-gray-600 hover:rounded-lg">
            <MdOutlineMailOutline className="absolute mt-3 ml-3" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10"
              required
            />
          </div>

          <div className="password relative mt-7 hover:bg-gray-600 hover:rounded-lg">
            <FaLock className="absolute mt-3 ml-3" />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={handlePasswordChange}
              className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10"
              required
            />
          </div>

          <div className="password relative mt-7 hover:bg-gray-600 hover:rounded-lg">
            <FaLock className="absolute mt-3 ml-3" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="bg-transparent active:border-0 border-b border-gray-600 w-full h-[40px] px-10"
              required
            />
          </div>

          {!isMatch && <p style={{ color: "red" }}>Passwords do not match.</p>}

          {/* buttons */}
          <button
            type="submit"
            className="login-btn mt-[30%] bg-blue-400 p-3  rounded-[50px] flex justify-center mx-auto font-semibold text-black w-[30%]     md:mt-[40px]   hover:bg-blue-500 hover:ease-in-out transition hover:scale-105">
            SIGN UP
          </button>
          <p className="text-sm mt-6 text-center ">
            Already have an account?
            <Link to="/" className="cursor-pointer">
              {" "}
              <span className="text-blue-600 hover:underline"> Sign in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign_up;
