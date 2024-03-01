import React from 'react';
import './LoginSignUp.css';

import user_icon from '../../Icons/icons8-user-default-50.png';
import email_icon from '../../Icons/icons8-email-50.png';
import password_icon from '../../Icons/icons8-key-50.png';

const SignUp = props => {
  return (
    <div className='signUp signup-container center'>
        <div className="signup-header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="signup-inputs">
            <div className="signup-input">
                <img src={user_icon} alt=""/>
                <input id="usernameInput" type="text" placeholder="Name"/>
            </div>
            <div className="signup-input">
                <img src={email_icon} alt=""/>
                <input id="emailInput" type="email" placeholder="Email"/>
            </div>
            <div className="signup-input">
                <img src={password_icon} alt=""/>
                <input id="passwordInput" type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="forgot-password">Lost Password?</div>
        <div className="submit-container">
            <div className="submit">Login</div>
        </div>
    </div>
  );
};

export default SignUp;