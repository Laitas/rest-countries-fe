import { Switch,Route } from 'react-router';
import Nav from './components/Nav/Nav';
import Homepage from './pages/homepage/Homepage';
import Countrypage from './pages/countrypage/Countrypage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/country/:name' component={Countrypage}/>
      </Switch>
    </div>
  );
}

export default App;
