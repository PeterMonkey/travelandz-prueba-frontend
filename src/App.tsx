import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path='/register' Component={Register}/>
      </Routes>
    </Router>
  )
}

export default App
