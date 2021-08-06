import React, { useState } from 'react';
import s from './Form.module.css';

function Form({hide, addNewData}) {

    const [newData, setNewData] = useState(
        [
            {
                name: '',
                surname: '',
                phone: ''
            }
        ]
    );

    function submitHandler(e) {
        e.preventDefault();
        resetForm();
        addNewData(newData)
    }
    function changeHandler(e) {
        setNewData({
            ...newData,
            [e.target.name]:e.target.value
        });
        console.log(e.target.value)
    }
    function resetForm() {
        setNewData(
            {
                name: '',
                surname: '',
                phone: ''
            }
        )
    }

    return (
        <div className={s.form}>
            <form className={s.form__container} onSubmit={submitHandler}>
                <input className={s.form__input}
                       type="text"
                       placeholder='name'
                       value={newData.name}
                       name="name"
                       onChange={changeHandler}
                />
                <input className={s.form__input}
                       type="text"
                       placeholder='email'
                       value={newData.surname}
                       name="email"
                       onChange={changeHandler}
                />
                <input className={s.form__input}
                       type="text"
                       placeholder='body'
                       value={newData.phone}
                       name="body"
                       onChange={changeHandler}
                />
                <div className={s.btn}>
                    <button className={s.btn__form}>Save</button>
                    <button className={s.btn__form} onClick={hide}>Cancel</button>
                </div>
            </form>
        </div>
    );
}


export default (Form);