import './App.css';
import { useState } from 'react';
import Terminal from './components/Terminal'
import About from "./components/About";
import Header from "./components/Header";
import Experience from "./components/Experience";


function App() {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isExperienceOpen, setExperienceOpen] = useState(false);

  const openAbout = () => {
    setAboutOpen(true);
  };

  const closeAbout = () => {
    setAboutOpen(false);
  };

  const openExperience = () => {
    setExperienceOpen(true);
  };

  const closeExperience = () => {
    setExperienceOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Terminal openAbout={openAbout} openExperience={openExperience}/>
      <About isOpen={isAboutOpen} closeModal={closeAbout} />
      <Experience isOpen={isExperienceOpen} closeModal={closeExperience} />
    </div>
  );
}

export default App;
