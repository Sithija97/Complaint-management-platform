import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Calanader from './components/Calanader/Calanader';
import Cal from './components/Calculator/Cal';
import GroceryList from './components/Grocery List/GroceryList';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/calander' component={Calanader} />
          <Route path='/grocery' component={GroceryList} />
          <Route path='/todo' component={Todo} />
          <Route path='/weather' component={Weather} />
          <Route path='/cal' component={Cal} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
