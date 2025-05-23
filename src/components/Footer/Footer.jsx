import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Centre</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferances</li>
        <li>Corporation Informatoion</li>
        <li>Contact Us</li>
        <p className='copyright-text'>@ 1997-2025 Netflix, Inc</p>
      </ul>
    </div>
  )
}

export default Footer
