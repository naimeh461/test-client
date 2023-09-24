import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useEffect, useMemo } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useMyData = () => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    const [axiosSecure] = useAxiosSecure();
    const fetchData = async (email) => {
        if (!email) {
            return null;
        }
        const res = await axiosSecure(`/userInfo?email=${email}`);
        return res.data;
    };

    // Use useMemo to memoize the query key
    const queryKey = useMemo(() => ['userInfo', user?.email], [user?.email]);

    // Ensure that hooks are called at the top level of the component
    const { data: userInfo = [], refetch } = useQuery({
        queryKey,
        enabled: !loading && !!user?.email,
        queryFn: () => fetchData(user?.email),
    });

    useEffect(() => {
        if (!user?.email) {
            // Handle the case where there's no valid user email (e.g., redirect to sign-in).
        }
    }, [user?.email]);

    return [userInfo, refetch];
};

export default useMyData;
