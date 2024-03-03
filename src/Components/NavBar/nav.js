import React, { useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Dropdown } from 'react-bootstrap';

import { Button } from './Button.js';
import DropdownMenu from './Dropdown.js';
import './nav.css';
import ProfileComp from '../Profile/profileComp.js';
import Debug from '../Other/Debug.js';

import Bars from '../../Icons/icons8-menu-squared-50.png';
import Close from '../../Icons/icons8-close-50.png';
import Down from '../../Icons/icons8-chevron-down-50.png';
import Up from '../../Icons/icons8-chevron-up-50.png'


import logo from '../../Icons/largeMyceDark.png';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';


function Navigation () {
    const id = 1
    const user = ProfileComp(id)


    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const enterMenu = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            Debug("dropdown", "I work")
            setDropdown(true)
        }
    }; 

//TODO Hamburger doesn't show SIGNUP, as well as the Profile dropdown doesn't drop down
    return (
        <>
            <Navbar className='navbar fixed-top'>
                <Nav.Link href='/' className='navbar-logo'>
                    MYCE
                </Nav.Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i> {click 
                            ? <img src={Close}
                                className="bare-image"  
                                alt="close" /> 
                            : <img src={Bars}  
                                className="bare-image"
                                alt="open menu"/>
                        } </i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Nav.Link href='/' className="nav-links" onClick={closeMobileMenu}>Home</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link id={id} href='/market' className="nav-links" onClick={closeMobileMenu}>Market</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link id={id} href='/communities' className="nav-links" onClick={closeMobileMenu}>Communities</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link id={id} href='/jobs' className="nav-links" onClick={closeMobileMenu}>Jobs</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link id={id} href='/workshops' className="nav-links" onClick={closeMobileMenu}>Workshops</Nav.Link>
                    </li>
                    <Dropdown>
                        <Dropdown.Toggle
                        className="nav-item nav-item-dropdown" 
                        id="collapsible-nav-dropdown"
                        onMouseOver={()=>{enterMenu()}}>
                            <span className="nav-username"><img 
                                src={user.avatar || defaultUserPic} 
                                className="profilePicSm" />
                                {user.name}
                                <i>{click 
                                    ? <img src={Up}
                                        className="bare-image2"  
                                        alt="close" /> 
                                    : <img src={Down}  
                                        className="bare-image2"
                                        alt="open menu" />
                                    }</i>
                            </span>
                        </Dropdown.Toggle>
                        {dropdown && <DropdownMenu />}
                    </Dropdown>
                </ul>
                <Button />
            </Navbar>
        </>
    );
}

export default Navigation;

// const Navigation = () => {
//     return (
//         <>
//         <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" fixed="top">
//             <Container>
//                 <Navbar.Brand>
//                     <img
//                     src={logo}
//                     height="30px"
//                     /> 
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbar-nav"/>
//                 <Navbar.Collapse id="navbar-nav">
//                     <Nav className="me-auto nav-tabs">
//                         <Nav.Link href="/Home">Home</Nav.Link>
//                         <Nav.Link href="/Market">Market</Nav.Link>
//                         <Nav.Link href="/Communities">Communities</Nav.Link>
//                         <Nav.Link href="/Jobs">Jobs</Nav.Link>
//                         <Nav.Link href="/Workshops">Workshops</Nav.Link>
                        
//                         <NavDropdown id="navbar-nav" title={
//                             <div className="profileImgName">
//                                 {user.username}
//                                 <img className="thumbnail-image" 
//                                     src={profilePic} 
//                                     alt="user pic"
//                                     height="30px"
//                                 />
//                             </div>
//                         }>
//                              <NavDropdown.Item href="/New_Project">New project...</NavDropdown.Item>
//                              <NavDropdown.Item href="/Settings">Settings</NavDropdown.Item>
//                              <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
//                              <NavDropdown.Divider />
//                              <NavDropdown.Item href="/Sign_Out">Sign out</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//         </>
//     )
// };



// export default Navigation;


