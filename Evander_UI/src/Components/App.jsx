import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../assets/Styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import NavbarComponent from './Navbar';
import FooterComponent from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import ProjectDetails from '../Pages/ProjectDetails';
import Process from '../Pages/Process';
import ScrollToTop from './ScrollToTop';

function App() {

  return (
      <Router>
          <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
          <NavbarComponent />
          <ScrollToTop/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projectdetails" element={<ProjectDetails />} />
              <Route path="/process" element={<Process />} />
          </Routes>
          <FooterComponent/>
      </Router>
  )
}

export default App
