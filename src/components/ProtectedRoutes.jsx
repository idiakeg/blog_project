import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const { pathname } = useLocation();
    const user = JSON.parse(localStorage.getItem("bird_app_user"));
    return user ? children : <Navigate to="/login" state={pathname} replace />;
};

export default ProtectedRoutes;
