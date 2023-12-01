import { useEffect } from 'react';
import './App.css';


const tg = window.Telegram.WebApp;
function App() {

  useEffect = () =>{
tg.ready()
  }

const Onclose = () =>{
tg.close()
}
  return (
    <div className="App">
      work
      <button onClick={Onclose}>Закрыть</button>
    </div>
  );
}

export default App;
