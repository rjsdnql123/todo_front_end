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
            {/* <SwiperSlide onClick={clickEvent}>Slide 1</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 2</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 3</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 4</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 5</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 6</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 7</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 8</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 9</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 10</SwiperSlide>
            <SwiperSlide onClick={clickEvent}>Slide 11</SwiperSlide> */}


        </Swiper>

    );

}

export default ExampleComponent;
const example = ['건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요']