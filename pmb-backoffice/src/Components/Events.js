import { Component, Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const axios = require('axios');

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        this.loadEvents();
    }


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
            <input type="date" name="date" />
            Event name:
            <input type="text" name="name" />
            <div className="card">
                <DataTable value={this.state.events} scrollable scrollHeight="500px">
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
                result.forEach(element => { eventsList.push({ local: element.nomLocal, visitor: element.nomVisitante, date: element.nomVisitante }); });
                this.setState({ events: eventsList });
            }
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }
}

export default Events;