import React from 'react';
import './video.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
  
  SwiperCore.use([Pagination,Navigation]);

export default function Videos(props) {
    const videos = props.videos
    return (
        <div className="videos" >
            <Swiper 
                centeredSlides={true} 
                spaceBetween={0} 
                // pagination={{
                //     "type": "fraction"
                // }} 
                navigation={true} 
                className="mySwiper">

                { videos.results && videos.results.map( (el, i) => {
                    return( 
                        <SwiperSlide className='SwiperSlide-video-wrapper' key={ i }>
                            <p> { el.type } </p>
                            <iframe width="420" height="345" 
                                src={`https://www.youtube.com/embed/${el.key}?=1&`}>
                            </iframe>
                        </SwiperSlide> 
                        )
                    })
                },
            </Swiper>
        </div>
    )
}
