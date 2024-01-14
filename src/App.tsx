import React from 'react';

// 캄포넌트
import Header from './components/section/Header';
import Home from './components/section/Home';
import About from './components/section/About';
import Skill from './components/section/Skill';
import Project from './components/section/Project';
import Study from "./components/section/Study"
import Footer from './components/section/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Study />
      <Footer />
    </div>
  );
}

export default App;
