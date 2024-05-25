import './App.scss'

import Header from './components/Header/Header';
import Info from "./components/sections/Info";
import Experiences from './components/sections/Experiences';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';

function App() {

  return (
    <div id='main-display'>
      <Header />
      <Info />
      <Experiences />
      <Projects />
      <Skills />
      <Certificates />
    </div>
  )
}

export default App
