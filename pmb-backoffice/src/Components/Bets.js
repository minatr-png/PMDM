import { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const axios = require('axios');

class Bets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bets: [],
        };
    }

    componentDidMount() {
        this.loadBets();
    }

    render() {
        return <div>
            <h1>Bets</h1>
            Email:
            <input type="text" name="date" />
            Market:
            <input type="text" name="name" />
            Event:
            <input type="text" name="name" />
            <div className="card">
                <DataTable value={this.state.bets} scrollable scrollHeight="500px">
                    <Column field='usuarioId' header='Email de usuario' />
                    <Column field='type' header='Type' />
                    <Column field='quota' header='Quota' />
                    <Column field='money' header='Money' />
                    <Column field='date' header='Date' />
                    <Column field='overUnder' header='Over o Under' />
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
                result.forEach(element => { betsList.push({ usuarioId: element.emailUsu, type: element.tipo, quota: element.cuota, money: element.dinero, date: element.fecha, overUnder: element.overUnder }); });
                this.setState({ bets: betsList });
            }
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }
}

export default Bets;