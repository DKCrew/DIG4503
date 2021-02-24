import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Posts = () => {
const [post, setPosts] = useState(0);

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res => {
        const responsePosts = res.data;
        setPosts(responsePosts);
    }));
}, []);



return(
    <div>
        <h1>Post</h1>
        {
            post &&
            post.map((post) => {
                const {id, title} = post;
                return (
                    <div key = {id}>
                        <h2>{title}</h2>
                        <h3>This post is from user: {id}</h3>
                    </div>
                )
            })
        }
    </div>
);

};

export default Posts