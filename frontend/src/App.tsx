import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ListUsers from './pages/ListUsers';
import LoginPage from './pages/LoginPage';
import './styles/global.scss';

function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/users"><ListUsers /></Route>
        </Switch>
      </Router>

  );
}

export default App;
