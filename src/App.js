import React from "react"
import Styles from './App.module.css';
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Descritpion from './Description/Description'
import SomeProjects from './SomeProjects/SomeProjects'
import ProgramsCanva from './ProgramsCanvas/ProgramsCanvas'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={Styles.App}>
      <Header></Header>
      <Banner></Banner>
      <Descritpion> </Descritpion>
      <SomeProjects title="ALGUNOS PROYECTOS"></SomeProjects>
      <ProgramsCanva title="SKILLS"></ProgramsCanva>
      <a  className={Styles.DownloadButton} href="https://drive.google.com/uc?export=download&id=1UM2tmeHWT3Ei_yluMFL2EMoWQ16udFun" download>
                    <div>Descargar CV</div>
      </a>
      <Footer></Footer>
    </div>
  );
}

export default App;
