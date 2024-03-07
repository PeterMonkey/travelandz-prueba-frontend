import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Panel from './pages/Panel'
import { Toaster } from './components/ui/toaster'
import ProtectedRoute from './utils/ProtectedRoute'

function App() {

  const token = localStorage.getItem('token')

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route element={<ProtectedRoute isAuth={token}/>}>
          <Route path='/panel' Component={Panel}/>
        </Route>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
