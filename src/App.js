import './App.css';
import { React, useState } from "react";
import Navbar from './Components/NavBar/nav.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Communities from './Components/Pages/Communities.js';
import About from './Components/Pages/About.js';
import Home from './Components/Pages/Home.js';
import Jobs from './Components/Pages/Jobs.js';
import Market from './Components/Pages/Market.js';
import Profile from './Components/Pages/Profile.js';
import SignUp from './Components/Pages/LoginSignUp.js';
import Workshops from './Components/Pages/Workshops.js';
import LogOut from './Components/Pages/LogOut.js';
import Settings from './Components/Pages/Settings.js';
import CreateNew from './Components/Pages/CreateNew.js';
import Notifications from './Components/Pages/Notifications.js';
import Friends from './Components/Pages/Friends.js'
//import Footer from './Components/Other/Footer.js';


function App() {
  const [showNav, setShowNav] = useState(true);

  // const setNav = (e) => {
  //   console.log(e)
  //   if (showNav === true) {
  //     setShowNav(false)
  //   } else {
  //     setShowNav(true)
  //   }
  // }

  const userId = "1"

  return (
    <Router>
      { showNav && 
      <Navbar />
      }
      <Routes>
        <Route path='/' exact element={<Home  props={userId}/>} />
        <Route path='/about' exact element={<About  props={userId}/>} />
        <Route path='/communities' exact element={<Communities  props={userId}/>} />
        <Route path='/create-new' exact element={<CreateNew  props={userId}/>} />
        <Route path='/jobs' exact element={<Jobs  props={userId}/>} />
        <Route path='/log-out' exact element={<LogOut  props={userId}/>} />
        <Route path='/market' exact element={<Market  props={userId}/>} />
        <Route path='/profile/:id' element={<Profile  props={userId}/>} />
        <Route path='/settings' exact element={<Settings  props={userId}/>} />
        <Route path='/login-sign-up' exact element={<SignUp  props={userId}/>} />
        <Route path='/workshops' exact element={<Workshops  props={userId}/>} />
        <Route path='/notifications' exact element={<Notifications  props={userId}/>} />
        <Route path='/friends' exact element={<Friends  props={userId}/>} />
      </Routes>
    </Router>
  );
}


export default App;
