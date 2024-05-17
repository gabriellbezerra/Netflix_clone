//import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useEffect, useRef } from 'react'

const TitleCards = ({title = "Popular"}) => {

  const cardsRef = useRef();

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.srcollLeft += event.deltaY;
  }
  
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='title_cards' title={title}>
      <h2>{title}</h2>
      <div className="card_list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
          return <div className='card' key={index}>
            <img src={card.image} alt=''/>
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards