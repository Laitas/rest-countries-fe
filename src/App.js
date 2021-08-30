import { Switch,Route } from 'react-router';
import Nav from './components/Nav/Nav';
import Homepage from './pages/homepage/Homepage';
import Countrypage from './pages/countrypage/Countrypage';
import { useSelector } from 'react-redux';
import './App.scss';

function App() {
  const mode = useSelector(state => state.mode.lightMode)
  return (
    <div className={!mode ? "app dark-theme" : "app"}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/country/:name" component={Countrypage} />
      </Switch>
    </div>
  );
}

export default App;
