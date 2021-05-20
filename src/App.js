
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCounter from './components/ItemCount';
//import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nombre="Charlito"/>
      <ItemCounter cantidad={1} stock={10}/>
    </div>
  );
}

export default App;
