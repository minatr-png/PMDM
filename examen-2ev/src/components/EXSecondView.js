import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './EXSecondView.css'

class EXSecondView extends React.Component{

    render() {
        return(
            <div className={'second-view-container'}>
                <h1>Welcome to the second view!</h1>
                <h2>Well done!</h2>
                <NavLink to={'/'} exact><button>Return to the main page</button></NavLink>
            </div>
        )
    }

}

export default EXSecondView;
