import { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';

const axios = require('axios');

class Bets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bets: [],
            allBets: [],
            email: "",
            marketId: "",
            eventId: ""
        };
    }

    componentDidMount() {
        this.loadBets();
    }

    emailChange = event => {
        this.setState({ email: event.target.value }, () => { this.filter(); });
    };

    marketChange = event => {
        this.setState({ marketId: event.target.value }, () => { this.filter(); });
    };

    eventChange = event => {
        this.setState({ eventId: event.target.value }, () => { this.filter(); });
    };

    render() {
        return <div>
            <h1>Bets</h1>
            Email:
            <InputText onChange={this.emailChange} />
            Market:
            <InputText keyfilter="pnum" onChange={this.marketChange} />
            Event:
            <InputText keyfilter="pnum" onChange={this.eventChange}/>
            <DataTable value={this.state.bets} scrollable scrollHeight="500px" className={'table'}>
                <Column field='betId' header='Bet ID'/>
                <Column field='userId' header='User email' />
                <Column field='quota' header='Quota' />
                <Column field='money' header='Money' />
                <Column field='marketId' header='Mercado ID' />
                <Column field='eventId' header='Event ID' />
            </DataTable>
            <NavLink to={'/newMarket'} >New market</NavLink>
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
        if (noEmail && noEvent && noMarket) this.setState({ bets: this.state.allBets });
        else {
            this.state.allBets.forEach(element => {
                if (noEmail) {
                    if (noMarket && element.eventId == this.state.eventId) { betList.push({ userId: element.userId, betId: element.betId, quota: element.quota, money: element.money, marketId: element.marketId, eventId: element.eventId }); }
                    else if (noEvent && element.marketId == this.state.marketId) { betList.push({ userId: element.userId, betId: element.betId, quota: element.quota, money: element.money, marketId: element.marketId, eventId: element.eventId }); }
                    else if (element.eventId == this.state.eventId && element.marketId == this.state.marketId) { betList.push({ userId: element.userId, betId: element.betId, quota: element.quota, money: element.money, marketId: element.marketId, eventId: element.eventId }); }
                }
                else if (noMarket) {
                    if (noEvent && element.userId.toUpperCase().startsWith(this.state.email.toUpperCase())) { betList.push({ userId: element.userId, betId: element.betId, quota: element.quota, money: element.money, marketId: element.marketId, eventId: element.eventId }); }
                    else if (element.userId.toUpperCase().startsWith(this.state.email.toUpperCase()) && element.eventId == this.state.eventId) { betList.push({ userId: element.userId, betId: element.betId, quota: element.quota, money: element.money, marketId: element.marketId, eventId: element.eventId }); }
                }
                else if (noEvent && element.userId.toUpperCase().startsWith(this.state.email.toUpperCase()) && element.marketId == this.state.marketId) {
                    { betList.push({ userId: element.userId, betId: element.betId, quota: element.quota, money: element.money, marketId: element.marketId, eventId: element.eventId }); }
                }
                else if (element.userId.toUpperCase().startsWith(this.state.email.toUpperCase()) && element.eventId == this.state.eventId && element.marketId == this.state.marketId) { betList.push({ userId: element.userId, betId: element.betId, quota: element.quota, money: element.money, marketId: element.marketId, eventId: element.eventId }); }
            });
            this.setState({ bets: betList });
        }
    }
}

export default Bets;