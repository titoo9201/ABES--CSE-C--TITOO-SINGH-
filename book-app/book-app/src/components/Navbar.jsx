import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiHome } from "react-icons/ti"
import { FaInfoCircle } from "react-icons/fa"
import { MdConnectWithoutContact, MdAccountCircle } from "react-icons/md"
import { FaUserSecret } from "react-icons/fa6"

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-10 py-4 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400">MyLogo</h1>

      <div className="flex items-center gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `transition duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <TiHome className="w-7 h-7" />
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `transition duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <FaInfoCircle className="w-7 h-7" />
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `transition duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <MdConnectWithoutContact className="w-7 h-7" />
        </NavLink>

        <NavLink 
          to="/login"
          className={({ isActive }) => 
            `transition duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <MdAccountCircle className="w-7 h-7" />
        </NavLink>

        <NavLink 
          to="/register"
          className={({ isActive }) => 
            `transition duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <FaUserSecret className="w-7 h-7" />
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
