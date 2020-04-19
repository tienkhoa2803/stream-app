import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="ui menu">
            <Link to='/' className="item">Streamer</Link>
            <div className="right menu">
                <Link className="item">Sign Up</Link>
                <Link className="item">Help</Link>
            </div>
            </div>
        </div>
    )
}
export default Header;