import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Panel from './pages/Panel'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/panel' Component={Panel}/>
      </Routes>
    </Router>
  )
}

export default App
