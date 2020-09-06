// this is nav section

import React from 'react';
import './Header.css';
import { Button } from '@material-ui/core';

const Header = () => {
    return (
        <nav>
            <a href="/Home">Home</a>
            <a href="/Post">Post</a>
            <div className="input_section">
                <input type="text" placeholder="Search"/>
                <Button variant="contained">Search</Button>
            </div>
        </nav>
    );
};

export default Header;