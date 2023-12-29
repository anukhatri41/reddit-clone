import React from "react";
import { Card } from "react-bootstrap";
import TileMedia from "../TileMedia/TileMedia";
import './Tile.css';

/**
 * Card that display a post from the poular page with text overlaying the image
 * @param {*} props 
 * @returns - card with information of popular post and image background
 */
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