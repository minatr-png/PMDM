import { Component } from 'react';
import { Chart } from 'primereact/chart';

class Reports extends Component {
    render() {
        const basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Apuestas por día',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Altas por día',
                    data: [28, 48, 40, 19, 86, 27, 90],
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
            <Chart type="line" data={basicData} options={basicOptions}/>
        </div>;
    }
}

export default Reports;