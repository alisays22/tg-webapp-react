import React from 'react';
import "./Header.css"
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
const {user, onClose,increaseCounter,decreaseCounter} = useTelegram()

  
    return (
        <div className = {'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <Button onClick={increaseCounter}>+</Button>
            <Button onClick={decreaseCounter}>-</Button>
            <span className= {'username'}>
                {user?.username}
                </span>
        </div>
    );
};

export default Header;