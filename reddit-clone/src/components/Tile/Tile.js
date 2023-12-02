import React from "react";
import { Card } from "react-bootstrap";
import TileMedia from "../TileMedia/TileMedia";
import './Tile.css';

function Tile(props){

    return (
      <Card style={{ backgroundColor: "#FF5700" }}>
        <TileMedia post={props.post}>
          <div className="align-bottom">
            <Card.Title className="text-white">{props.post.title.substring(0, 30)}{props.post.title.length > 30 ? "..." : ""}</Card.Title>
            <Card.Text className="text-white">/{props.post.subreddit}</Card.Text>
          </div>
          
        </TileMedia>
      </Card>
    )
}

export default Tile;

//     