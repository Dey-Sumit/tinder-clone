import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './chatScreen.css'
const ChatScreen = () => {
    const [messages, setMessages] = useState([
        {
            name: 'Xame',
            message: 'Hi'
        },
        { name: 'Name', owner: true, message: 'Hello' },
        { name: 'Xame', message: 'How are you?' },
    ]
    )

    return (
        <div className="chatScreen">
            <p className="chatScreen__TimeStamp">You matched with Sarah on 20th august</p>
            {
                messages.map((message, i) => (
                    !message.owner ?
                        <div key={i} className="chatScreen__box">
                            <Avatar src="..." alt={message.name} />
                            <p className="chatScreen__text chatScreen__text-other">{message.message}</p>
                        </div>
                        :
                        <div key={i} className="chatScreen__box">
                            <p className="chatScreen__text chatScreen__text-user">{message.message}</p>
                        </div>
                ))
            }
        </div>
    );
};

export default ChatScreen;