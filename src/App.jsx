import AddUserForm from "./components/AddUserForm";

function App() {
  return (
    <main>
      <h1>Gestión de usuarios</h1>
      <AddUserForm/>
    </main>
  )
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

export default App
