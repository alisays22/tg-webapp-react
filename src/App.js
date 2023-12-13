import './App.css';
import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './comonents/Header/Header'; // исправлена опечатка в импорте
import { Route, Routes } from 'react-router-dom';
import ProductList from './comonents/ProductList/ProductList'; // исправлена опечатка в импорте
import Form from './comonents/Form/Form'


function App() {
  const { tg } = useTelegram(); // исправлены названия деструктурируемых переменных

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </div>
  );
}



export default App;
