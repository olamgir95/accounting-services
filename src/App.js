import { Route, Routes } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/blogs" element={<Blogs />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
    </Routes>
    <Footer />
  </>
  )
}

export default App;
