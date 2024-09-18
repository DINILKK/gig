import './App.css';
import SignInPage from "./pages/SignUpPage/CreateAccount"
import LoginPage from "./pages/gigLogin/LoginPage"
import HomePage from "./pages/HomePage/HomePage"
import GigPool from "./pages/gigPool/GigPool"
import GigJournal from "./pages/gigJournal/GigJournal"
import GigTracker from "./pages/gigTracker/GigTracker"

function App() {
  return (
    <div className="App">
      <GigJournal/>
    </div>
  );
}

export default App;
