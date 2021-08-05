import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './main.css'

function Main() {
  const api = "api_key=0354db1c64f94ab103a126e604311fdf"

  const [movies, setMovies] = useState([])

  useEffect( () => {
  const axios = require('axios').default;
    axios.get(`https://api.themoviedb.org/3/movie/popular?${api}&page=1`)
      .then(resp => {
        setMovies(resp.data.results);
      })
    }, []) 

  return (
    <div className="main">
        { movies && movies.map(el => {
            return( 
  
              <div className="movie-item-wrapper" key={el.id}>
                <Link  className="movie-item-wrapper-a" to={'/top-20-movies/' + el.id }>
                    <img src={`http://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="" width='250px' />
                    <div className="movie-wrapper-info">
                        <p className='movie-wrapper-info-name'> {el.original_title} </p>
                        <p> Vote: {el.vote_average} </p>
                        <p> Release: {el.release_date} </p>
                    </div>
                </Link>
              </div>
              
              )
          })
        }
    </div>
  );
}

export default Main;