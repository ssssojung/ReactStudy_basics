import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import portfolio from '../json/portfolio.json';
function Portfolioin(props) {
    const itemimg = portfolio[props.portfolioId].img;

    return (
        <div id={props.portfolioId} 
        className='py-5'>
            <h2 
            className='text-uppercase text-center'>
                {props.portfolioId}
            </h2>
            <p className='text-center'>
                {portfolio[props.portfolioId].title}
            </p>

<Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper d-flex align-items-center"
                
                >

            {
                itemimg.map((v, i) =>{
                    return(
                        <SwiperSlide key={'shop'+i}>
                            <img src={v} alt="" />
                        </SwiperSlide>
                    )
                })
            }
            
                </Swiper> 

         

        </div>
    );
}

export default Portfolioin;