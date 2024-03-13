import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Teacher from './pages/Teacher';
import CourseCard from './pages/CourseCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
import Login from './pages/Login';
const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>

      {/* <MyNavbar/>
      <Home/>
<Teacher/>
<CourseCard/>

      <Footer/> */}
    </div>
  );
}

export default App