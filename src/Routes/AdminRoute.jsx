import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";


const AdminRoute = ({children}) => {
    let location = useLocation();
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    if(loading || isAdminLoading){
        return <div className="text-center"><Loading></Loading></div>
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/authoritysignin"  state={{from : location}}></Navigate>
};

export default AdminRoute;