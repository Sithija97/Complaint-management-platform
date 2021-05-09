import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Calanader from './components/Calanader/Calanader';
import GroceryList from './components/Grocery List/GroceryList';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Money from './components/MoneyManager/Money';
import Todos from './components/Todo/Todos';
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
          <Route path='/todo' component={Todos} />
          <Route path='/weather' component={Weather} />
          <Route path='/money' component={Money} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
