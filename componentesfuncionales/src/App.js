import './App.css';
import Contador from './components/Contador';
import Saludo from './components/Saludo';

function App() {

  function multiploDe5(num) {
    console.log('ES múltiplo de 5!!! -> ' + num);
  }

  return (
    <div className="App">
      <Saludo nombre="Leocadio" />
      <Contador aviso={multiploDe5} />
    </div>
  );
}

export default App;
