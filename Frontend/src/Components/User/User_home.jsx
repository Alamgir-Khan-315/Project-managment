import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from 'react-router-dom'

const User_home = () => {
  return (
    <div>
      user home
      <Link to="/">
        <RiLogoutBoxLine />
      </Link>
    </div>
  )
}

export default User_home
