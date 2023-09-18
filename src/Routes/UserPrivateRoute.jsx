import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Shared/Loading";


const UserPrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="text-center h-screen"><Loading></Loading></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/signin" state={{from: location}}></Navigate>
};
export default UserPrivateRoute;