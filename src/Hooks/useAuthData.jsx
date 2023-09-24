import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAuthData = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    console.log(data)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:5000/profileData/${user?.email}`);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    console.error(`Failed to fetch data. Status: ${response.status}`);
                }
            } catch (error) {
                setData("data not found")
            } finally {
                setIsLoading(false);
            }
        }
    fetchData();
    }, [user]);

    return [data, isLoading];
};

export default useAuthData;
