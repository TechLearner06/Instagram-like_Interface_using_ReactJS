import React from 'react';
import "./sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
function Sidenav() {
    return (
        <div className="sidenav">
            <img 
              className="sidenav_logo" 
              src="data:image/png;base64,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"
              alt=""
            />

            <div className="sidenav-btn">
                <button className="side_btn">
                    <HomeIcon />
                    <span>Home</span>
                </button>

                <button className="side_btn">
                    <SearchIcon />
                    <span>Search</span>
                </button>

                <button className="side_btn">
                    <ExploreIcon />
                    <span>Explore</span>
                </button>

                <button className="side_btn">
                    <MovieIcon />
                    <span>Reels</span>
                </button>

                <button className="side_btn">
                    <ChatIcon />
                    <span>Message</span>
                </button>

                <button className="side_btn">
                    <FavoriteBorderIcon />
                    <span>Notifications</span>
                </button>

                <button className="side_btn">
                    <AddCircleOutlineIcon />
                    <span>Create</span>
                </button>




            </div>

            <div className="sidenav_more">
                <button className='side_btn'>
                <MenuIcon/>
                <span>More</span>
                </button>
            </div>


        </div>
    )
}

export default Sidenav;