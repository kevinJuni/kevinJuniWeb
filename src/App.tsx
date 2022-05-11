import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeaderLayout from './layouts/MainHeaderLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './pages/intro/Intro';

function App() {
  return (
    <div className="App">
    <Intro/>
    {/* <MainHeaderLayout/> */}
    </div>
  );
}

export default App;
