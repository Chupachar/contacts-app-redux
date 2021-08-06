import React from 'react';
import s from './Contacts.module.css';
import List from '../../components/List/List';

function Contacts({tableInfo, onDelete}) {
    return (
        <div className={s.contacts__block}>
                <List tableInfo={tableInfo} onDelete={onDelete}/>
        </div>
    );
}

export default Contacts;