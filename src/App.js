import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import ScrollToTop from './component/utils/scrollToTop';

 export default function App() {
  return (
    <div className="App">
      <Router>

        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}
