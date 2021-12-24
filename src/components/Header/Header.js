import React from 'react';
import './Header.css';
import LogOut from '../LogOut/LogOut';

const Header = ({ props }) => {

    return (
        <div className="header">
            <h1 className="title">PENNIFY</h1>
            {props === '/' ? <h4 className="portfolio-link">Portfoilo</h4> : <LogOut />}
        </div>
    )
}

export default Header