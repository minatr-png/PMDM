import { Component } from 'react';
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

    componentDidMount(){
        this.loadUsers();
    }

    render() {
        return <div>
            <h1>Users</h1>
            <div>            
                <div className="card">
                    <DataTable value={this.state.users} scrollable scrollHeight="200px">
                        <Column field='email' header='Email' />
                        <Column field='name' header='Name' />
                        <Column field='surnames' header='Surnames' />
                        <Column field='age' header='Age' />
                    </DataTable>
                </div>
            </div>
            <button>Delete user</button>
        </div>;
    }

    loadUsers() {
        axios.get('https://localhost:44305/api/Usuarios').then((resolvedResult) => {
            const result = resolvedResult.data;
            var usersList = [];
            result.forEach(element => { usersList.push({ email: element.email, name: element.nombre, surnames: element.apellidos, age: element.edad }); });
            this.setState({ users: usersList });
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }
}

export default Users;