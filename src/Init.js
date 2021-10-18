import React, { useEffect, useState } from 'react'
import './App.css';
import ASD from './Aeact-swiper';

import { Carousel } from '@trendyol-js/react-carousel';
import ExampleComponent from './exam/Exam';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import ChoicePost from './component/ChoicePost';
import PostList from './component/PostList';


function Init() {


    const [projectList, setProjectList] = useState([])

    useEffect(() => {
        fetch('http://3.37.164.241:8080/post', {
            method: 'GET',
        }).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res)
            setProjectList(res)
        })
    }, [])

    return (
        <div className="App">
            <div>
                <ExampleComponent />
                {projectList.map((post) => {
                    return (
                        <div>
                            <PostList post={post} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Init;


