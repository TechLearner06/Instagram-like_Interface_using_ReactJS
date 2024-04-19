import React from 'react';
import "./homepage.css";
// eslint-disable-next-line
import Sidenav from './navigation/sidenav';
import Timeline from './timelines/timeline';


function Homepage() {
    return (
    <div className="homepage">
        <div className="homepage_nav">
            <Sidenav />
        </div>
        <div className="homepage_timeline">
            <Timeline />

        </div>
    </div>
    )
}

export default Homepage;


