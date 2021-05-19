
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nombre="Charlito"/>
    </div>
  );
}

export default App;
