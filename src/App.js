import './App.css';
import Navbar from './Components/NavBar/nav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/communities' exact element={<Communities />} />
        <Route path='/create-new' exact element={<CreateNew />} />
        <Route path='/jobs' exact element={<Jobs />} />
        <Route path='/log-out' exact element={<LogOut />} />
        <Route path='/market' exact element={<Market />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/settings' exact element={<Settings />} />
        <Route path='/login-sign-up' exact element={<SignUp />} />
        <Route path='/workshops' exact element={<Workshops />} />
        <Route path='/notifications' exact element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
