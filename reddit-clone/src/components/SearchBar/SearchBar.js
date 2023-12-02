import React, { useState } from "react";
import {FaSearch} from "react-icons/fa";
import './SearchBar.css';

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