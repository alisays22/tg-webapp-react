
const tg = window.Telegram.WebApp;

export function useTelegram() {
// eslint-disable-next-line no-unused-vars


  const onClose = () => {
tg.close()
  };

  // const showButton = () => {  
  //     tg.MainButton.show();
  //     tg.MainButton.setText(`Кнопка`);
  //   }
  // };


  const OnToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
      tg.MainButton.setText(`Вы выбрали товар`)
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onClose,
    OnToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
