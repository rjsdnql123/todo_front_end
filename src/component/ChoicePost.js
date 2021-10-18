import React, { useEffect, useState } from 'react';
import LongMenu from './LongMenu';
import './choice_post.css';

function ChoicePost({ match }) {
    console.log(match.params.id)

    const postId = match.params.id

    const [post, setPost] = useState({
        content: "",
        id: 0,
        like: 0,
        photo: null,
        postCategory: 0,
        user_id: 0,
        view: 0
    })
    useEffect(() => {
        fetch(`http://3.37.164.241:8080/post/${postId}`, {
            method: 'DELETE',
        }).then((res) => {
            console.log(res, 'res')
            return res.json();
        }).then((res) => {
            setPost(res)
            console.log(res)
        })
    }, [])

    return (
        <div className='choice_post'>
            <LongMenu />
            <section className='choice_post_content'>
                <div className='user_name'>
                    <div>{post.user_id?.username}</div>
                </div>
                <div className='main_content'>
                    <div>{post.postCategory?.name}</div>
                    <div>{post.content}</div>
                    <div>{post.photo}</div>
                </div>
                <div>{post.like}</div>
                <div>{post.view}</div>
            </section>
        </div>
    )
}

export default ChoicePost;
