import * as React from 'react';
import './EXSecondView.css';
import EXButton from './EXButton';

class Ejercicio1View extends React.Component {

    render() {
        return (
            <div>     
                <EXButton text='Listo para hacer click'></EXButton>  
            </div>
        )
    }

}

export default Ejercicio1View;

//<div style={{alignSelf: 'center', justifyContent: 'center'}}></div>
//<EXButton text='Listo para hacer click' style={{height: 100}}></EXButton>  