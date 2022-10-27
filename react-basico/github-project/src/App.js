import logo from './logo.svg';
import './App.css';

// Componente: Que es un bloque de vista el cual combian HTML y JS
function App() {
  function saludar () {
    console.log("Hola Mundo")
  }


  return (
    <div>
      <h1>Este es mi primer componente</h1>
      <div>
        <h2>Div Hijo</h2>
        <button onClick={saludar}>Mostrar Mensaje de Saludo</button>
      </div>
    </div>
  );
}

export default App;