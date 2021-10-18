import React from "react";
import "./ExampleComponent.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";


function ExampleComponent() {

    const clickEvent = ((index) => {
        console.log('click', index)
    })

    return (
        <Swiper style={{ height: '30px', width: '500px' }} spaceBetween={5} slidesPerView={5} onSlideChange={() => console.log('slide change')} >
            {example.map((x, i) => {
                return <SwiperSlide onClick={() => clickEvent(i)}>{x}</SwiperSlide>

            })}
        </Swiper>

    );

}

export default ExampleComponent;
const example = ['건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요']