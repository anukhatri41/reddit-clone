import React from "react";
import { Typography } from "@mui/material";

function Post(props){
    return (
        <article>
            <a href={"https://reddit.com" + props.post.permalink} target="_blank">
                <Typography variant="h4">
                {props.post.title}
                </Typography>
            </a>
        </article>
    )
}

export default Post;