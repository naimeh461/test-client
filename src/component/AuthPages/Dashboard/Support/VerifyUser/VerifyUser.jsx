import { useEffect, useState } from 'react';
import VerifyTr from './VerifyTr';
import Loading from '../../../../../Shared/Loading';

const VerifyUser = () => {
  const [verify, setVerify] = useState([]);
  const [loading, setLoading] = useState(true);
  
  console.log(verify);
  
  useEffect(() => {
    fetch('http://localhost:5000/verifyUser')
      .then(res => res.json())
      .then(data => {
        setVerify(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if(loading)
  return <><Loading></Loading></>

  return (
    <div className="relative overflow-x-auto  rounded-2xl px-6 w-[75%] mx-auto py-6 my-5">
      <h1 className='text-black text-4xl my-5 text-center font-serif'>Verify User</h1>
      <table className="table  text-sm text-left text-gray-500 overflow-hidden">
        {/* This is table HEAD */}

        <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
          <tr className="">
            <th>#</th>
            <th>NID Image</th>
            <th>User Image</th>
            <th>Name</th>
            <th>Action</th>
           
          </tr>
        </thead>

        {/* This is table body, pending users goes here */}

        <tbody >
          {verify?.map((user, index) => (
           <VerifyTr
           key={user._id}
           user={user}
           index={index}
         />
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default VerifyUser;