import React from "react";
import "./suggestion.css";
import { Avatar } from '@mui/material';

function Suggestion(){
    return (
        <div className="suggestions">
            <div className="suggestion_title">Suggestions for you</div>
            <div className="usernames">
                <div className="suggestion_user">
                    <div className="left_side">
                        <span className="avatar">
                            <Avatar>F</Avatar>
                        </span>
                        <div className="user_info">
                            <span className="usertitle">erfghh__</span>
                            <span className="user-rel">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow-btn">Follow</button>
                </div>

                <div className="suggestion_user">
                    <div className="left_side">
                        <span className="avatar">
                            <Avatar>F</Avatar>
                        </span>
                        <div className="user_info">
                            <span className="usertitle">erfghh__</span>
                            <span className="user-rel">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow-btn">Follow</button>
                </div>

                <div className="suggestion_user">
                    <div className="left_side">
                        <span className="avatar">
                            <Avatar>F</Avatar>
                        </span>
                        <div className="user_info">
                            <span className="usertitle">erfghh__</span>
                            <span className="user-rel">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow-btn">Follow</button>
                </div>

                <div className="suggestion_user">
                    <div className="left_side">
                        <span className="avatar">
                            <Avatar>F</Avatar>
                        </span>
                        <div className="user_info">
                            <span className="usertitle">erfghh__</span>
                            <span className="user-rel">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow-btn">Follow</button>
                </div>
            </div>
        </div>
    )

}

export default Suggestion;