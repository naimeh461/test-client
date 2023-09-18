
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSupport = () => {
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isSupport', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (!user?.email) {
                return null;
            }
            const res = await axiosSecure(`/users/support/${user?.email}`)
            return res.data.match;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useSupport;

