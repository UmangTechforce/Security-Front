import './App.css';
import Header from './components/Header';
import Login from './components/login';
import Home from './components/Home';
import User from './components/User';
import Register from './components/Register';
import Employees from './components/Employees';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.clear(); // Clear local storage
  //   };

  //   // Add the event listener
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employees" element={<Employees/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
