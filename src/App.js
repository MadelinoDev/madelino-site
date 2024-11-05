import logo from './logo.svg';
import SOSG from './SOSgameplay.jpg'
import './App.css';
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Descritpion from './Description/Description'
import SomeProjects from './SomeProjects/SomeProjects'
import ProgramsCanva from './ProgramsCanvas/ProgramsCanvas'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Descritpion> </Descritpion>
      <SomeProjects className="SomeProjects" title="ALGUNOS PROYECTOS"></SomeProjects>
      <ProgramsCanva title="SKILLS"></ProgramsCanva>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
