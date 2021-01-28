import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return <div>
            <h1>Home</h1>
            <view>
                <NavLink to={'/users'} exact><button style={{height: 200, width: 450, fontSize: 50, backgroundColor: '#20211f', color: 'white'}}>Users</button></NavLink>
                <NavLink to={'/bets'}><button style={{height: 200, width: 450, fontSize: 50, backgroundColor: '#20211f', color: 'white'}}>Bets</button></NavLink>
            </view>
            <p></p>            
            <view>
                <NavLink to={'/events'}><button style={{height: 200, width: 450, fontSize: 50, backgroundColor: '#20211f', color: 'white'}}>Events</button></NavLink>
                <NavLink to={'/reports'}><button style={{height: 200, width: 450, fontSize: 50, backgroundColor: '#20211f', color: 'white'}}>Reports</button></NavLink>
            </view>
        </div>;
    }
}

export default Home;