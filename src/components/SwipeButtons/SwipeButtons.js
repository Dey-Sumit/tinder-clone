import React from 'react';
import PropTypes from 'prop-types';
import './swipeButtons.css'

import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import { IconButton } from '@material-ui/core';

const SwipeButtons = props => {

    return (

        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat p-3vw">  <ReplayIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButtons__left p-3vw">   <CloseIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButtons__star p-3vw">   <StarRateIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButtons__right p-3vw">  <FavoriteIcon fontSize="large" /></IconButton>
            <IconButton className="swipeButtons__lightning p-3vw">   <FlashOnIcon fontSize="large" /></IconButton>
        </div>
    );
};

SwipeButtons.propTypes = {

};

export default SwipeButtons;