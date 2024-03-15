import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header className='navbar'>
        <ul>
            <li> <Link to= "/">Home </Link> {" "}</li>
            <li><Link to= "/register">Register </Link>{" "}</li>
            <li><Link to= "/dashboard">Dashboard </Link>{" "}</li>
        </ul>
        </header>
  )
}

export default Navbar