import React from 'react';
import Navbar from "./components/Navbar";
import Article from './components/Article';
import "./App.css"


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Article/>
    </div>
  );
}

export default App;
