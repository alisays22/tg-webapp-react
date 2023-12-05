import React from 'react';
import "./Header.css"
import Button from '../Button/Button';
import { useTelegram } from '../hooks/useTelegram';

const Handler = () => {
const {user, onClose} = useTelegram()
    return (
        <div className = {'header'}>
            <Button onClick={onclose}>Закрыть</Button>
            <span className= {'username'}>
                {user?.username}
                </span>
        </div>
    );
};

export default Handler;