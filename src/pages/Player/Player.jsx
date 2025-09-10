import React, { useState, useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {

  const{id} = useParams()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    type: "",
    publish_date: ""
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjk4NjU4MDEyMTk0NDYzMjdjYTgzYWQ0NWMwZjI1MiIsIm5iZiI6MTc1NzM5ODIyNS40MjQsInN1YiI6IjY4YmZjNGQxNjBjOTkwMDEyNDk0N2NmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5NiWgCt_196MAsCwWPwzGDmhZKqkjRbKaoyxX5hprnc'
  }
};

useEffect(() => {fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));}, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width="90%" height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder="0" allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apiData.publish_date}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
