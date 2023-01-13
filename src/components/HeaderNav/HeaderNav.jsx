import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './HeaderNav.css';
import { useSelector } from 'react-redux';
import logo from '../Images/happy_closet_icon.jpg';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
      {/* If no user is logged in, show these links */}
      {!user.id && (
        // If there's no user, show login/registration links
        <div className="nav">
          <div className="navLink">
            <Link className="navLink" to="/about">
              About App
            </Link>
          </div>
          <div className="navLink">
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          </div>
        </div>
      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <div class="nav">
          <div>
            <Link className="navLink" to="/about">
              <img src={logo}></img>
            </Link>
          </div>
          <div className="navLink">
            <LogOutButton className="navLink" />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
