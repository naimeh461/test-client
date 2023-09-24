import { useQuery } from '@tanstack/react-query'

const useAllUsers = () => {
    const { isLoading, data} = useQuery(
        { queryKey: ['allUser' ], 
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/allUser`)
            return res.json();
        },
     })
     return [data, isLoading]
};

export default useAllUsers;