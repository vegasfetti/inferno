import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { products } from '../../data';
import Card from '../Card/Card';


import './Sales.css'

export default function Sales() {
    return (
        <>
            <div className="salles">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        products.map((product, index) => (
                            <SwiperSlide><Card
                                key={index}
                                {...product}
                                firstPhoto={product.photo[0]}
                            /></SwiperSlide>
                        ))
                    }

                </Swiper>


                <div className="salles_btn">
                    <p>ПОКАЗАТЬ ЕЩЁ</p>
                </div>
            </div>
        </>
    );
}
