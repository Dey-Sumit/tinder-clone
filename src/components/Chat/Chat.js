import React from 'react';
import { Avatar } from '@material-ui/core'

import './chat.css'
import { Link } from 'react-router-dom';

const Chat = ({ name, message, timestamp, profilePic }) => {
    return (
        <Link to={`/chats/${name}`}>
            <div className="chat">
                <Avatar className="chat__image" src={profilePic} alt={name} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>

            </div>
        </Link>

    );
};
export default Chat