export function userReducer (users, action) {
    switch (action.type) {
        case 'ADD_USER':{
            const newUsers = [...users, {
                name: action.name,
                email: action.email
            }]
            return newUsers
        }
        case 'DELETE_USER':{
            return users.filter(user => user.id !== action.id)
        }
        default:
            throw new Error('Accion no conocida')
    }
}