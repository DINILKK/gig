import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInPage from "./pages/SignUpPage/CreateAccount"
import LoginPage from "./pages/gigLogin/LoginPage"
import HomePage from "./pages/seeker/HomePage/HomePage"
import GigPool from "./pages/seeker/gigPool/GigPool"
import GigJournal from "./pages/seeker/gigJournal/GigJournal"
import GigTracker from "./pages/seeker/gigTracker/GigTracker"
import SeekerRegistration from "./pages/SeekerRegistration/UserRegistration"
import SeekerProfile from "./pages/seeker/gigUserProfile/ProfilePage"
import axios from 'axios'



axios.defaults.baseURL = process.env.AXIOS_URL || 'http://localhost:5000';
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/gigpool' element={<GigPool/>}/>
          <Route path='/gigjournal' element={<GigJournal/>}/>
          <Route path='/gigtracker' element={<GigTracker/>}/>
        </Routes>
      </BrowserRouter> */}
      <SeekerProfile/>
      {/* <GigPool/> */}
    </div>
  );
}

export default App;
