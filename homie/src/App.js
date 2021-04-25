import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Calanader from './components/Calanader/Calanader';
import Login from './components/Login/Login';
import Todo from './components/Todo/Todo';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <Router>
        {
          // !user ? (<Login/>) : 
          (
            <div className="app_body">
              <Todo/>
              <Weather/>
              <Calanader/>
            </div>
          )
        }
      </Router>
    </div>
  );
}

export default App;
