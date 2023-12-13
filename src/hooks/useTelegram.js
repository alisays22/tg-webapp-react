const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
tg.close()
  };

  const OnToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
      tg.MainButton.setText("Вы выбрали товар")
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
    getData,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
