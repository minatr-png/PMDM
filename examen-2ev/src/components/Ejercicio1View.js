import * as React from 'react';
import './EXSecondView.css';
import EXButton from './EXButton';

class Ejercicio1View extends React.Component {

    render() {
        const justDoIt = () => {
            console.log("Exercise 4 done!");
        }

        return (
            <div>     
                <EXButton onClick={justDoIt} title='Listo para hacer click'></EXButton>  
            </div>
        )
    }

}

export default Ejercicio1View;