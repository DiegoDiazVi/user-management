import { useContext } from "react";
import { userContext } from "../../context/UsersContext";
import UserItem from "../UserItem/UserItem";
import './UserList.css'

function UserList() {
    const users = useContext(userContext)
    return (
        <ul className='user-list'>
            <div className='user-list-header'>
                <p>Nombre</p>
                <p>Email</p>
            </div>
            {users.length > 0 && users.map(user => {
                return (
                    <UserItem key={user.id} user={user}/>
                )
            })}
        </ul>
    );
}

export default UserList;