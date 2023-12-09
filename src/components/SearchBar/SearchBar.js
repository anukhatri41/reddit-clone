import React from "react";
import {FaSearch} from "react-icons/fa";
import './SearchBar.css';

/**
 * Search bar that also sets the list of posts for other components to use
 * @param {method} setPosts - updates posts so other functions can utilize it
 * @param {method} setLastPost - update the "after" value for consequent loads
 * @param {string} input - used for search query
 * @param {method} setInput - set input so other functions can utilize it
 * @returns Search Bar that retrieves post from reddit api
 */
function SearchBar({setPosts, setLastPost, input, setInput}){

    const fetchData = (value) => {
        fetch("https://www.reddit.com/search.json?q=" + value).then(res => {
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
       };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input className="input-custom" placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    );
}

export default SearchBar;