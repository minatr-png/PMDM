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

        const btnMargin = {
            marginBottom: 10
        }

        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1>{this.state.title}</h1>
                <NavLink to={'/EXSeconView'} style={btnMargin}><button>Go to the second page</button></NavLink>
                <NavLink to={'/Ejercicio1'} style={btnMargin}><button>Go to exercise 1 and 5</button></NavLink>
                <EXButton onClick={() => callMe("Here button. I called you!")} title='Run exercise 6'></EXButton>  
            </div>
        )
    }

}

export default MainView;