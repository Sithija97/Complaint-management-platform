import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Calanader from './components/Calanader/Calanader';
import GroceryList from './components/Grocery List/GroceryList';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
