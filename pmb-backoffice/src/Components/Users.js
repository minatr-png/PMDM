import { Component, Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const axios = require('axios');

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: "",
            surname: "",
            email: ""
        };
    }

    componentDidMount() {
        this.loadUsers();
    }

    nameChange = event => {
        this.setState({ name: event.target.value }, () => {this.filter();});
    };

    surnameChange = event => {
        this.setState({ surname: event.target.value }, () => {this.filter();});
    };

    emailChange = event => {
        this.setState({ email: event.target.value }, () => {this.filter();});
    };

    render() {
        const btnColumn = (rowData) => {
            return (
                <Fragment>
                    <button onClick={() => this.deleteUser(rowData.email)}>Delete</button>
                    <button>Restore key</button>
                </Fragment>
            );
        }

        const tableStyle = {
            marginRight: "20px",
            marginTop: "10px"
        }

        const inputMargin = {
            marginLeft: "10px"
        }

        return <div>
            <h1>Users</h1>
            Name:
            <InputText type="text" onChange={this.nameChange}/>
            <nobr style={inputMargin}>Surname:
            <InputText type="text" onChange={this.surnameChange}/></nobr>
            <nobr style={inputMargin}>Email:
            <InputText type="text" onChange={this.emailChange}/></nobr>
            <div className="card">
                <DataTable value={this.state.users} scrollable scrollHeight="500px" style={tableStyle}>
                    <Column field='email' header='Email' />
                    <Column field='name' header='Name' />
                    <Column field='surnames' header='Surnames' />
                    <Column field='age' header='Age' />
                    <Column body={btnColumn} />
                </DataTable>
            </div>
        </div>;
    }

    deleteUser(data) {
        axios.delete('https://localhost:44305/api/Usuarios?id=' + data).then(()=>{
            this.loadUsers();
        });
    }

    loadUsers() {
        axios.get('https://localhost:44305/api/Usuarios').then((resolvedResult) => {
            const result = resolvedResult.data;
            var usersList = [];
            if (result != null) {
                result.forEach(element => { usersList.push({ email: element.UsuarioId, name: element.Nombre, surnames: element.Apellidos, age: element.Edad }); });
                this.setState({ users: usersList });
                this.setState({ allUsers: usersList });
            }
        }, (rejectedResult) => {
            console.error(rejectedResult.statusText);
        });
    }

    filter() {
        var usersList = [], noEmail = false, noName = false, noSurname = false;
        if (this.state.email === "") noEmail = true;
        if (this.state.name === "") noName = true;
        if (this.state.surname === "") noSurname = true;
        if (noEmail && noName && noSurname) this.setState({ users: this.state.allUsers });      
        else {
            this.state.allUsers.forEach(element => {
                if (noEmail) {
                    if (noName && element.surnames.toUpperCase().startsWith(this.state.surname.toUpperCase())) 
                        {usersList.push({ email: element.email, name: element.name, surnames: element.surnames, age: element.age });}
                    else if(noSurname && element.name.toUpperCase().startsWith(this.state.name.toUpperCase()))
                        {usersList.push({ email: element.email, name: element.name, surnames: element.surnames, age: element.age });}
                    else if (element.name.toUpperCase().startsWith(this.state.name.toUpperCase()) && element.surnames.toUpperCase().startsWith(this.state.surname.toUpperCase()))
                        {usersList.push({ email: element.email, name: element.name, surnames: element.surnames, age: element.age });}
                }
                else if (noName) {
                    if(noSurname && element.email.toUpperCase().startsWith(this.state.email.toUpperCase()))
                        {usersList.push({ email: element.email, name: element.name, surnames: element.surnames, age: element.age });}
                    else if (element.email.toUpperCase().startsWith(this.state.email.toUpperCase()) && element.surnames.toUpperCase().startsWith(this.state.surname.toUpperCase()))
                        {usersList.push({ email: element.email, name: element.name, surnames: element.surnames, age: element.age });}
                }
                else if (noSurname && element.email.toUpperCase().startsWith(this.state.email.toUpperCase()) && element.name.toUpperCase().startsWith(this.state.name.toUpperCase())){
                    usersList.push({ email: element.email, name: element.name, surnames: element.surnames, age: element.age });
                }
                else if (element.email.toUpperCase().startsWith(this.state.email.toUpperCase()) && element.name.toUpperCase().startsWith(this.state.name.toUpperCase()) && element.surnames.toUpperCase().startsWith(this.state.surname.toUpperCase()))
                    {usersList.push({ email: element.email, name: element.name, surnames: element.surnames, age: element.age });}
            });
            this.setState({ users: usersList });
        }
    }
}

export default Users;