import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/admin" component={AdminPage} exact />
      </Switch>
      
    </Router>
  );
}

export default App;
