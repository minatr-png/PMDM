import { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';

const axios = require('axios');

class NewMarket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocked: -1,
            eventId: -1
        };
    }

    blockedChange = event => {
        var val;
        if(event.target.value.toUpperCase() === "YES" ) val = 1;
        else if(event.target.value.toUpperCase() === "NO") val = 0;
        else val = -1;
        this.setState({ blocked: val });
    };

    eventIdChange = event => {
        this.setState({ eventId: event.target.value });
    };

    render() {
        return <div>
            <h1>New Market</h1>
            <h5>Basic</h5>
            <p>Blocked: <InputText onChange={this.blockedChange} placeholder="YES or NO"/></p>
            <p>Id de evento: <InputText onChange={this.eventIdChange} /></p>
            <button onClick={() => this.createMarket()}>Create market</button>
            <p><NavLink to={'/events'} >Return</NavLink></p>
        </div>;
    }

    createMarket() {
        if (this.state.blocked !== -1 && this.state.eventId !== -1) {
            for (let i = 1; i <= 3; i++) {
                axios.post('https://localhost:44305/api/Mercados', {
                    Tipo: i,
                    CuotaOver: 1.9,
                    CuotaUnder: 1.9,
                    DineroOver: 100,
                    DineroUnder: 100,
                    Bloqueado: this.state.blocked,
                    EventoId: this.state.eventId
                });
            }
        }
    }
}

export default NewMarket;