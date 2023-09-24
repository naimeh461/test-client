import useAllUsers from "../../../../../Hooks/useAllUsers";
import AllUserDTr from "./AllUserDTr";
const AllUserD = () => {
  const [users] = useAllUsers();
  console.log(users)
  return (
    <div className="relative overflow-x-auto  rounded-2xl px-6 w-[75%] mx-auto py-6 my-5">
    <h1 className='text-black text-4xl my-5 text-center font-serif'>All User</h1>
    <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card">
{/* This is table HEAD */}

<thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
  <tr className="">
    <th></th>
    <th></th>
    <th scope="col" className="">
      Name
    </th>
    <th scope="col" className="">
     Country
    </th>
    <th scope="col" className="">
     #
    </th>
    <th scope="col" className="">
      Religion
    </th>
    <th scope="col" className="">
     Work
    </th>
  </tr>
</thead>

        {/* This is table body, pending users goes here */}

        <tbody className="">
          {users?.map((user, index) => (
                  <AllUserDTr
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

export default AllUserD;
