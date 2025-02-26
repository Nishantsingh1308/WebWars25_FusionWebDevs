import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/about';
import Details from './components/Details/Details';
import Register from './components/Register/Register';
import Contact from './components/contacts/contact';

const App = () => {
  return (
    <>
    <Header />
    
    <Home />
    <About />
    <Details />
    <Register />
    <Contact />
    
    </>

  );
};

export default App;
