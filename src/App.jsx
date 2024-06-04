import './App.scss'

import Info from "./components/Info";
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {

  return (
    <div id='main-display'>
      <Info />
      <Experiences />
      <Projects />
      <Skills />
      <Certificates />
    </div>
  )
}

export default App
