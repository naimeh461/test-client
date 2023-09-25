import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const DashboardProfile = () => {
  const {user} = useContext(AuthContext);
  const [profileDatas, setProfileDatas] = useState({});
  const [loading, setLoading]= useState(true)
  console.log(user,profileDatas);
  useEffect(() =>{
    fetch(`http://localhost:5000/profileData/${user?.email}`)
    .then(res => res.json())
    .then(data =>{
      setLoading(false)
      setProfileDatas(data)
    })
    .catch(error => console.log(error))
  },[user])

    return (
//       <div className=' flex flex-row items-center max-w-xs p-6 shadow-md rounded-xl sm:px-12my-4 dark:bg-gray-900 dark:text-gray-100 bg-blue-200'>
       
        
// 	<img src={profileDatas?.profileImage} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
// 	<div className="flex space-y-4 text-center divide-x divide-gray-700">
// 		<div className="my-2 space-y-1">
// 			<h2 className="text-xl font-semibold sm:text-2xl">{profileDatas?.name}</h2>
// 			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{profileDatas?.email}</p>
// 		</div>
// 		<div className="flex justify-center pt-2 space-x-4 align-center">
// 			<p>{profileDatas?.role} || {profileDatas?.status}</p>
// 		</div>
// 	</div>

  
// </div>
           
<div className="m-4 max-w-md p-8 sm:flex sm:space-x-6 rounded-xl bg-blue-200 dark:bg-gray-900 dark:text-gray-100">
<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
  <img src={profileDatas?.profileImage} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
</div>
<div className="flex flex-col space-y-4">
  <div>
    <h2 className="text-2xl font-semibold">{profileDatas?.name}</h2>
    <span className="text-sm dark:text-gray-400">{profileDatas?.email}</span>
  </div>
  <div className="space-y-1">
  <p>{profileDatas?.role} || {profileDatas?.status}</p>
  </div>
</div>
</div>
    );
};

export default DashboardProfile;