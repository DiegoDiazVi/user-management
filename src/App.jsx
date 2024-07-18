import AddUserForm from "./components/AddUserForm/AddUserForm.jsx";
import UserProvider from "./context/UsersContext";

function App() {
  return (
    <main>
      <h1>Gestión de usuarios</h1>
      <UserProvider>
        <AddUserForm/>
      </UserProvider>
    </main>
  )
}

export default App
