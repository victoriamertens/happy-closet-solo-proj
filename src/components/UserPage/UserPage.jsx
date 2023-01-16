import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
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
      <h2>Welcome, {user.name}!</h2>
      <img src={logo}></img>
      <img src={logo2}></img>
      <img src={logo3}></img>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
