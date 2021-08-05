import React from 'react'
import './photos.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
  
  SwiperCore.use([Pagination,Navigation]);

export default function Photos(props) {
    const photos = props.photos
    return (
        <div className="photos" >
            <Swiper 
                slidesPerView={'auto'} 
                spaceBetween={30} 
                // pagination={{
                //     "type": "fraction"
                // }} 
                navigation={true} 
                className="mySwiper">

                { photos && photos.map( (el, i) => {
                    return( 
                        <SwiperSlide className='SwiperSlide-photo-wrapper' key={ i }>
                            <img className='SwiperSlide-photos' src={`http://image.tmdb.org/t/p/w500/${el.file_path}`} width='50%' />
                        </SwiperSlide>
                        )
                    })
                },

            </Swiper>
        </div>
    )
}
