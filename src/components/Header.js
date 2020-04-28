import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
    return (
        <div>
            <div className="ui pointing menu">
            <Link to='/' className="item">Streamer</Link>
            <div className="right menu">
                <Link to='/' className="item">All stream</Link>
                <div className="item">
                    <GoogleAuth className=""></GoogleAuth> 
                </div>
                          
            </div>
            </div>
        </div>
    )
}
export default Header;