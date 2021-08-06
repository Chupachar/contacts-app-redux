import { deleteList as deleteRemoteList } from '../../apiList';
import { createList as createAddList } from '../../apiList';

const LIST_URL = 'https://jsonplaceholder.typicode.com/comments/';

export const ACTION_SET_ITEMS = 'ACTION_SET_ITEMS';
export const fetchList = () => (dispatch) => {
    fetch(LIST_URL)
            .then(res => res.json())
            .then(data => dispatch({
                type: ACTION_SET_ITEMS,
                payload: data
            }))
};

export const ACTION_CREATE_LIST = 'ACTION_CREATE_LIST';
export function createList(title) {
    return function(dispatch) {
        createAddList(title);
        dispatch({
            type: ACTION_CREATE_LIST,
            payload: title
        });
    }
}

export const ACTION_DELETE_LIST = 'ACTION_DELETE_LIST';
export function deleteList(id) {
    return function(dispatch) {
        deleteRemoteList(id);
        dispatch({
            type: ACTION_DELETE_LIST,
            payload: id
        })
    }
}


