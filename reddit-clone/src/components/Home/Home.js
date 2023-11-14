
import React, {useState, useEffect} from 'react';
import Post from '../Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Home.css';


function Home() {
  const [posts, setPosts] = useState([]);
  const [lastPost, setLastPost] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [subreddit, setSubreddit] = useState('webdev');

  const handleClick = () => {
   fetch("https://www.reddit.com/r/popular/.json?after=" + lastPost).then(res => {
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
   });
  };

  useEffect(() => {
    fetch("https://www.reddit.com/r/popular/.json").then(res => {
      if(res.status !== 200){
        console.warn("Warning: Something is wrong with the api.");
        return;
      }

      res.json().then(data => {
        if(data != null) {
          setPosts(data.data.children);
          setLastPost(data.data.after);
        }
      });
    });
  }, []);

  return (
   <div>
      <header className="Home-header">
         <h2 className='fw-bold'>Reddit - Popular Page</h2>
      </header>
      <div className='post-box'>
         <div className="posts">
            {(posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''}
         </div>
      </div>
      <div className='btn-custom'>
         <Button class='btn' onClick={handleClick}>Load More</Button>
      </div>
      
   </div>
      
  );
}

export default Home;
