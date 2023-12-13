import {useState } from 'react';
const tg = window.Telegram.WebApp;

export function useTelegram() {
// eslint-disable-next-line no-unused-vars
 const [count, setCount] = useState(0);


  const onClose = () => {
tg.close()
  };

  const OnCountButton = () => {

      // Увеличиваем счетчик и обновляем текст кнопки
      setCount((prevCount) => {
        const newCount = prevCount + 1;
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
    OnToggleButton,
    OnCountButton,
    getData,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
