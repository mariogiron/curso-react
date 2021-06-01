import './App.css';
import Contador from './components/Contador';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      {/* <Saludo nombre="Mario">Contenido interno</Saludo>
      <Saludo nombre="Luis">Otro contenido</Saludo> */}

      <Contador />
    </div>
  );
}

export default App;
