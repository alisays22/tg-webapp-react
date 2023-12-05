import './App.css';
import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './comonents/Header/Header';

function App() {
  const { OnToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
<Header />
      <button onClick={OnToggleButton}>toggle</button>
    </div>
  );
}

export default App;