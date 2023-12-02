import React, { useState } from "react";
import { Button } from 'react-bootstrap';

function Load({lastPost, setPosts, setLastPost, input}){
    const handleClick = () => {
        let URL = "https://www.reddit.com/search.json?q=" + input + "&after=" + lastPost;
        if (input === null){
            URL = "https://www.reddit.com/r/popular/.json?after=" + lastPost;
        }
        fetch(URL).then(res => {
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
         {((input?.length > 0) || input === null) && <Button className='btn' onClick={handleClick}>Load More</Button>}
        </div>
    );
}

export default Load;