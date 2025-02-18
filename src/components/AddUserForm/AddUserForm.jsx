import { useState } from 'react';
import './AddUserForm.css'
import { useContext } from 'react';
import { userDispatchContext } from '../../context/UsersContext';
function AddUserForm() {
    const [data, setData] = useState({
        name: '',
        email: ''
    })
    const dispatch = useContext(userDispatchContext)

    const handlerChangeName = (e) => {
        let name = e.target.value
        setData({
            ...data,
            name
        })
    }
    const handlerChangeEmail = (e) => {
        let email = e.target.value
        setData({
            ...data,
            email
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_USER',
            id: idUser++,
            name: data.name,
            email: data.email
        })
    }

    return (
        <form className='add-user-form' onSubmit={handlerSubmit}>
            <div className='add-user-name'>
                <label htmlFor="input-name">Nombres</label>
                <input id="input-name" name="input-name" type="text" placeholder="Ingresa tu nombre" value={data.name} onChange={handlerChangeName}/>
            </div>
            <div className='add-user-email'>
                <label htmlFor="input-email">Email</label>
                <input id="input-email" name="input-email" type="email" placeholder="Ingresa tu email" value={data.email} onChange={handlerChangeEmail}/>
            </div>
            <button className='add-user-button' type="submit">Agregar</button>
        </form>
    );
}

let idUser = 4

export default AddUserForm;