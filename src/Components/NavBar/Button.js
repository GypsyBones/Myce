import React from "react";
import './Button.css';
import { Link } from 'react-router-dom';


export function Button () {
    return (
        <Link to='Login-Sign-Up'>
            <button className='btn-grad' >
                Login
            </button>
        </Link>
    );
}
export default Button;