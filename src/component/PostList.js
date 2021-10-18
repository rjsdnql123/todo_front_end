import React from 'react';

function PostList({ post }) {
    return (
        <div>
            ------------------------------------------------------------------------
            <div>{post.content}</div>
            <div>{post.like}</div>
            <img src={post.photo}></img>
            <div>{post.postCategory?.name}</div>
            <div>{post.view}</div>
            <div>{post.user_id?.username}</div>
            ------------------------------------------------------------------------
        </div>
    )
}

export default PostList;
