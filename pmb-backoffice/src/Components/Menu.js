import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return <div>
            <h2>PlaceMyBet</h2>
            <li><NavLink to={'/'} exact  style={{color: 'black',  textDecoration: 'none'}} activeStyle={{ color: 'white' }}>Home</NavLink></li>
            <li><NavLink to={'/users'}   style={{color: 'black',  textDecoration: 'none'}} activeStyle={{ color: 'white' }}>Users</NavLink></li>
            <li><NavLink to={'/bets'}    style={{color: 'black',  textDecoration: 'none'}} activeStyle={{ color: 'white' }}>Bets</NavLink></li>
            <li><NavLink to={'/events'}  style={{color: 'black',  textDecoration: 'none'}} activeStyle={{ color: 'white' }}>Events</NavLink></li>
            <li><NavLink to={'/reports'} style={{color: 'black',  textDecoration: 'none'}} activeStyle={{ color: 'white' }}>Reports</NavLink></li>
        </div>;
    }
}

export default Menu;