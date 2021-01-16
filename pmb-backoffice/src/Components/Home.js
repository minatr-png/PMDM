import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return <div>
            <h1>Home</h1>
            <li><NavLink to={'/users'} exact >Users</NavLink></li>
            <li><NavLink to={'/bets'} >Bets</NavLink></li>
            <li><NavLink to={'/events'} >Events</NavLink></li>
            <li><NavLink to={'/reports'} >Reports</NavLink></li>
        </div>;
    }
}

export default Home;