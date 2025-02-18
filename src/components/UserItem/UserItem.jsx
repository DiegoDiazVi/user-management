import { useContext, useState } from "react";
import { userDispatchContext } from "../../context/UsersContext";
import './UserItem.css'
import ModalUpdateUser from "../ModalUpdateUser/ModalUpdateUser";

function UserItem({ user }) {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useContext(userDispatchContext)
    const handlerDeleteUser = (id) => {
        dispatch({
            type: 'DELETE_USER',
            id
        })
    }
    return (
        <>
            <li className="user-item">
                <p className='user-item-text'>{user.name}</p>
                <p className='user-item-text'>{user.email}</p>
                <button className='user-item-button edit' onClick={() => {setIsEditing(!isEditing)}}>Editar</button>
                <button className='user-item-button delete' onClick={() => handlerDeleteUser(user.id)}>Borrar</button>
            </li>
            {isEditing && <ModalUpdateUser user={user} setIsEditing={setIsEditing}/>}
        </>
    );
}

export default UserItem;