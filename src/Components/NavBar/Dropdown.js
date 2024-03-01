import React, { useState } from "react";
import { MenuItems } from './MenuItem.js';
import './Dropdown.css';
import { Link } from 'react-router-dom';


function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-men clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <Link 
                            className={item.cName} 
                            to={item.path} 
                            key={item.key}
                            onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    );
}

export default Dropdown;