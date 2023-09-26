import { useQuery } from '@tanstack/react-query'

const useAllUsers = () => {
    const { isLoading, data} = useQuery(
        { queryKey: ['allUser' ], 
        queryFn: async () =>{
            const res = await fetch(`https://soulmates-server.vercel.app/allUser`)
            return res.json();
        },
     })
     return [data, isLoading]
};

export default useAllUsers;