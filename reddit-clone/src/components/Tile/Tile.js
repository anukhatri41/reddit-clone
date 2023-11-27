import React from "react";
import { Card } from "react-bootstrap";
import TileMedia from "../TileMedia/TileMedia";


function Tile(props){

    return (
      <Card className="text-white" style={{ backgroundColor: "#FF5700" }}>
        <TileMedia media={props.post} />
        <Card.ImgOverlay>
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>/{props.post.subreddit}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    )
}

export default Tile;