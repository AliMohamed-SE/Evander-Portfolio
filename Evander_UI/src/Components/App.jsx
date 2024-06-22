import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../assets/Styles/App.css'

// Components
import NavbarComponent from './Navbar';
import FooterComponent from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

function App() {

  return (
      <Router>
          <NavbarComponent />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          <FooterComponent/>
      </Router>
  )
}

export default App
