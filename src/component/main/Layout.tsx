import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuthHook";







const Layout = () => {
    const { token } = useAuth();
    const location = useLocation();

    return (
        <>
            {
                token != "" ? <Outlet />
                    : <Navigate to={"/Login"} state={{ from: location }} replace></Navigate>
            }

        </>
    )
}

export default Layout;