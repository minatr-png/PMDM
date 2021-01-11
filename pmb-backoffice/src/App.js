import './App.css';
import Users from './Components/Users';
import Home from './Components/Home';
import Bets from './Components/Bets';
import Events from './Components/Events';
import Reports from './Components/Reports';
import { Switch, Route, NavLink } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <div className={'menu'}>
        <li><NavLink to={'/'} exact activeClassName={'menu-active'}>Home</NavLink></li>
        <li><NavLink to={'/users'} activeClassName={'menu-active'}>Users</NavLink></li>
        <li><NavLink to={'/bets'} activeClassName={'menu-active'}>Bets</NavLink></li>
        <li><NavLink to={'/events'} activeClassName={'menu-active'}>Events</NavLink></li>
        <li><NavLink to={'/reports'} activeClassName={'menu-active'}>Reports</NavLink></li>
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
