import React from 'react';
import ListItem from '../../components/ListItem/ListItem';

function List({tableInfo, onDelete}) {
    return (
        <>
            <table>
                <tbody>
            <ul>
                {tableInfo.map((item) => <ListItem key={item.id} item={item} tableInfo={item} onDelete={onDelete}/>)}
            </ul>
                </tbody>
            </table>
        </>
    );
}

export default List;