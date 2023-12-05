import React from 'react';
import "./Header.css"
import Button from '../Button/Button';

const Handler = () => {
    const tg = window.Telegram.WebApp;
    const Onclose = () =>{
        tg.close()
        }

    return (
        <div className = {'header'}>
            <Button onClick={onclose}>Закрыть</Button>
            <span className='username'>
                {tg.initDataUnsafe?.user?.username}
                </span>
        </div>
    );
};

export default Handler;