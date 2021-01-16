import './App.css';
import Users from './Components/Users';
import Home from './Components/Home';
import Bets from './Components/Bets';
import Events from './Components/Events';
import Reports from './Components/Reports';
import Menu from './Components/Menu';
import NewEvent from './Components/NewEvent';
import { Switch, Route, NavLink } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <div className={'menu'}>
        <Menu></Menu>
      </div>
      <div className={'content'}>
        <Switch>
          <Route path={'/'} exact>
            <Home></Home>
          </Route>
          <Route path={'/users'}>
            <Users></Users>
          </Route>
          <Route path={'/bets'}>
            <Bets></Bets>
          </Route>
          <Route path={'/events'}>
            <Events></Events>
          </Route>
          <Route path={'/newEvent'}>
            <NewEvent></NewEvent>
          </Route>
          <Route path={'/reports'}>
            <Reports></Reports>
          </Route>
          <Route path={'*'}>
            <h2>Sorry, but this request doesn't exists</h2>
            <NavLink to={'/'} exact>Click here to return to home menu</NavLink>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
