import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import Logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_icon from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../Firebase'


const Navbar = () => {

  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
      })
  }, [])
  
  return (
    <div ref={navRef} className='Navbar'>
      <div className="navbar-left">
        <img src={Logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='search_icon' />
        <p>Childern</p>
        <img src={bell_icon} alt="" className='bell_icon' />
        <div className="profile-icon">
          <img src={profile_icon} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>SignOut</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
