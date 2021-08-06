import React from 'react';
import s from './ListItem.module.css';

function ListItem({tableInfo, onDelete, item}) {

    function onDeleteClick() {
        onDelete(item.id)
    }

    return (
        <>
                <tr>
                    <th className={s.contacts__info}>
                        Name:
                        <li className={s.contacts__infoItem}>{tableInfo.name}</li></th>
                    <th className={s.contacts__info}>
                        Email:
                        <li className={s.contacts__infoItem}>{tableInfo.email}</li></th>
                    <th className={s.contacts__info}>
                        Body:
                        <li className={s.contacts__infoItem}>{tableInfo.body}</li></th>
                    <th>
                        <button className={s.contacts__btn} onClick={onDeleteClick}>Delete</button>
                    </th>
                </tr>
        </>
    );
}


export default ListItem;