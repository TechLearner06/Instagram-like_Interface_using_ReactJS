import React, { useState } from "react";
import "./timeline.css"
import Suggestion from "./suggestion";
import Post from "./posts/post";


function Timeline(){
    const [posts, setPosts] = useState([
        {
            user:"abcd",
            postImage:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzM4OS1tai0xMDQwLWt1dC1leWUuanBn.jpg",
            likes:123,
            timestamp:"2d"
        },
        {
            user:"__efghi__",
            postImage:"https://pics.craiyon.com/2023-06-30/5778ed3bf525494481df73f6a165bfff.webp",
            likes:128,
            timestamp:"2d"
        },
        {
            user:"klim__nop",
            postImage:"https://i.pinimg.com/236x/d0/d6/1a/d0d61adb4131ff4d55d5e101646948e5.jpg",
            likes:127,
            timestamp:"2d"
        },
        {
            user:"qrstuv__wxyz_",
            postImage:"https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
            likes:542,
            timestamp:"2d"
        },


    ]);
    return (
        <div className="timeline">

            <div className="timeline-left">
                <div class="timeline-posts">
                  {posts.map(post => [
                    <Post 
                    user={post.user} 
                    postImage={post.postImage} 
                    likes={post.likes} 
                    timestamp={post.timestamp}/>
                  ])}
                </div>
            </div>

            <div className="timeline-right">
                <Suggestion />
            </div>
        </div>
          
    )

}

export default Timeline;
