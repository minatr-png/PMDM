import { Component, Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const axios = require('axios');

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        const btnColumn = (rowData) => {
            return (
                <Fragment>
                    <button onClick={() => juanjo(rowData)}>Delete</button>
                    <button>Restore key</button>
                </Fragment>
            );
        }

        const juanjo = (mag) => {
            console.log(mag);
        }

        return <div>
            <h1>Users</h1>
            Name:
            <input type="text" name="date" />
            Surname:
            <input type="text" name="name" />
            Email:
            <input type="text" name="name" />
            <div className="card">
                <DataTable value={this.state.users} scrollable scrollHeight="500px">
                    <Column field='email' header='Email' />
                    <Column field='name' header='Name' />
                    <Column field='surnames' header='Surnames' />
                    <Column field='age' header='Age' />
                    <Column body={btnColumn} />
                </DataTable>
            </div>
        </div>;
    }

    loadUsers() {
        axios.get('https://localhost:44305/api/Usuarios').then((resolvedResult) => {
            const result = resolvedResult.data;
            var usersList = [];
            if (result != null) {
                result.forEach(element => { usersList.push({ email: element.UsuarioId, name: element.Nombre, surnames: element.Apellidos, age: element.Edad }); });
                this.setState({ users: usersList });
            }
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }
}

export default Users;