import { useContext } from "react";
import { userDispatchContext } from "../../context/UsersContext";
import './UserItem.css'

function UserItem({ user }) {
    const dispatch = useContext(userDispatchContext)
    const handlerDeleteUser = (id) => {
        dispatch({
            type: 'DELETE_USER',
            id
        })
    }
    return (
        <li className="user-item">
            <p className='user-item-text'>{user.name}</p>
            <p className='user-item-text'>{user.email}</p>
            <button className='user-item-button edit'>Editar</button>
            <button className='user-item-button delete' onClick={() => handlerDeleteUser(user.id)}>Borrar</button>
        </li>
    );
}

export default UserItem;