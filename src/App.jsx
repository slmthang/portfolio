import './App.scss'

import { useInView } from "react-intersection-observer";

import Info from "./components/Info";
import Education from './components/Education';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {

  return (
    <div id='main-display'>
      <main className='center'>
        <Info />
        <Education />
{/* 
        <Experiences /> */}
        <Projects />
        <Skills />
        <Certificates />
      </main>
    </div>
  )
}

export default App
