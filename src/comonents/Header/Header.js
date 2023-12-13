import React from 'react';
import "./Header.css"
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
const {user, onClose,OnCountButton} = useTelegram()

  
    return (
        <div className = {'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <Button onClick={OnCountButton}>Отправить сообщение</Button>
            <span className= {'username'}>
                {user?.username}
                </span>
        </div>
    );
};

export default Header;