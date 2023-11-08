import './App.css';
import React, {useState, useEffect} from 'react';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [posts, setPosts] = useState([]);
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
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='fw-bold'>Reddit - Popular Page</h2>
      </header>
      <div className='post-box'>
        <div className="posts">
          {(posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''}
        </div>
      </div>
      
    </div>
  );
}

export default App;
