import React, { Component } from 'react';
import './main.css';
import Work from './Components/Work/Work';
import EduExperience from './Components/EduExperience/EduExperience';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="mainHeader">
          Emily Keator
          <h2>Full-Stack Web Developer</h2>
        </header>
        <Work/>
        <EduExperience />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
