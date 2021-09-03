import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ListUsers from './pages/ListUsers';
import LoginPage from './pages/LoginPage';
import './styles/global.scss';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route  path="/"><Home /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/users"><ListUsers /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
