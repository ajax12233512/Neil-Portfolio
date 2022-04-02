import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Background from './components/Background/Background';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { useEffect } from 'react';


function App() {

 

  // useEffect(() => {
  //   window.addEventListener('mousemove', (e) => {
  //     console.log('clientx',e.clientX)
  //     console.log('clienty',e.clientY)
  //     const circle = document.createElement('span');
  //     circle.style.width = '40px'
  //     circle.style.border = '1px solid black';
  //     document.appendChild(circle);
      
  //   })
  // })

  return (
    <div className="App">
        <Background />
        <Navbar />
        <Main />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
