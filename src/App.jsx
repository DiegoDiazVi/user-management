import AddUserForm from "./components/AddUserForm/AddUserForm.jsx";
import UserList from "./components/UserList/UserList.jsx";
import UserProvider from "./context/UsersContext";
import './App.css'

function App() {
  return (
    <main>
      <h1>Gestión de usuarios</h1>
      <UserProvider>
        <AddUserForm/>
        <UserList/>
      </UserProvider>
    </main>
  )
}

export default App
