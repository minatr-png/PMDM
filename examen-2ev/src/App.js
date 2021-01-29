import './App.css';
import EXButton from './components/EXButton';

function App() {
  return (
    <div className="App">
      <div style={{alignSelf: 'center', justifyContent: 'center'}}>
        <EXButton text='Listo para hacer click' style={{height: 100}}></EXButton>
      </div>
    </div>
  );
}

export default App;
