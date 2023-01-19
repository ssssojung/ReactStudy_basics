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

            <div className='container d-flex'>
                <div className='col-9 flex-column'>
                    <div className='d-flex'>
                        <img src={itemimg[0]} className='pe-3' style={{width: "324px"}}alt="" />
                        <img src={itemimg[1]} className='pe-3' style={{width: "324px"}}alt="" />
                        <img src={itemimg[2]} className='pe-3' style={{width: "324px"}}alt="" />
                    </div>
                    <div className='d-flex' style={{height:"300px"}}>
                        <img src={itemimg[3]} className='col-8 pe-3 pt-3' style={{width: "648px"}}alt="" />
                        <img src={itemimg[4]} className='col-4 pe-3 pt-3' style={{width: "324px"}}alt="" />
                    </div>
                </div>
                <div  className='col-3'>
                    <img src={itemimg[5]} style={{width:"300px",height:"608px"}}alt="" />
                </div>
            </div>
{/* <Swiper
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
            
                </Swiper>  */}

         

        </div>
    );
}

export default Portfolioin;