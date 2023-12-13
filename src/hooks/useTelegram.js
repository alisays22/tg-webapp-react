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

  return {
    onClose,
    OnToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
