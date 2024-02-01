import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id} remove={remove}/>
            )}
        </div>
    );
};

export default PostList;