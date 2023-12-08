import React from "react";
import Media from "../Media/Media";

/**
 * Utilizes info returned from reddit api to extract information to display
 * @param {*} props 
 * @returns formatted Post component
 */
function Post(props){

    const ups_formatted = Intl.NumberFormat("en-US").format(props.post.ups);
    const down_formatted = Intl.NumberFormat("en-US").format(props.post.downs);

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
                    Upvotes: {ups_formatted}
                </div>
                <div>
                    Downvotes: {down_formatted}
                </div>
                <div>
                    Author: {props.post.author}
                </div>
            </div>

        </article>
    )
}

export default Post;