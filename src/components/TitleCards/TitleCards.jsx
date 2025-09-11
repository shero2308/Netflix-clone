import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {

  const[apiData, setApiData] = useState([]);
  const CardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjk4NjU4MDEyMTk0NDYzMjdjYTgzYWQ0NWMwZjI1MiIsIm5iZiI6MTc1NzM5ODIyNS40MjQsInN1YiI6IjY4YmZjNGQxNjBjOTkwMDEyNDk0N2NmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NiWgCt_196MAsCwWPwzGDmhZKqkjRbKaoyxX5hprnc'
  }
};

  const Handlewheel = (e) => {
    e.preventDefault();
    CardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    CardsRef.current.addEventListener('wheel', Handlewheel)
  }, [])

  return (
    <div className='titleCards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={CardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
