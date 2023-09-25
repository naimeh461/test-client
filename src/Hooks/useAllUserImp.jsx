import { useEffect, useState } from 'react';
import useMyData from './useMyData';

const useAllUserImp = () => {
    const [userInfo] = useMyData();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(data, userInfo)
    useEffect(() => {
        async function fetchData(gender) {
            try {
                const response = await fetch(`http://localhost:5000/allUserImp/${gender}`);
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
        if (userInfo.gender) {
            fetchData(userInfo.gender);
        }

    }, [userInfo]);

    return [data, isLoading];
};

export default useAllUserImp;