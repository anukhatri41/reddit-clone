import React from 'react';
import PropTypes from 'prop-types';
import './Media.css';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/fantasy/index.css';

function Media(props) {
  let media;
  if (props.post.is_video){
    media = props.post.secure_media.reddit_video.fallback_url;
    return (
      <div>
        <video width='50%' height='50%' controls autoplay muted>
          <source src={media} />
        </video>
      </div>
    );
  } else if(props.post.url_overridden_by_dest && (/\.(jpg|jpeg|png|gif)$/.test(props.post.url_overridden_by_dest))){
    media = props.post.url_overridden_by_dest;
    return (
      <div>
        <img className='img-fluid'src={media} width='auto' height='auto'/>
      </div>
    );
  }

  return (null);
}

export default Media;
