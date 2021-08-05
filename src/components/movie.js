import React, {useState, useEffect} from 'react';
import './movie.css';
import ActorsSwiper from './ActorsSwiper'
import Photos from './Photos'
import Videos from './videos'
import Recommendations from './Recommendations'

import { Link } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function Movie(props) {
    const id = props.match.params.id

    const [movie, setMovie] = useState([])
    const [actors, setActors] = useState([])
    const [photos, setPhotos] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const [videos, setVideos] = useState([])

    useEffect( () => {
    const axios = require('axios').default;
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0354db1c64f94ab103a126e604311fdf&page=1`)
            .then(resp => {
                setMovie(resp.data);
            })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0354db1c64f94ab103a126e604311fdf&page=1`)
        .then(resp => {
            console.log(resp.data);
            setActors(resp.data.cast);
        })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=0354db1c64f94ab103a126e604311fdf&page=1`)
        .then(resp => {
            setPhotos(resp.data.backdrops);
        })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=0354db1c64f94ab103a126e604311fdf&page=1`)
        .then(resp => {
            setRecommendations(resp.data);
        })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=0354db1c64f94ab103a126e604311fdf&page=1`)
        .then(resp => {
            setVideos(resp.data);
        })
    }, []) 

    
    const runtime = ()=> {
        const hours = Math.floor(movie.runtime / 60);  
        const minutes = movie.runtime % 60;
        return `${hours}h ${minutes}m`;
    }

    console.log((1000000).toLocaleString('us')   );

    return (
        <div className='movie-wrapper'>
            { movie ?
            <div className="movie-img-bg" style={{ 
                backgroundImage: `url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height:'100%', 
                width:'100%'}}>
                <div className="movie-img-bg-cover" style={{
                    height:'100%', 
                    width:'100%',
                    backgroundImage: 'linear-gradient(to right, rgba(8.24%, 4.31%, 4.31%, 1.00) 150px, rgba(8.24%, 4.31%, 4.31%, 0.84) 100%)',
                }}>
                <div className="back">
                    <Link className='back-to-main' to={'/top-20-movies' }>
                        Back to movie list
                    </Link>
                </div>
                <div className="movie-info">
                    <div className="movie-info-img">
                        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" width='100%' height='100%' />
                    </div>
                    <div className="movie-info-about">
                        <h2 className='movie-info-about-title'> {movie.title} </h2>
                        <div className="movie-info-about-relise">
                            <span>Vote: {movie.vote_average } </span> 
                            <span> {movie.release_date} ({ movie.production_countries&& movie.production_countries[0].iso_3166_1}) </span>
                            <span className=""> {runtime()} </span>
                            { movie.genres && movie.genres.map(el => {
                                return(
                                    <span key={el.id}> {el.name} </span>
                                )
                            })} 
                        </div>
                        {movie.budget === 0  
                        ? 
                        null
                        :
                        <p>Budget: { movie.budget && '$' +(movie.budget).toLocaleString('us')} </p>}
                        <p className="movie-info-about-tagline"> {movie.tagline } </p> 
                        <div className='movie-info-about-description'>Description:</div>
                        <div className='movie-info-about-overview'> {movie.overview} </div>

                        <div className="movie-info-about-production_companies">
                            <div>Companies:</div>
                            {   movie.production_companies &&
                                movie.production_companies.map( el => {
                                    return(
                                        <span className='movie-info-about-production_companies-name' key={el.id}>
                                            {el.name }
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                </div>

            </div> : <div className="">waiting...</div>
            }
            <ActorsSwiper actors={actors} />

            <Tabs>
            <h2 className='component-title'>MEDIA</h2>
                <TabList>
                    <Tab>Photos { photos && photos.length }</Tab>
                    <Tab>Videos { videos.results && videos.results.length }</Tab>
                </TabList>

                <TabPanel>
                    <Photos photos={photos}/>
                </TabPanel>
                <TabPanel>
                    <Videos videos={videos}/>
                </TabPanel>
             </Tabs>

             <Recommendations recommendations={recommendations} />
            
        </div>
    )
}



