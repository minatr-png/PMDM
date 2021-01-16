import { Component, Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';

const axios = require('axios');

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            allEvents: [],
            name: "",
            date: "",
            newDate: ""
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

    newDateChange = event => {
        this.setState({ newDate: event.target.value });
    };

    btnColumn = rowData => {
        return (
            <Fragment>
                <button onClick={() => this.deleteEvent(rowData.eventId)}>Delete</button>
                <button onClick={() => this.changeEventDate(rowData.eventId)}>Change date</button>
            </Fragment>
        );
    }

    render() {
    const distance = {
        marginLeft: "400px"
    }

    const inputMargin = {
        marginLeft: "10px"
    }

    const tableStyle = {
        marginRight: "20px",
        marginTop: "10px",
        marginBottom: "10px"
    }
        return <div>
            <h1>Events</h1>
            Date:
            <InputText type="date" onChange={this.dateChange}/>
            <nobr style={inputMargin}>Event name:
            <InputText onChange={this.nameChange} style={inputMargin}/></nobr>
            <div className="card">
                <DataTable value={this.state.events} scrollable scrollHeight="500px" style={tableStyle}>
                    <Column field='eventId' header='Event ID' />
                    <Column field='local' header='Local name' />
                    <Column field='visitor' header='Visitor name' />
                    <Column field='date' header='Date' />
                    <Column body={this.btnColumn}></Column>
                </DataTable>
            </div>
            <NavLink to={'/newEvent'} >New Event</NavLink>
            <nobr style={distance}>New Date <InputText type="date" onChange={this.newDateChange}/></nobr>
        </div>;
    }

    deleteEvent(data) {
        axios.delete('https://localhost:44305/api/Eventos/' + data).then(() => {
            this.loadEvents();
        });
    }

    changeEventDate(id) {
        if (this.state.newDate !== "") {
            axios.put('https://localhost:44305/api/Eventos?id=' + id + '&fecha=' + this.state.newDate).then(() => {
                this.loadEvents();
            });
        }
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
                else if (noDate) {
                    if (element.local.toUpperCase().startsWith(this.state.name.toUpperCase()) || element.visitor.toUpperCase().startsWith(this.state.name.toUpperCase()))
                        eventsList.push({ eventId: element.eventId, local: element.local, visitor: element.visitor, date: element.date })
                }
                else if (element.date === reorderedDate) {
                    if (element.local.toUpperCase().startsWith(this.state.name.toUpperCase()) || element.visitor.toUpperCase().startsWith(this.state.name.toUpperCase()))
                        eventsList.push({ eventId: element.eventId, local: element.local, visitor: element.visitor, date: element.date });
                }
            });
            this.setState({ events: eventsList });
        }
    }
}

export default Events;