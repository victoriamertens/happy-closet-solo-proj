import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import logo from '../Images/happy_closet_icon.jpg';

function LoginPage() {
  const history = useHistory();

  return (
    <div classFor="login-page">
      <img src={logo}></img>
      <LoginForm />

      <center>
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
      </center>
    </div>
  );
}

export default LoginPage;
