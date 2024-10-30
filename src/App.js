import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <body>
        <p>Programador y diseñador de videojuegos con conocimientos en otros campos como la Inteligencia Artificial, Big Data, animación, modelado y sonido. He completado tareas de programación y diseño en equipos medianos y grandes.</p>
        <br/>
        <p>Mi objetivo profesional es adquirir experiencia en programación participando en diferentes proyectos.</p>
      </body>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Soy Manuel Adelino!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
