
import React, {useState, useEffect} from 'react';
import Post from '../Post/Post';
import Tile from '../Tile/Tile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css';


function Home() {
  const [posts, setPosts] = useState([]);
  const [lastPost, setLastPost] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
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
          setPopularPosts(data.data.children.slice(5,10));
        }
      });
    });
  }, []);

  return (
   <div id='wrapper'>
      <header className="Home-header">
         <h2 className='fw-bold'>Reddit - Popular Page</h2>
      </header>
      <Container>
        <Row className='row--nowrap'>
        {(popularPosts != null) ? popularPosts.map((post, index) => 
          <Col>
            <Tile key={index} post={post.data} />
          </Col>) : ''}
        </Row>
      </Container>
      <div className='post-box'>
         <div className="posts">
            {(posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''}
         </div>
      </div>
      <div className='btn-custom'>
         <Button className='btn' onClick={handleClick}>Load More</Button>
      </div>
      
   </div>
      
  );
}

export default Home;
