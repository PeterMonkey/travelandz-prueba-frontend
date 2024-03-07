import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({isAuth, redirect='/'}) => {
    if(!isAuth) {
        return <Navigate to={redirect} replace/>
    }
    return <Outlet/>
}

export default ProtectedRoute