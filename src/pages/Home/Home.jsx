import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Naavbar'
import money_heist from '../../assets/money_heist.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={money_heist} alt="" className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt=""className='caption-img' />
          <p>Dicovering his tiees to a secrete ancient order, a young man living in modern istanbul embark on a quest to save the city from an immortal enemy.</p>
          <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt="" />play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
        <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards Title={"BlockBuster Movies" }category={"top_rated"}/>
        <TitleCards Title={"Only on Netflix"}category={"popular"}/>
        <TitleCards Title={"Upcoming"}category={"upcoming"}/>
        <TitleCards Title={"Top Pics for You"}category={"now_playing"}/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
