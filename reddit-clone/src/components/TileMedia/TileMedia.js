import React from "react";
import { Card } from "react-bootstrap";
import reddit_logo from "../../assets/Reddit_Mark_OnWhite.svg";

/*
<video width='100%' height='auto'>
          <source src={media}/>
        </video>
*/
function TileMedia(props){
  let media;
  if (props.post.is_video){
    media = props.thumbnail;
  } else if(props.post.url_overridden_by_dest && (/\.(jpg|jpeg|png|gif|svg)$/.test(props.post.url_overridden_by_dest))){
    media = props.post.url_overridden_by_dest;
  } else {
    media = reddit_logo
  }

  return (
    <div className="tile-bgimage" style={{backgroundImage: `url('${media}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`}}>
      {props.children}
    </div>

  );
}

export default TileMedia;
 //     <Card.Img src={reddit_logo}></Card.Img>