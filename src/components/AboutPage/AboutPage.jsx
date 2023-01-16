import React from 'react';

import logo from '../Images/happy_closet_icon.jpg';
import logo2 from '../Images/happy-closet-icon-2.jpg';
import logo3 from '../Images/happy-closet-icon-3.jpg';
import profile from '../Images/Headshot.kuzmin.jpg';
import qrcode from '../Images/QR-code.jpg';
import react from '../Images/react.png';
import redux from '../Images/redux.png';
import postgres from '../Images/postgres.png';

import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about-page">
      <div></div>
      <div>
        <div className="about section">
          <div className="left-side">
            <h2>Built because: </h2>
          </div>
          <div className="right-side">
            <p>
              ⊛ Happy Closet was built to help lessen the burden of picking an
              outfit.
            </p>
            <p>
              ⊛ Users save items in their closet and log outfits they wear,
              allowing the app to store the information and use it to help the
              user decide what to wear.
            </p>
          </div>
        </div>
        <div className="tech section">
          <div className="left-side">
            <h2>Built with: </h2>
          </div>
          <div className="right-side">
            <div id="technologies">
              <img src="data:image/png;base64,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"></img>
              <img src="data:image/png;base64,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"></img>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABgit 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"></img>
              <img src={react}></img>
              <img src={postgres}></img>
              <img src={redux}></img>
            </div>
            <div>
              <h3>Along with:</h3>
              <h3>Express, Multer, aws-sdk, passport, axios, and MUI icons.</h3>
            </div>
          </div>
        </div>
        <div className="about-me section">
          <div className="left-side">
            <h2>Built by: </h2>
          </div>
          <div className="right-side">
            <h2>Victoria Mertens</h2>
            <div className="profile-pics">
              <img class="profile" src={profile}></img>
              <img class="qrcode" src={qrcode}></img>
            </div>
            <p>https://medium.com/@victoria.mertens44</p>
            <p>https://twitter.com/vmertz44</p>
          </div>
        </div>
        <div className="special-thanks section">
          <h2>Special thanks to:</h2>
          <div className="bump-right">
            <p>
              ⊛ Prime Academy, my instructors Liz and Dane, and the Shawl
              Cohort.
            </p>
            <p> ⊛ My люблю! </p>
            <p>⊛ My family!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
