import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';
const TitleCards = ({Title,category}) => {
  const [apiData,setApiData]=useState([]);
  const cardRef=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2NlMmM3M2UxY2I3MzBiNjczZWVkMTViNDI5YTlkYiIsIm5iZiI6MTc0MjI2NjQyNy44MjA5OTk5LCJzdWIiOiI2N2Q4ZTAzYmM1MzM5ZWFiYzYzNjRlNGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5DjTubd4K98c_JySpBnSjQErMdM2VskmjDX8Q3Knq0'
    }
  };
  
  
  const handlewheel=(event)=>{
event.preventDefault();
cardRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    cardRef.current.addEventListener('wheel',handlewheel);
  },[])

  return (
    <div className='titleCards'>
      <h2>{Title?Title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={cardRef}>{apiData.map((card,index)=>{
        return <Link to={`/player/${card.id}`} className='card' key={index} >
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
        </Link>
      })}</div>
    </div>
  )
}

export default TitleCards
