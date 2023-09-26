import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useSupport from "../Hooks/useSupport";
import Loading from "../Shared/Loading";


const SupportRoute = ({children}) => {
    let location = useLocation();
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useSupport();
    if(loading || isInstructorLoading){
        return <div className="text-center"><Loading></Loading></div>
    }
    if(user && isInstructor){
        return children;
    }

    return <Navigate to="/authoritysignin"  state={{from : location}}></Navigate>
};

export default SupportRoute;