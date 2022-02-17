import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './../pages/profile';

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/profile">Profiles</Link>
        </nav>
    );
}

export default NavBar;