import { useState, useContext } from "react";
import { userDispatchContext } from "../../context/UsersContext";
import './ModalUpdateUser.css'

function ModalUpdateUser({ user, setIsEditing }) {
    const [data, setData] = useState({
        name: user.name,
        email: user.email
    })

    const dispatch = useContext(userDispatchContext)

    const handlerChangeName = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
    }

    const handlerChangeEmail = (e) => {
        setData({
            ...data,
            email: e.target.value
        })
    }

    const handlerSubmit = (e, id) => {
        e.preventDefault();
        let name = e.target['update-input-name'].value
        let email = e.target['update-input-email'].value
        setIsEditing(false);
        dispatch({
            type: 'UPDATE_USER',
            id,
            name,
            email
        })
    }

    return (
        <section>
            <form className='update-user-form' onSubmit={(e) => handlerSubmit(e, user.id)}>
                <input name="update-input-name" type="text" placeholder="Ingresa tu nombre"  value={data.name} onChange={handlerChangeName}/>
                <input name="update-input-email" type="email" placeholder="Ingresa tu email" value={data.email} onChange={handlerChangeEmail}/>
                <button className='update-user-button' type="submit">Guardar</button>
            </form>
        </section>
    );
}

export default ModalUpdateUser;