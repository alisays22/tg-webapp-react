import React from 'react';
import "./Header.css"
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
const {user, onClose} = useTelegram()


// useTelegram() {
//     const onClose = () => {
//   tg.close()
//     };
  
//     const OnToggleButton = () => {
//       if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//         tg.MainButton.setText("Вы выбрали това")
//       } else {
//         tg.MainButton.show();
//       }
//     };

//     // const getData = () =>{

//     // }
  
//     return {
//       onClose,
//       OnToggleButton,
//       tg,
//       user: tg.initDataUnsafe?.user,
//     };
//   }
  
    return (
        <div className = {'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <Button onClick={getData}>Отправить сообщение</Button>
            <span className= {'username'}>
                {user?.username}
                </span>
        </div>
    );
};

export default Header;