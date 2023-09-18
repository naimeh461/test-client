
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin ,isLoading: isAdminLoading} = useQuery({
        queryKey : ["isAdmin", user?.email],
        enabled : !loading,
        queryFn : async () => {
            if (!user?.email) {
                return null;
            }
            const res = await axiosSecure(`/users/admin/${user.email}`)
            console.log(res)
            return res.data.match;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;