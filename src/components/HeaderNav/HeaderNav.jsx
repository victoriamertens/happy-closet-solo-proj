import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './HeaderNav.css';
import { useSelector } from 'react-redux';
import logo from '../Images/happy_closet_icon.jpg';

import { useParams, useLocation } from 'react-router-dom';

function Nav() {
  const user = useSelector((store) => store.user);
  const page = useParams();
  const location = useLocation().pathname;
  console.log('PAGE:', location);

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
          {location === '/outfits' && <h1 class="header-title">Outfits</h1>}
          {location === '/additem' && <h1 class="header-title">Add Item</h1>}
          {location === '/closet' && <h1 class="header-title">Closet</h1>}
          {location === '/makeoutfit' && (
            <h1 class="header-title">Make Outfit</h1>
          )}
          {location === '/makeoutfitcomment' && (
            <h1 class="header-title">Make Outfit</h1>
          )}

          <div className="navLink">
            <LogOutButton className="navLink" />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
