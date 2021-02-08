

import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import NavPage from './components/NavPage';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
 <div>
    <NavPage />
    <Route path="/" exact component={HomePage} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    </div>
    </Router>
   
  );
}




export default App;
