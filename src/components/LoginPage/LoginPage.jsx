import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import logo from '../Images/happy_closet_icon.jpg';

import './LoginPage.css';

function LoginPage() {
  const history = useHistory();

  return (
    <center>
      <div classFor="login-page">
        <img src={logo}></img>
        <LoginForm />

        <p>--- OR ---</p>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </div>
    </center>
  );
}

export default LoginPage;
