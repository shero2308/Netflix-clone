import React, { useEffect, useRef } from 'react'
import "./TitleCards.css"
import card_data from '../../assets/cards/Cards_data'

const TitleCards = ({ title, category }) => {
  const CardsRef = useRef();

  const Handlewheel = (e) => {
    e.preventDefault();
    CardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    CardsRef.current.addEventListener('wheel', Handlewheel)
  }, [])
  return (
    <div className='titleCards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={CardsRef}>
        {card_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
