//import React from 'react'
import './TitleCards.css'
//import cards_data from '../../assets/cards/Cards_data'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const TitleCards = ({title = "Popular", category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2JjNzdiYmY4Mjg2YzRhOTQ0MTA0OTdhZjgwOTZhOCIsInN1YiI6IjY2NDdlZTY0NzUwOTY5OGEwMTFkMGMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EdniwNIxM9MC9D0Hv0EOQ4HBOg92NQigriQbjXLLRLU'
    }
  };

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${encodeURIComponent(category?category:"now_playing")}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='title_cards'>
      <h2>{title}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={'https://image.tmdb.org/t/p/w500' + card.backdrop_path} alt=''/>
              <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards