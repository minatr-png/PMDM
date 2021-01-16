import { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';

const axios = require('axios');

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: "",
            visitor: "",
            date: ""
        };
    }

    localChange = event => {
        this.setState({ local: event.target.value });
    };

    visitorChange = event => {
        this.setState({ visitor: event.target.value });
    };

    dateChange = event => {
        this.setState({ date: event.target.value });
    };

    render() {
        return <div>
            <h1>Events</h1>
            <p>Local team: <InputText onChange={this.localChange} /></p>
            <p>Visitor team: <InputText onChange={this.visitorChange} /></p>
            <p>Date: <InputText type="date" onChange={this.dateChange} /></p>
            <button onClick={() => this.createEvent()}>Create event</button>
            <p><NavLink to={'/events'} >Return</NavLink></p>
        </div>;
    }

    createEvent() {
        if (this.state.local !== "" && this.state.visitor !== "" && this.state.date !== "") {
            axios.post('https://localhost:44305/api/Eventos', {
                NomLocal: this.state.local,
                NomVisitante: this.state.visitor,
                fecha: this.state.date
            });
        }
    }
}

export default Events;