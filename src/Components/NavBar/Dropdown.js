import React, { useState } from "react";
import { MenuItems } from './MenuItem.js';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Debug from "../Other/Debug.js";


function DropdownMenu() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
        <Dropdown.Menu onClick={handleClick}
            className={click ? 'dropdown-men clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <Dropdown.Item
                                className={item.cName} 
                                href={item.path} 
                                key={index}
                                onClick={() => setClick(false)}>
                                {item.title}
                        </Dropdown.Item>
                    )
            })}
        </Dropdown.Menu>
        </>
    );
}

export default DropdownMenu;