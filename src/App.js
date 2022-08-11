import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import  BootCamps  from './components/bootcamps/BootCamps';
import { Contact } from './components/contact/Contact';
import  ContactUs  from './GenerallContact';
import { NavBar } from './components/navBar/NavBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='bootcamps' element={<BootCamps />} />
        <Route path='contact' element={<Contact />} />
        <Route path='contactus' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
