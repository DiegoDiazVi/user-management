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
        case 'UPDATE_USER':{
            return users.map(user => {
                if (user.id === action.id) {
                    return {
                        ...user,
                        name: action.name,
                        email: action.email
                    }
                } else {
                    return user
                }
            })
        }
        default:
            throw new Error('Accion no conocida')
    }
}