import { Avatar } from "@mui/material";
import React from "react";
import "./post.css"
import  MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';


function Post({user,postImage,likes,timestamp}){
    return (
        <div className="posts">
            <div className="post_header">
                <div className="header_user">
                    <Avatar className="avatar">{user.charAt(0).toUpperCase()}</Avatar>
                    {user} <span>{timestamp}</span>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="post_image">
                <img src={postImage} alt=""></img>
            </div>
            <div className="post_footer">
                <div className="post_footer_icon">
                    <div className="post_icon_main">
                        <FavoriteBorder className="post_icon"/>
                        <ChatBubbleOutlineIcon className="post_icon"/>
                        <TelegramIcon className="post_icon"/>

                    </div>
                    <div className="post_save_icon">
                        <TurnedInNotIcon className="post_icon"/>
                    </div>
                </div>
                Liked by {likes} People
            </div>
        </div>
    )
}

export default Post;