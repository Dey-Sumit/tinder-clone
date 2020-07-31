import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chats from './components/Chats/Chats';
import ChatScreen from './components/ChatScreen/ChatScreen';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <div className="container">
            <div className="container__left">
              <SideBar />
            </div>
            <div className="container__right">
              <Route exact path='/chats/:person'>
                <Header backButton="/chats" />
                <ChatScreen />
              </Route>
              <Route exact path='/chats'>
                <Header backButton="/" />
                <Chats />
              </Route>
              <Route exact path='/'>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
