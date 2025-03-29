import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  
 
  return (
    <>
      <div className="app">
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default App
