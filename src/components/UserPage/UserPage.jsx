import React from 'react';

import { useSelector } from 'react-redux';

import logo from '../Images/happy_closet_icon.jpg';
import logo2 from '../Images/happy-closet-icon-2.jpg';
import logo3 from '../Images/happy-closet-icon-3.jpg';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h1>Welcome, {user.name}!</h1>
      <div id="logo-container">
        <img id="logo-2" src={logo2}></img>
        <img id="logo-1" src={logo}></img>
        <img id="logo-3" src={logo3}></img>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
