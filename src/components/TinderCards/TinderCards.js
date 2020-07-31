import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import './tinderCards.css'
import database from '../../firebase.js';

const TinderCards = props => {

    const [people, setPeople] = useState([])

    useEffect(() => {

        const unsubsribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        return () => unsubsribe()
    }, [])

    return (
        <div>
            <div className="tinder-cards__card-container">
                {
                    people.length > 0 ?
                        people.map(person => (
                            <TinderCard className='swipe' key={person.name} preventSwipe={["up", "down"]}>
                                <div className="card" style={{ backgroundImage: `url(${person.image})` }}>
                                    <h3 className='card__name'>{person.name}</h3>
                                </div>
                            </TinderCard>
                        )) : <h4>Loading...</h4>
                }
            </div>
        </div>
    );
};



export default TinderCards;