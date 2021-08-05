import React, {useState, useEffect} from 'react';
import SearchMovie from './searchMovie';
import './search.css'

export default function Search() {
    const api = "api_key=0354db1c64f94ab103a126e604311fdf"

    const [title, setTitle] = useState( '' );
    const [sMovie, setSMovie] = useState( [] );

    useEffect( () => {
      const axios = require('axios').default;
      axios.get(`https://api.themoviedb.org/3/search/movie?${api}&page=1&query=${title.title}`)
        .then(resp => {
          setSMovie( resp.data.results[0] )
        })
      }, [title]) 
  
    return (
        <div>
            <div className="search-wrapper">
            <input 
                autoComplete='off'
                placeholder='search movie'
                className='search-wrapper-input'
                type="text" 
                name="title"
                onChange={(e) => setTitle({title: e.target.value })} />
              { title.title !== undefined && title.title !== '' ? <SearchMovie movie={sMovie}/> : null } 
            </div>
        </div>
    )
}
