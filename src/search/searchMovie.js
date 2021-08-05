import React from 'react';
import { Link  } from 'react-router-dom';


export default function SearchMovie(props) {
    const serchMovie = props.movie

    return (
        <>
            { serchMovie !== undefined ? 
                <div className="SearchMovie">
                    <Link className="" target="_blank" to={'/top-20-movies/' + serchMovie.id } >
                        <img src={`http://image.tmdb.org/t/p/w500/${serchMovie.poster_path}`} alt="" width='250px' />
                        <div className="movie-wrapper-info">
                            <p className='movie-wrapper-info-name'> {serchMovie.original_title} </p>
                            <p> Vote: {serchMovie.vote_average} </p>
                            <p> Release: {serchMovie.release_date} </p>
                        </div>
                    </Link>
                </div>  
             : 
             <div className="SearchMovie">
                <div className="not-found">
                    not found
                </div>
            </div>
            }
        </>
    )
}
