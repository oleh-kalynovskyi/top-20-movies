import React from 'react';
import './Recommendations.css'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";


import SwiperCore, {
    Pagination, Navigation
  } from 'swiper/core';

  SwiperCore.use([Pagination, Navigation]);

export default function Recommendations(props) {
    const recommendations = props.recommendations
    return (
        <div className='recommendations'>
            <h2 className='component-title'> Recommendations: </h2>
            <Swiper 
                slidesPerView={'auto'}
                spaceBetween={20} 
                freeMode={true}
                // navigation={true}
                pagination={{"type": "progressbar" }} 
                className="mySwiper">
                { recommendations.results && recommendations.results.map(el => {
                    return( 
                        <SwiperSlide className="recommendations-items" key={el.id}>
                            {   el.poster_path === null ?
                                <img src="https://www.allianceplast.com/wp-content/uploads/no-image.png" alt="no photo" width='150px'/>
                                :
                                <img src={`http://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="" width='150px' />
                            }
                            <span> { el.original_title } </span>
                            <div className="recommendations-items-detailse" >
                                <span>Vote: { el.vote_average } </span>
                                <span>Release: { el.release_date } </span>
                            </div>
                        </SwiperSlide>
                    )
                    })
                }
            </Swiper>
        </div>
    )
}
