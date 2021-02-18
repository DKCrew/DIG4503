import React, {useState, useEffect} from 'react';
import axios from "axios";

const Posts = () => {
const [post, postCount] = useState(0);

useEffect(() => {
    console.log("Use effect ran");
}, []);

useEffect(() => {
    console.log("Use effect ran");
}, [post]);

useEffect(() => {

    console.log("Use effect ran");

    return() => {

console.log("return is being run");

    }

}, []);

return(
    <div>
        <h1>Post</h1>
        <p>Number of Posts: {post}</p>
        <button onClick = { () => postCount(post + 1)}>Add a post</button>
    </div>
);

};

export default Posts