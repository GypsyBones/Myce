import React, { useState } from "react";
import { Button } from './Button.js';
import Dropdown from './Dropdown.js';
import './nav.css';
import { Link } from 'react-router-dom';
import ProfileComp from '../Profile/profileComp.js';

import Bars from '../../Icons/icons8-menu-squared-50.png';
import Close from '../../Icons/icons8-close-50.png';
import Down from '../../Icons/icons8-chevron-down-50.png';
import Up from '../../Icons/icons8-chevron-up-50.png'

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import logo from '../../Icons/largeMyceDark.png';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';


function Navbar () {
    const id = 1
    const user = ProfileComp(id)


    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };
//TODO Hamburger doesn't show SIGNUP, as well as the Profile dropdown doesn't drop down
    return (
        <>
            <Nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    MYCE
                </Link>
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
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/market' className="nav-links" onClick={closeMobileMenu}>Market</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/communities' className="nav-links" onClick={closeMobileMenu}>Communities</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/jobs' className="nav-links" onClick={closeMobileMenu}>Jobs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/workshops' className="nav-links" onClick={closeMobileMenu}>Workshops</Link>
                    </li>
                    <li 
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <div className="nav-links username" onClick={closeMobileMenu}>
                            <img src={user.avatar || defaultUserPic} 
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
                        </div>
                        {dropdown && <Dropdown />}
                    </li>
                </ul>
                <Button />
            </Nav>
        </>
    );
}

export default Navbar;

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


