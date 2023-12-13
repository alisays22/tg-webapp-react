import {useState } from 'react';
const tg = window.Telegram.WebApp;

export function useTelegram() {
// eslint-disable-next-line no-unused-vars
 const [count, setCount] = useState(0);


  const onClose = () => {
tg.close()
  };

  const OnCountButton = () => {
    if (tg.MainButton.isVisible) {
      // Увеличиваем счетчик и обновляем текст кнопки
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        tg.MainButton.setText(`Вы выбрали товар ${newCount}`);
     
        return newCount;
      });
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
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
    OnToggleButton,
    OnCountButton,
    getData,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
