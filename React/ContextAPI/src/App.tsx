import { UserProvider } from './context/UserContext'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
      <UserProvider>
        <UserProfile></UserProfile>
      </UserProvider>
  )
}

export default App
