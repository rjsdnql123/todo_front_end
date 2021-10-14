import React from "react";
import "./ExampleComponent.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

class ExampleComponent extends React.Component {
    render() {
        return (
            <main className="ExampleComponent">
                <div className="main-wrap">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={8}
                        initialSlide={1}
                        centeredSlides={true}
                    >
                        <SwiperSlide>
                            <div
                                className="main-slide-item"
                            // style={{ background: "url(images/example.png)" }}
                            >
                                <p>예제</p>
                                <span>2021.05.28 | 예제</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="main-slide-item"
                            // style={{ background: "url(images/example.png)" }}
                            >
                                <p>예제</p>
                                <span>2021.05.30 | 예제</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="main-slide-item"
                            // style={{ background: "url(images/example.png)" }}
                            >
                                <p>예제</p>
                                <span>2021.05.30 | 예제</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </main>
        );
    }
}

export default ExampleComponent;
