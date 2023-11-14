import React from "react";
import Media from "../Media/Media";


function Post(props){
    /*let media;
    if (props.post.media){
        if(props.post.is_video){
            media = props.post.media.redditvideo.fallback_url;
        }
    }*/

    return (
        <article className="justify-content-start">
            <div className="fw-bold">
                /{props.post.subreddit}
            </div>
            <a href={"https://reddit.com" + props.post.permalink} target="_blank">
                <h3 className="fw-bold">{props.post.title}</h3>
            </a>
            
            <div>
                <Media post={props.post}/>
            </div>
            <div className="d-flex gap-3">
                <div>
                    Upvotes: {props.post.ups}
                </div>
                <div>
                    Downvotes: {props.post.downs}
                </div>
                <div>
                    Author: {props.post.author}
                </div>
            </div>

        </article>
    )
}

export default Post;