import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import '../../../style/Navbar.css'

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header className="">
        <nav className='flexSB z-50 shadow-lg'>
          <ul className={`flex ${click ? "mobile-nav" : "flexSB "} text-lg`} onClick={() => setClick(false)}>
            <li className="nav">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav">
              <Link to='/courses'>All Courses</Link>
            </li>
            <li className="nav">
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
