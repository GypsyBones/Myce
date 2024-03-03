import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginSignUp.css';

import user_icon from '../../Icons/icons8-user-default-50.png';
import email_icon from '../../Icons/icons8-email-50.png';
import password_icon from '../../Icons/icons8-key-50.png';
import Debug from '../Other/Debug';

const SignUp = props => {
    const [action, setAction] = useState("Sign Up");
    //changes the header and determines which form inputs are available
    const initialValues = {username: "", email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { username, value } = e;
        setFormValues({ ...formValues, username: value });
        console.log(formValues);
    };
    //ngl this bit(ch) is consuming me slowly

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
//TODO email will still render it unable to submit on login, need to adjust for that
//TODO password input is still not inputting
//TODO email is still sending info to username???
    const handleClick = (e) => {
        if ( e.target.classList.contains("sign-up") && action==="Sign Up") {
            handleSubmit(e);
        } else if ( e.target.classList.contains("login") && action==="Login") {
            handleSubmit(e);
        } else if ( e.target.classList.contains("login") && action==="Sign Up") {
            setAction("Login");
        } else if ( e.target.classList.contains("sign-up") && action==="Login") {
            setAction("Sign Up");
    }};
    //checks if the target class and the setAction align, and determines action based off of that

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            navigate('/')
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //confirms that the string is an email address, but will not check to see if the email exists
        if(!values.username) {
            errors.username = "Username is required";
        }
        if(!values.email) {
            errors.email = "Email is required";
        } else if (regex.test(values.email)) {
            errors.email = "This is not a valid email";
        }
        if(!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "This is an incorrect password";
        }
        return errors;
    };

  return (
    <div className='signUp signup-container center'>
        <form onSubmit={handleSubmit} >
            <div className="signup-header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="signup-inputs">
                {action==="Login"?<div></div>:
                <div>
                    <div className="signup-input">
                        <img src={email_icon} alt=""/>
                        <input 
                            id="emailInput" 
                            type="email" 
                            placeholder="  Email" 
                            value={formValues.email}
                            onChange={handleChange}/>
                    </div>
                    <p className="dark">{ formErrors.email}</p>   
                </div>
                
                }
                <div className="signup-input">
                    <img src={user_icon} alt=""/>
                    <input 
                        id="usernameInput" 
                        type="text" 
                        placeholder="  Username" 
                        value={formValues.username}
                        onChange={handleChange}/>
                </div>
                <p className="dark">{ formErrors.username}</p>  
                <div className="signup-input">
                    <img src={password_icon} alt=""/>
                    <input 
                        id="passwordInput" 
                        type="password" 
                        placeholder="  Password" 
                        value={formValues.password}
                        onChange={handleChange}/>
                </div>
                <p className="dark">{ formErrors.password}</p>  
            </div>
            {action==="Sign Up"?<div></div>:
                <div className="forgot-password" >Lost Password?</div>
            }
            <div className="submit-container">
                <button className={action==="Login"?"submit gray sign-up":"submit sign-up"} onClick={handleClick}>Sign Up</button>
                <button className={action==="Sign Up"?"submit gray login":"submit login"} onClick={handleClick}>Login</button>
            </div>
        </form>
        
    </div>
  );
};

export default SignUp;