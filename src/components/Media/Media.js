import React from 'react';
import './Media.css';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/fantasy/index.css';

/**
 * Creates image or video or returns null based on the post passed in
 * @param {*} props - post
 * @returns - image/video or null
 */
function Media(props) {
  let media;
  if (props.post.is_video){
    media = props.post.secure_media.reddit_video.fallback_url;
    return (
      <div className='media'>
        <video className='video' autoPlay muted controls>
          <source src={media} type='video/mp4'/>
        </video>
      </div>
    );
  } else if(props.post.url_overridden_by_dest && (/\.(jpg|jpeg|png|gif|svg)$/.test(props.post.url_overridden_by_dest))){
    media = props.post.url_overridden_by_dest;
    return (
      <div className='media'>
        <img className='image img-fluid' src={media}>
        </img>  
      </div>
    );
  }

  return (null);
}

export default Media;

