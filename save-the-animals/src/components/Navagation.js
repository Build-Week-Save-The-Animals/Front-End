import React from 'react';
import {Link} from 'react-router-dom';

const Navagation = () => {
    return (
    <div className="Nav">
        <nav>
            <h1 className="logo-name">Save The Animals</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    </div>
    
    )
}

export default Navagation;

