import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      
      <div class="col-12 text-center d-flex align-items-center justify-content-center" 
        style={{backgroundColor: '#222f3e', height: '40px'}}>
        <p class="m-0 text-white">Copyright &copy; 2025 PhamGiaLuong.</p>
      </div>
    </div>
  );
}

export default App;
