import { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const axios = require('axios');

var users = [];

const promise = axios.get('https://localhost:44305/api/Usuarios');
promise.then((resolvedResult) => {
    const result = resolvedResult.data;
    console.log(result)
    result.forEach(element => {
        users.push({ email: element.email, name: element.nombre, surnames: element.apellidos, age: element.edad});  
    });    
}, (rejectedResult) => {
    console.error(rejectedResult.statusText);
});

class Users extends Component {
    render() {
        return <div>
            <h1>Users</h1>
            <div>
                <div className="card">
                    <DataTable value={users} scrollable scrollHeight="200px">
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
}

export default Users;