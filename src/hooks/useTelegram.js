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
      // Определяем новое значение счётчика
      const newCount = prevCount - 1;
      // Обновляем текст основной кнопки
      tg.MainButton.setText(`Вы выбрали товар ${newCount}`);
  
      // Если newCount равен 0, скрываем основную кнопку
      if (newCount <= 0) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
  
      // Возвращаем обновлённое значение счётчика
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
