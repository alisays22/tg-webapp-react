const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    // Implementation of onClose function
    // ...
  };

  const OnToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
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
