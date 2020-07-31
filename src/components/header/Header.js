import React from 'react';
import { IconButton } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import './header.css'
import { Link, useHistory } from 'react-router-dom';

const Header = ({ backButton }) => {
    const history = useHistory();
    return (
        <div className="header">

            <IconButton>
                {backButton ?
                    <ArrowBackIcon className="header__icon" onClick={() => history.replace(backButton)}></ArrowBackIcon>
                    : <PersonIcon className="header__icon"></PersonIcon>
                }</IconButton>

            <Link to='/'>
                <img src="https://i.dlpng.com/static/png/6423305_preview.png" alt="tinder logo" className="header__logo" />
            </Link>

            <Link to='chats'>
                <IconButton>
                    <ForumIcon className="header__icon"></ForumIcon>
                </IconButton>
            </Link>

        </div>
    );
}
export default Header;