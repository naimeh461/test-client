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
      <div className='h-screen'>
        <div className="flex flex-col items-center ">
          <img className="w-64 h-64 object-cover object-top rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-28" src={profileDatas?.profileImage} alt="" />
          <h4 className="text-center text-3xl text-cyan-700 font-medium mt-8">{profileDatas?.name}</h4>
          <p className="text-center text-xl my-2 text-cyan-700 font-medium">{profileDatas?.email}</p>
          <h6 className="text-center text-lg text-gray-500 border-2 border-gray-500 w-1/3 p-3  font-medium italic">{profileDatas?.role} || {profileDatas?.status}</h6>
        </div>
           
      </div>
    );
};

export default DashboardProfile;