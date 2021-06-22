import './App.css';
import { useState } from 'react';
import Lista from './components/Lista';
import Formulario from './components/Formulario';

function App() {

  const [items, setItems] = useState([
    { titulo: 'Menudo es mi padre', protagonista: 'El Fary', imagen: 'https://blogs.lasprovincias.es/elsindromededarrin/wp-content/uploads/sites/21/2016/04/Menudo-es-mi-padre.jpg' },
    { titulo: 'Lleno, por favor', protagonista: 'Alfredo Landa', imagen: 'https://i.ytimg.com/vi/2xKqlabcA5o/hqdefault.jpg' }
  ]);

  const onNuevaSerie = (nuevaSerie) => {
    setItems([
      ...items,
      nuevaSerie
    ])
  }

  return (
    <div className="App">
      <h1>Series y Programas que nunca tendríamos que haber perdido</h1>
      <Formulario nuevaSerie={onNuevaSerie} />
      <Lista series={items} />
    </div>
  );
}

export default App;
