import React from "react";
import { Card } from "react-bootstrap";
import reddit_logo from "../../assets";

/*
<video width='100%' height='auto'>
          <source src={media}/>
        </video>
*/
function TileMedia(props){
  let media;
  if (props.post.is_video){
    media = props.post.secure_media.reddit_video.fallback_url;
    return (
      <div>
        <Card.Img src={media}></Card.Img>
      </div>
    );
  } else if(props.post.url_overridden_by_dest && (/\.(jpg|jpeg|png|gif)$/.test(props.post.url_overridden_by_dest))){
    media = props.post.url_overridden_by_dest;
    return (
      <Card.Img src={media}></Card.Img>
    );
  }

  return (
    <Card.Img src={reddit_logo}></Card.Img>
  );
}

export default TileMedia;
