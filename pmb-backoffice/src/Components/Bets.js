import { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const axios = require('axios');

class Bets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bets: [],
            allBets: [],
            email: "",
            marketId: 0,
            eventId: 0
        };
    }

    componentDidMount() {
        this.loadBets();
    }

    emailChange = event => {
        this.setState({ email: event.target.value }, () => {this.filter();});
    };

    marketChange = event => {
        this.setState({ marketId: event.target.value }, () => {this.filter();});
    };

    eventChange = event => {
        this.setState({ eventId: event.target.value }, () => {this.filter();});
    };

    render() {
        return <div>
            <h1>Bets</h1>
            Email:
            <input type="text" onChange={this.emailChange}/>
            Market:
            <InputText keyFilter="pnum" onChange={this.marketChange}/>
            Event:
            <input type="text" onChange={this.eventChange}/>
            <div className="card">
                <DataTable value={this.state.bets} scrollable scrollHeight="500px">
                    <Column field='betId' header='Bet ID' />
                    <Column field='userId' header='User email' />
                    <Column field='quota' header='Quota' />
                    <Column field='money' header='Money' />
                    <Column field='marketId' header='Mercado ID' />
                    <Column field='eventId' header='Event ID' />
                </DataTable>
            </div>
            <button>New market</button>
            <button>Block market</button>
        </div>;
    }

    loadBets() {
        axios.get('https://localhost:44305/api/Apuestas').then((resolvedResult) => {
            const result = resolvedResult.data;
            var betsList = [];
            if (result != null) {
                result.forEach(element => { betsList.push({ userId: element.UsuarioId, betId: element.ApuestaId, quota: element.Cuota, money: element.Dinero, marketId: element.Mercado.MercadoId, eventId: element.Mercado.EventoId }); });
                this.setState({ bets: betsList });
                this.setState({ allBets: betsList });
            }
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }

    filter() {
        var betList = [], noEmail = false, noMarket = false, noEvent = false;
        if (this.state.email === "") noEmail = true;
        if (this.state.marketId === "") noMarket = true;
        if (this.state.eventId === "") noEvent = true;
        if (this.state.email !== "") {            
            this.state.allBets.forEach(element => {
                if (element.userId.toUpperCase().startsWith(this.state.email.toUpperCase())) 
                    betList.push({ userId: element.userId, betId: element.betId, quota: element.quota, money: element.money, marketId: element.marketId, eventId: element.eventId });
            });
            this.setState({ bets: betList });
        }
        else this.setState({ bets: this.state.allBets });
    }

    /*
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
    */
}

export default Bets;