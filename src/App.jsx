import React from 'react';
import Logo from './components/Logo';
import Coin from './components/PriceTracker';
import './components/main.css'

function App() {
  return (
    <div className="App">
      <Logo />
      <Coin />
    </div>
  );
}

export default App;