import { Component, Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';
import Filter from './Filter';

const axios = require('axios');

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            allEvents: [],
            name: "",
            date: "",
            newDate: "",
            displayDelete: 'none',
            displayChangeDate: 'none',
            eventToDelete: -1,
            dateId: -1
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
                <button onClick={() => this.beforeDelete(rowData.eventId)}>Delete</button>
                <button onClick={() => this.beforeChange(rowData.eventId)}>Change date</button>
            </Fragment>
        );
    }

    render() {
        const tableStyle = {
            marginRight: "20px",
            marginTop: "10px",
            marginBottom: "10px"
        }
        return <view>
            <view style={{ display: this.state.displayDelete }}>
                <div style={{ backgroundColor: 'white', paddingLeft: 10, paddingBottom: 10, marginRight: 20 }}>
                    <h1 style={{ color: "black" }}>Are you sure you want to delete this Event?</h1>
                    <button onClick={() => this.deleteEvent()}>Delete</button>
                    <button onClick={() => this.setState({ displayDelete: 'none' })}>Cancel</button>
                </div>
            </view>
            <view style={{ display: this.state.displayChangeDate }}>
                <div style={{ backgroundColor: 'white', paddingLeft: 10, paddingBottom: 10, marginRight: 20, color: 'black' }}>
                    <h1 style={{ color: "black" }}>Select the new date?</h1>
                    New Date: <InputText type="date" onChange={this.newDateChange} />
                    <p>
                        <button onClick={() => this.changeEventDate()}>Change</button>
                        <button onClick={() => this.setState({ displayChangeDate: 'none' })}>Cancel</button>
                    </p>
                </div>
            </view>
            <h1>Events</h1>
            <h3>Filter by:</h3>
            <Filter name="Date:" type="date" onChange={this.dateChange}></Filter>
            <Filter name="Event name:" type="text" onChange={this.nameChange}></Filter>
            <div className="card">
                <DataTable value={this.state.events} scrollable scrollHeight="500px" style={tableStyle}>
                    <Column field='eventId' header='Event ID' />
                    <Column field='local' header='Local name' />
                    <Column field='visitor' header='Visitor name' />
                    <Column field='date' header='Date' />
                    <Column body={this.btnColumn}></Column>
                </DataTable>
            </div>
            <NavLink to={'/newEvent'} ><button>New Event</button></NavLink>
        </view>;
    }

    /*<view style={{ marginLeft: 1000 }}></view>*/
    deleteEvent() {
        axios.delete('https://localhost:44305/api/Eventos/' + this.state.eventToDelete).then(() => {
            this.loadEvents();
        });
        this.setState({ displayDelete: 'none' });
    }

    changeEventDate() {
        if (this.state.newDate !== "") {
            axios.put('https://localhost:44305/api/Eventos?id=' + this.state.dateId + '&fecha=' + this.state.newDate).then(() => {
                this.loadEvents();
            });
        }
        this.setState({ displayChangeDate: 'none' });
    }

    beforeDelete(id) {
        this.setState({ displayDelete: '' });
        this.setState({ eventToDelete: id });
    }

    beforeChange(id) {
        this.setState({ displayChangeDate: '' });
        this.setState({ dateId: id });
    }

    loadEvents() {
        axios.get('https://localhost:44305/api/Eventos').then((resolvedResult) => {
            const result = resolvedResult.data;
            let eventsList = [];
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
        let eventsList = [], noName = false, noDate = false;
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