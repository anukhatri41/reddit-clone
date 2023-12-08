import React from "react";
import Post from "../Post/Post";

/**
 * Maps data to create a Post component for each post
 * @param posts - lists of posted returned from query
 * @returns - list of Post components
*/
function PostsList({posts}){

    return (
        <div className="posts">
            {(posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''}
         </div>
    )
}

export default PostsList;