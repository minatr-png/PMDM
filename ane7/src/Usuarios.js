import './App.css';
import users from './Usuarios.json'

constructor(props) {
    super(props);

    this.state = {
     btnActive: '',
    }
}

const Usuarios = (surn) => {
    const user = (user) => {
        <div>
            <p>---------------------------------------</p>
            <p>Nombre: {user.name}</p>
            <p>Apellido: {user.surname}</p>
            <p>Fecha de nacimiento: {user.dateOfBirth}</p>
        </div>
    }

    const usersBuilder = () => {
        for (let i = 0; i < users.length; i++) user(users[i]);
    }

    const usersBuilderSurname = (surn) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].surname === surn) user(users[i]);
        }
    }
    
    const btnChangeActive = (value) => {
        if (value === '') this.setState({btnActive: 'disabled'});
        else this.setState({btnActive: ''});
    }

    return (
        <div className="App">
            <input onChange={btnChangeActive(value)}></input>
            {usersBuilder()}
            <button {this.state.btnActive} onClick={usersBuilderSurname(surn)}>dsahjk</button>
        </div>
    );
}

export default Usuarios;

