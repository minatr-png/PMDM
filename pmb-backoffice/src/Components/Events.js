import { Component, Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const axios = require('axios');

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            allEvents: [],
            name: "",
            date: ""
        };
    }

    componentDidMount() {
        this.loadEvents();
    }

    dateChange = event => {
        this.setState({ date: event.target.value }, () => { this.filter(); });
    };

    nameChange = event => {
        this.setState({ name: event.target.value }, () => { this.filter(); });
    };


    render() {
        const juanjo = (mag) => {
            console.log(mag);
        }

        const btnColumn = (rowData) => {
            return (
                <Fragment>
                    <button onClick={() => juanjo(rowData)}>Eliminar</button>
                    <button>Cambiar fecha</button>
                </Fragment>
            );
        }

        return <div>
            <h1>Events</h1>
            Date:
            <input type="date" name="date" onChange={this.dateChange} />
            Event name:
            <input type="text" name="name" onChange={this.nameChange} />
            <div className="card">
                <DataTable value={this.state.events} scrollable scrollHeight="500px">
                    <Column field='eventId' header='Event ID' />
                    <Column field='local' header='Local name' />
                    <Column field='visitor' header='Visitor name' />
                    <Column field='date' header='Date' />
                    <Column body={btnColumn}></Column>
                </DataTable>
            </div>
            <button>Nuevo evento</button>
        </div>;
    }

    loadEvents() {
        axios.get('https://localhost:44305/api/Eventos').then((resolvedResult) => {
            const result = resolvedResult.data;
            var eventsList = [];
            if (result != null) {
                result.forEach(element => {
                    const basicDate = new Date(element.Fecha);
                    const reorderedDate = basicDate.getDate() + "-" + (basicDate.getMonth() + 1) + "-" + basicDate.getFullYear();
                    eventsList.push({ eventId: element.EventoId, local: element.NomLocal, visitor: element.NomVisitante, date: reorderedDate });
                });
                this.setState({ events: eventsList });
                this.setState({ allEvents: eventsList });
            }
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }

    filter() {
        var eventsList = [], noName = false, noDate = false;
        const basicDate = new Date(this.state.date);
        const reorderedDate = basicDate.getDate() + "-" + (basicDate.getMonth() + 1) + "-" + basicDate.getFullYear();
        if (this.state.name === "") noName = true;
        if (this.state.date === "") noDate = true;
        if (noName && noDate) this.setState({ events: this.state.allEvents });
        else {
            this.state.allEvents.forEach(element => {
                if (noName && element.date === reorderedDate)
                    eventsList.push({ eventId: element.eventId, local: element.local, visitor: element.visitor, date: element.date });
                else if (noDate && element.local.toUpperCase().startsWith(this.state.name.toUpperCase()))
                    eventsList.push({ eventId: element.eventId, local: element.local, visitor: element.visitor, date: element.date });
                else if (element.local.toUpperCase().startsWith(this.state.name.toUpperCase()) && element.date === reorderedDate)
                    eventsList.push({ eventId: element.eventId, local: element.local, visitor: element.visitor, date: element.date });
            });
            this.setState({ events: eventsList });
        }
    }
}

export default Events;