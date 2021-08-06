import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'
import { deleteList, createList, fetchList } from './store/actions/actions';

function App({onDelete, addNewData, tableInfo}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchList())
    }, []);

    const [addForm, setAddForm] = useState(false);

    function add() {
        console.log('add form');
        setAddForm(true);
    }
    function hide() {
        console.log('hide form');
        setAddForm(false);
    }

    // function addNewData(newData) {
    //     setTableInfo(
    //         [...tableInfo, {...newData, id: Date.now()}]
    //     );
    // }
    // function onDelete(id) {
    //     setTableInfo(
    //         tableInfo.filter((item) => item.id !== id)
    //     )
    // }

  return (
    <div className="App">
        <Contacts tableInfo={tableInfo} onDelete={onDelete}/>
        {addForm ? (
                <Form hide={hide} addNewData={addNewData}/>
            ) : (
                <button onClick={add} className={'add__form-btn'}>add Form</button>
            )
        }

    </div>
  );
}

function mapStateToProps({tableInfo}) {
    return {
        tableInfo,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addNewData: (newData) => dispatch(createList(console.log('add'), newData)),
        onDelete:   (id)      => dispatch(deleteList(console.log('delete'), id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
