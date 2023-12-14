
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
      tg.MainButton.setText(`КНОПКА`)
    } else {
      tg.MainButton.show();
    }
  };

  const OnBackButton = () => {
tg.BackButton.show()
  }

  const OnProgressButton = () => {
    tg.MainButton.showProgress()
  }

  return {
    onClose,
    OnToggleButton,
    OnBackButton,
    OnProgressButton,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
