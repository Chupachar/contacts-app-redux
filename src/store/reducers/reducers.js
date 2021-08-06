
import {
    ACTION_CREATE_LIST,
    ACTION_DELETE_LIST,
    ACTION_SET_ITEMS

} from "../actions/actions";


const initialState = {
tableInfo:
        [
            // {
            //     id: 1,
            //     name: 'John',
            //     surname: 'Mahler',
            //     phone: 453455
            // },
            // {
            //     id: 2,
            //     name: 'Bob',
            //     surname: 'Razor',
            //     phone: 964233
            // },
            // {
            //     id: 3,
            //     name: 'Andy',
            //     surname: 'James',
            //     phone: 208276
            // }
        ],
    };

export default function rootReducer(state = initialState, {type, payload}){
    switch(type) {
        case ACTION_CREATE_LIST:
            return {
                ...state,
                    tableInfo: [...state.tableInfo, payload]
            };
        case ACTION_DELETE_LIST:
            return {
                ...state,
                tableInfo: state.tableInfo.filter((item) => item.id !== payload)
            };
        case ACTION_SET_ITEMS:
            return {tableInfo: payload};
        default: return state;
    }
}



