import './App.css';
import SignInPage from "./pages/SignUpPage/CreateAccount"
import LoginPage from "./pages/gigLogin/LoginPage"
import HomePage from "./pages/HomePage/HomePage"
import GigPool from "./pages/gigPool/GigPool"
import GigJournal from "./pages/gigJournal/GigJournal"
import GigTracker from "./pages/gigTracker/GigTracker"
import axios from 'axios'
// require('dotenv').config();


axios.defaults.baseURL=process.env.AXIOS_URL || 'http://localhost:5000' ;
axios.defaults.withCredentials=true;
function App() {
  return (
    <div className="App">
      <GigPool/>
    </div>
  );
}

export default App;
