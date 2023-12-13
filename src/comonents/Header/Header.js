import React from 'react';
import "./Header.css"
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
const {user, onClose,OnToggleButton} = useTelegram()

  
    return (
        <div className = {'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <Button onClick={OnToggleButton}>Показать кнопку</Button>
            <span className= {'username'}>
                {user?.username}
                </span>
        </div>
    );
};

export default Header;