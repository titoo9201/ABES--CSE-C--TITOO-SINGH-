import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiHome } from "react-icons/ti"
import { FaInfoCircle, FaUserSecret } from "react-icons/fa"
import { MdConnectWithoutContact, MdAccountCircle } from "react-icons/md"

function Navbar() {
  const links = [
    { to: "/", label: "Home", icon: <TiHome className="w-5 h-5" /> },
    { to: "/about", label: "About Us", icon: <FaInfoCircle className="w-5 h-5" /> },
    { to: "/contact", label: "Contact Us", icon: <MdConnectWithoutContact className="w-5 h-5" /> },
    { to: "/login", label: "Login", icon: <MdAccountCircle className="w-5 h-5" /> },
    { to: "/register", label: "Register", icon: <FaUserSecret className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-10 py-4 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400">I.T.A Book Store</h1>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <NavLink 
            key={link.to} 
            to={link.to}
            className={({ isActive }) => 
              `transition duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`
            }
          >
            <div className="flex items-center gap-2">
              {link.icon}
              <span>{link.label}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
