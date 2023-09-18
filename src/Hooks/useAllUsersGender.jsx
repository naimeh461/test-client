import { useEffect, useState } from 'react';
import useMyData from './useMyData';

const useAllUsersGender = () => {
    const [userInfo] = useMyData();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(data)
    useEffect(() => {
        async function fetchData(gender) {
            try {
                const response = await fetch(`https://soulmate-server-routed.vercel.app/allUserGender/${gender}`);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    console.error(`Failed to fetch data. Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        // Fetch data based on the user's known gender
        if (userInfo.gender) {
            fetchData(userInfo.gender);
        }

    }, [userInfo]);

    return [data, isLoading];
};

export default useAllUsersGender;