import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "./ActorsSwiper.css";


import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css"


import SwiperCore, {
    Pagination, Navigation
  } from 'swiper/core';

  SwiperCore.use([Pagination, Navigation]);

export default function ActorsSwiper(props) {
    const actors = props.actors
    return (
        <div className='ActorsSwiper'>
            <h2 className='component-title'> Starring: </h2>
            <Swiper slidesPerView={'auto'} 
                spaceBetween={30} 
                freeMode={true} 
                // navigation={true}
                pagination={{"type": "progressbar" }} 
                // breakpoints={{
                //     "640": {
                //         "slidesPerView": 3,
                //         "spaceBetween": 0
                //     },
                //     "768": {
                //         "slidesPerView": 5,
                //         "spaceBetween": 0
                //     },
                //     "1024": {
                //         "slidesPerView": 6,
                //         "spaceBetween": 20
                //     }
                // }} 
                className="mySwiper">
                { actors && actors.map(el => {
                    return( 
                        <SwiperSlide className="ActorsSwiper-actor-card" key={el.id}>
                            { el.profile_path === null ?
                                <img src="https://www.allianceplast.com/wp-content/uploads/no-image.png" alt="no photo" width='150px'/>
                                :
                                <img src={`http://image.tmdb.org/t/p/w500/${el.profile_path}`} alt="" height='250px' />
                            }
                            <div className="ActorsSwiper-name">
                                <span> {el.name} </span>
                                <p className="ActorsSwiper-character"> {el.character} </p>
                            </div>
                        </SwiperSlide>
                    )
                    })
                }
            </Swiper>
        </div>
    )
}
