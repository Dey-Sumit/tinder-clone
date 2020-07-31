import React from 'react';
import Chat from '../Chat/Chat';
const Chats = () => {
    const chats_array = [
        { name: "Sarah", message: "Tonight, at my place? :)", timestamp: "40 seconds ago", profilePic: "..." },
        { name: "Sumit", message: "Hi bhai", timestamp: "1 seconds ago", profilePic: "..." },
        , { name: "Arturo", message: "You are a fan of Denver, right?", timestamp: "10 minutes ago", profilePic: "..." },
        , { name: "Puja", message: "Cholo Puja kori...", timestamp: "40 seconds ago", profilePic: "..." },
    ]

    return (
        <div className="chats">
            {
                chats_array.map((chat, i) => (
                    <Chat key={i}
                        name={chat.name}
                        message={chat.message}
                        timestamp={chat.timestamp}
                        profilePic={chat.profilePic}
                    />
                ))
            }
        </div>
    );
};

export default Chats;