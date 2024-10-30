import logo from './logo.svg';
import SOSG from './SOSgameplay.jpg'
import './App.css';
import Header from './Header/Header'
import SomeProjects from './SomeProjects/SomeProjects'

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <div className='Description'>
        <p>Programador y diseñador de videojuegos con conocimientos en otros campos como la Inteligencia Artificial, Big Data, animación, modelado y sonido. He completado tareas de programación y diseño en equipos medianos y grandes.</p>
        <p>Mi objetivo profesional es adquirir experiencia en programación participando en diferentes proyectos.</p>
        <button className='DownloadButton'>Download CV </button>
      </div>
      <SomeProjects className="SomeProjects"></SomeProjects>
        
        
    
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
