import {useState } from 'react';
const tg = window.Telegram.WebApp;

export function useTelegram() {
// eslint-disable-next-line no-unused-vars
 const [count, setCount] = useState(0);


  const onClose = () => {
tg.close()
  };

  const increaseCounter = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      tg.MainButton.show();
      tg.MainButton.setText(`Вы выбрали товар ${newCount}`);
      return newCount;
    });
  };

  const decreaseCounter = () => {
    setCount((prevCount) => {
      const newCount = Math.max(0, prevCount - 1); // Предотвращаем получение отрицательного значения
      tg.MainButton.show();
      tg.MainButton.setText(`Вы выбрали товар ${newCount}`);
      return newCount;
    });
  };

  const OnToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
      tg.MainButton.setText(`Вы выбрали товар`)
    } else {
      tg.MainButton.show();
    }
  };

  const getData = () =>{
    tg.setData();
        }

  return {
    onClose,
    increaseCounter,
    decreaseCounter,
    OnToggleButton,
    getData,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
