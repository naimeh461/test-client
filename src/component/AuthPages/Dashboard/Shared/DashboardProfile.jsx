import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const DashboardProfile = () => {
  const {user} = useContext(AuthContext);
  const [profileDatas, setProfileDatas] = useState({});
  const [loading, setLoading]= useState(true)
  useEffect(() =>{
    fetch(`https://soulmates-server.vercel.app/profileData/${user?.email}`)
    .then(res => res.json())
    .then(data =>{
      console.log('data', data );
      setLoading(false)
      setProfileDatas(data)
    })
    .catch(error => console.log(error))
  },[user])
  console.log(profileDatas);
    return (
        <div>
           {/* {
            profileDatas?.map(data => div)
           } */}
             <div className="ms-96 ps-52 avatar my-5">
              <div className="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img className="h-40 w-40" src={profileDatas?.profileImage}/>
                </div>
            </div>
              <div >
                <h4 className="text-center text-3xl my-2 text-cyan-700 font-medium">{profileDatas?.name}</h4>
               <p className="text-center text-xl my-2 text-cyan-700 font-medium">{profileDatas?.email}</p>
               <div className='ms-56 my-3'>
               <h6 className="text-center text-lg text-gray-500 border-2 border-gray-500 w-1/3 ms-72 p-3  font-medium italic">{profileDatas?.role} || {profileDatas?.status}</h6>
               </div>
              </div>
           
        </div>
    );
};

export default DashboardProfile;