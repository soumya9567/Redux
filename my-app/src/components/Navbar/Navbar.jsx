import React, { useEffect } from 'react'

const Navbar = ({currentUser}) => {
useEffect(() =>{},[currentUser])
const handleLogout = () =>{
    localStorage.removeItem("currentlyActiveUser")

}

  return (
    <div>
      <h1>{currentUser?.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar
