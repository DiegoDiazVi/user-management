import { useReducer } from "react";
import { createContext } from "react";
import { userReducer } from "../reducers/userReducer";

export const userContext = createContext(null);
export const userDispatchContext = createContext(null);

export default function UserProvider({ children }) {
    const [users, dispatch] = useReducer(userReducer, initialUsers)
    return (
        <userContext.Provider value={users}>
            <userDispatchContext.Provider value={dispatch}>
                { children }
            </userDispatchContext.Provider>
        </userContext.Provider>
    );
}

const initialUsers = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com"
    },
    {
        id: 3,
        name: "Carol Williams",
        email: "carol.williams@example.com"
    }
];