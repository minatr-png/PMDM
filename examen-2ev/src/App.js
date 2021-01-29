import './App.css';
import EXButton from './components/EXButton';

function App() {
  return (
    <div className="App" style={{ flex: 1, alignContent: "center", justifyContent: "center", backgroundColor: 'red' }}>
      <EXButton text='Listo para hacer click'></EXButton>
    </div>
  );
}

export default App;
