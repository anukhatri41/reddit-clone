
import React, {useState, useEffect} from 'react';
import Post from '../Post/Post';
import Tile from '../Tile/Tile';
import SearchBar from '../SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import PostsList from '../PostsList/PostsList';
import Load from '../Load/Load';


function Home() {
  const [posts, setPosts] = useState([]);
  const [lastPost, setLastPost] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [input, setInput] = useState(null);
  //const [isLoading, setIsLoading] = useState(false);
  //const [subreddit, setSubreddit] = useState('webdev');

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
         <h2 className='fw-bold'>Reddit</h2>
      </header>
      <div className='search-bar-container'>
        <SearchBar setPosts={setPosts} setLastPost={setLastPost} input={input} setInput={setInput}/>
      </div>
      
      <Container>
        <Row className='row--nowrap'>
        {(popularPosts != null) ? popularPosts.map((post, index) => 
          <Col>
            <Tile key={index} post={post.data} />
          </Col>) : ''}
        </Row>
      </Container>
      <div className='post-box'>
        <PostsList posts={posts}/>
      </div>
      <Load setPosts={setPosts} setLastPost={setLastPost} lastPost={lastPost} input={input} />
      
   </div>
      
  );
}

export default Home;
