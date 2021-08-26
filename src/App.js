import { Switch,Route } from 'react-router';
import Nav from './components/Nav/Nav';
import Homepage from './pages/homepage/Homepage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
