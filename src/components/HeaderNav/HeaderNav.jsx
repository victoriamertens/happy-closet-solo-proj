import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './HeaderNav.css';
import { useSelector } from 'react-redux';
import logo from '../Images/happy_closet_icon.jpg';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <div>
            <Link className="navLink" to="/about">
              About App
            </Link>
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          </div>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/about">
              <img src={logo}></img>
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;