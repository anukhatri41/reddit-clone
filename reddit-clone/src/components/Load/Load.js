import React, { useState } from "react";
import { Button } from 'react-bootstrap';

function Load({lastPost, setPosts, setLastPost, input}){
    const handleClick = () => {
        fetch("https://www.reddit.com/search.json?q=" + input + "&after=" + lastPost).then(res => {
          if(res.status !== 200){
            console.warn("Warning: Something is wrong with the api.");
            return;
          }
     
          res.json().then(data => {
            if(data != null) {
              setPosts((prevPosts) => [...prevPosts, ...data.data.children]);
              setLastPost(data.data.after);
            }
          });
        })
       };

    return (
        <div className='btn-custom'>
         {<Button className='btn' onClick={handleClick}>Load More</Button>}
      </div>
    );
}

export default Load;