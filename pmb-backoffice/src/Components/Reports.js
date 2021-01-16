import { Component } from 'react';
import { Chart } from 'primereact/chart';

const axios = require('axios');

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bets: [],
            users: []
        };
    }

    componentDidMount() {
        this.betsPerMonth();
        this.usersPerMonth();
    }

    emptyMonthArray = () => {
        var array = [];
        for (let i = 0; i <= 11; i++) {
            array[i] = 0;
        }
        return array;
    }

    betsPerMonth = () => {
        var monthlyBets = this.emptyMonthArray();
        axios.get('https://localhost:44305/api/Apuestas').then((resolvedResult) => {
            const result = resolvedResult.data;
            if (result != null) {
                result.forEach(element => {
                    monthlyBets[new Date(element.Fecha).getMonth()]++;
                });
                this.setState({ bets: monthlyBets });
            }
            else console.log("No hay apuestas en la base de datos.");
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }

    usersPerMonth = () => {
        var monthlyUsers = this.emptyMonthArray();
        axios.get('https://localhost:44305/api/Usuarios').then((resolvedResult) => {
            const result = resolvedResult.data;
            if (result != null) {
                result.forEach(element => {
                    monthlyUsers[new Date(element.FechaAlta).getMonth()]++;
                });
                this.setState({ users: monthlyUsers });
            }
            else console.log("No hay apuestas en la base de datos.");
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }

    render() {
        const basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Apuestas por día',
                    data: this.state.bets,
                    fill: false,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Altas por día',
                    data: this.state.users,
                    fill: false,
                    borderColor: '#FFA726'
                }
            ]
        };

        let basicOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        };
        return <div>
            <h1>Reports</h1>
            <Chart type="line" data={basicData} options={basicOptions} />
        </div>;
    }
}

export default Reports;