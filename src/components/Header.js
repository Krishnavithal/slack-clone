import React from 'react';
import "../styles/Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                    className="header_avatar"
                    alt="Krishna"//{user?.displayName}
                //src={user?.photoURL}
                />
                <AccessTimeIcon />
                {/* Avatars for logged in user */}
                {/* Time icon */}
            </div>
            <div className="header_search">
                {/* search icon */}
                <SearchIcon />
                {/* input */}
                <input placeholder="search developer" />
            </div>
            <div className="header_right">
                {/* help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
