import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css'
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ForumIcon from '@material-ui/icons/Forum';
import StarIcon from '@material-ui/icons/Star';
import BurstModeIcon from '@material-ui/icons/BurstMode';

const SideBar = props => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar alt="Remy Sharp" src="https://avatars0.githubusercontent.com/u/46570780?s=460&u=f147e8ccef383ea74c0957793c8f08c4c2054a39&v=4" />
                <h6>My Profile</h6>
            </div>
            <div className="sidebar__header-options">
                <Link to='/'>
                    <IconButton>
                        <BurstModeIcon className="sidebar__header__icon"></BurstModeIcon>
                    </IconButton>
                </Link>
                <IconButton>
                    <StarIcon className="sidebar__header__icon"></StarIcon>
                </IconButton>
                <Link to='chats'>
                    <IconButton>
                        <ForumIcon className="sidebar__header__icon"></ForumIcon>
                    </IconButton>
                </Link>
            </div>
            <div className="sidebar__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quae praesentium voluptate impedit at totam fuga autem enim ducimus, distinctio debitis, quod aut nihil, cum cupiditate non neque possimus amet consequatur recusandae dolor numquam esse asperiores
                . Temporibus distinctio sint eveniet quidem?
            </div>
        </div>
    );
};

SideBar.propTypes = {

};

export default SideBar;