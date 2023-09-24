import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useSupport from "../Hooks/useSupport";


const SupportRoute = ({children}) => {
    let location = useLocation();
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useSupport();
    if(loading || isInstructorLoading){
        return <div className="text-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user && isInstructor){
        return children;
    }

    return <Navigate to="/authoritysignin"  state={{from : location}}></Navigate>
};

export default SupportRoute;