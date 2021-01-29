import './App.css';
import EXSeconView from './components/EXSecondView';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainView from './components/MainView';
import Ejercicio1View from './components/Ejercicio1View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact>
            <MainView></MainView>
          </Route>
          <Route path={'/EXSeconView'}>
            <EXSeconView></EXSeconView>
          </Route>
          <Route path={'/Ejercicio1'}>
            <Ejercicio1View></Ejercicio1View>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
