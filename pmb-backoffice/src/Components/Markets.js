import { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { NavLink } from 'react-router-dom';

const axios = require('axios');

class Markets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markets: [],
            newDate: ""
        };
    }

    componentDidMount() {
        this.loadMarkets();
    };

    dateChange = event => {
        this.setState({ date: event.target.value }, () => { this.filter(); });
    };

    btnColumn = rowData => {
        return (<button onClick={() => this.unBlockMarket(rowData.marketId, rowData.blocked)}>Block</button>);
    }

    render() {
        const tableStyle = {
            marginRight: "20px"
        }

        return <div>
            <h1>Markets</h1>
            <DataTable value={this.state.markets} scrollable scrollHeight="500px" style={tableStyle}>
                <Column field='marketId' header='Market ID' />
                <Column field='type' header='Type' />
                <Column field='blocked' header='Blocked' />
                <Column field='eventId' header='Event ID' />
                <Column body={this.btnColumn}></Column>
            </DataTable>
            <NavLink to={'/bets'} >Return</NavLink>
        </div>;
    }

    unBlockMarket(id, blocked) {
        var block;
        if (blocked === "yes") block = "false";
        else block = "true";
        axios.put('https://localhost:44305/api/Mercados?id=' + id + '&blocked=' + block).then(() => {
            this.loadMarkets();
        });
    }

    loadMarkets() {
        axios.get('https://localhost:44305/api/Mercados').then((resolvedResult) => {
            const result = resolvedResult.data;
            var marketsList = [], blocked = "";
            if (result != null) {
                result.forEach(element => {
                    if (element.Bloqueado) blocked = "yes";
                    else blocked = "no";
                    marketsList.push({ marketId: element.MercadoId, type: element.Tipo, blocked: blocked, eventId: element.EventoId });
                });
                this.setState({ markets: marketsList });
            }
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }
}

export default Markets;