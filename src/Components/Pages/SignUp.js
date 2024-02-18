import React from 'react';
import './SignUp.css'

import user_icon from '../../Icons/icons8-user-default-50.png'
import password_icon from '../../Icons/icons8-key-50.png'

const SignUp = props => {
  return (
    <div className='signUp container center'>
        <div className="header">
            <div className="text">Sign In</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt=""/>
                <input id="usernameInput" type="text" placeholder="Name"/>
            </div>
            <div className="input">
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