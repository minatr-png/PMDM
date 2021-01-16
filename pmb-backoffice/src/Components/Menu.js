import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return <div>
            <h2>PlaceMyBet</h2>
            <li><NavLink to={'/'} exact activeClassName={'menu-active'}>Home</NavLink></li>
            <li><NavLink to={'/users'} activeClassName={'menu-active'}>Users</NavLink></li>
            <li><NavLink to={'/bets'} activeClassName={'menu-active'}>Bets</NavLink></li>
            <li><NavLink to={'/events'} activeClassName={'menu-active'}>Events</NavLink></li>
            <li><NavLink to={'/reports'} activeClassName={'menu-active'}>Reports</NavLink></li>
        </div>;
    }
}

export default Menu;