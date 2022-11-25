import '../styles.css';
import React from 'react';
import air from "../images/air.png";

function Nav() {
    return (
        <div className='nav-div'>
            <img src={air} className="air-logo" alt='airbnb logo'/>
        </div>
    )
}

export {Nav}