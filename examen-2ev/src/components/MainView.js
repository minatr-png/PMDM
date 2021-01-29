import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './EXSecondView.css';
import EXButton from './EXButton';

class MainView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Welcome to the IT world"
        }
    }
    
    componentDidMount() {
        this.setState({title: "Already in!"});
        console.log("Change for exercise 3, done");
    }    
    
    render() {
        const callMe = (text) => {
            this.setState({title: text});
        }

        return (
            <div>
                <h1>{this.state.title}</h1>
                <NavLink to={'/EXSeconView'}><button>Ir a la segunda página</button></NavLink>
                <p></p>
                <NavLink to={'/Ejercicio1'}><button>Ir al ejercicio 1 y 5</button></NavLink>
                <p></p>
                <EXButton onClick={() => callMe("Here button. I called you!")} title='Run exercise 6'></EXButton>  
            </div>
        )
    }

}

export default MainView;