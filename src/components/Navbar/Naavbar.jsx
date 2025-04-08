import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import caret_icon from '../../assets/caret_icon.svg'
import user from '../../assets/user.png'
import { logout } from '../../firebase'

const Navbar = () => {
  const navref=useRef();
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>=80){
      navref.current.classList.add('nav-dark')
    } else{
      navref.current.classList.remove('nav-dark')
    }
  })
},[])
  return (
    <div ref={navref} className='navbar'>
      <div className="left-navbar">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>MOvies</li>
          <li>News&Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li></ul>
      </div>
      <div className="right-navbar">
        <img src={search_icon} alt="" className='icons'/>
        <p>children</p>
        <img src={bell_icon} alt="" />
        <div className='navbar-profile'>
          <img src={user} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className='dropdown'>
            <p onClick={()=>{
              logout()
            }}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
