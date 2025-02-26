import React from 'react';
import Cart from './components/Cart';
import AddItemForm from './components/AddItemForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Интернет-магазин</h1>
      <Cart />
      <AddItemForm />
    </div>
  );
}

export default App;