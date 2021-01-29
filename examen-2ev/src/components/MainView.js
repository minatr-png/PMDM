import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './EXSecondView.css';

class MainView extends React.Component {

    render() {
        return (
            <div>                
                <h1>Welcome to the first view!</h1>
                <h2>Well done!</h2>
                <NavLink to={'/EXSeconView'}><button>Ir a la segunda página</button></NavLink>
                <p></p>
                <NavLink to={'/Ejercicio1'}><button>Ir al ejercicio 1</button></NavLink>
            </div>
        )
    }

}

export default MainView;