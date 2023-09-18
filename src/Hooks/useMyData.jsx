import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const useMyData = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['userInfo'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (!user?.email) {
                return null;
            }
            const res = await axiosSecure(`/userInfo?email=${user.email}`);
            return res.data;
        }
    });

    useEffect(() => {
        if (!user?.email) {
            // navigate('/signin');
        }
    }, [user?.email]);

    return [userInfo, refetch];
};

export default useMyData;