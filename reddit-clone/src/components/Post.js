import React from "react";
import { Typography } from "@mui/material";

function Post(props){
    return (
        <article>
            <div>
                {props.post.subreddit}
            </div>
            <a href={"https://reddit.com" + props.post.permalink} target="_blank">
                <Typography variant="h4">
                {props.post.title}
                </Typography>
            </a>
            <div>
                {props.post.author}
            </div>
            <div>
                {props.post.ups}
            </div>
            <div>
                {props.post.downs}
            </div>

        </article>
    )
}

export default Post;