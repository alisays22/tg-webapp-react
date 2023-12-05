import React, { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.read()
  }, []);

  return <div className="App">work</div>;
}

export default App;