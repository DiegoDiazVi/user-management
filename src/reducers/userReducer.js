export function userReducer (users, action) {
    switch (action.type) {
        case 'ADD_USER':{
            const newUsers = [...users, {
                name: action.name,
                email: action.email
            }]
            return newUsers
        }
        default:
            throw new Error('Accion no conocida')
    }
}