import React, { useEffect, useState } from "react";
import Pending from "./Pending";
import Swal from "sweetalert2";
import Approve from "./Approve";
import Denied from "./Denied";
import { useRef } from "react";

const MangeUsersX = () => {
  const searchRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
console.log(search);

  useEffect(() => {
    fetch(`http://localhost:5000/authority?search=${search.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  const handleMakeApprove = (id) => {
    fetch(`http://localhost:5000/makeApprove/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `He is approved now!`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const handleMakeDenied = (id) => {
    fetch(`http://localhost:5000/makeDenied/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `He is Denied now!`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const pendingUsers = users.filter((user) => user?.status === "pending");
  const approvedUsers = users.filter((user) => user?.status === "approved");
  const deniedUsers = users.filter((user) => user?.status === "denied");

  const handleSearch = () => {
    setSearch(searchRef.current.value.toLowerCase()); // Convert search term to lowercase
  };

  return (
    <div className=" overflow-scroll overflow-x-hidden rounded-2xl px-6 w-[75%] mx-auto py-6 my-10 cards h-[calc(100vh-70px)]">
      {/* Input field */}
      <div className="InputContainer w-">
        <input
          ref={searchRef}
          placeholder="Search By Name.."
          id="input"
          className="input w-full"
          name="text"
          type="text"
          onChange={handleSearch} // Trigger search on input change
        />
      </div>

      {/* Render Pending Users section if there are pending users */}
      {pendingUsers.length > 0 && (
        <>
          <h1 className="text-black text-4xl my-8 text-center font-serif">
            Pending Users
          </h1>
          <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card">
            {/* This is table HEAD */}
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
              <tr className="">
                <th>#</th>
                <th>photo</th>
                <th >Name
                </th>
                <th scope="col" className="">
                  Pending
                </th>
                <th scope="col" className=" ">
                  Action
                </th>
              </tr>
            </thead>
            {/* This is table body, pending users go here */}
            <tbody className="">
              {pendingUsers.map((user, index) => (
                <Pending
                  key={user._id}
                  user={user}
                  index={index}
                  handleMakeApprove={() => handleMakeApprove(user._id)}
                  handleMakeDenied={() => handleMakeDenied(user._id)}
                />
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Render Approve Users section if there are approved users */}
      {approvedUsers.length > 0 && (
        <>
          <h1 className="text-black text-4xl my-8 text-center font-serif">
            Approve Users
          </h1>
          <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card mt-5">
            {/* This is table HEAD */}
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
              <tr>
                <th>#</th>
                <th>photo</th>
                <th>Name</th>
                <th>Approve </th>
                <th> Action</th>
              </tr>
            </thead>
            {/* This is table body, approved users go here */}
            <tbody >
              {approvedUsers.map((user, index) => (
                <Approve
                  key={user._id}
                  user={user}
                  index={index}
                  handleMakeDenied={() => handleMakeDenied(user._id)}
                />
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Render Denied Users section if there are denied users */}
      {deniedUsers.length > 0 && (
        <>
          <h1 className="text-black text-4xl my-8 text-center font-serif">
            Denied Users
          </h1>
          <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card mt-5">
            {/* This is table HEAD */}
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
              <tr className="">
                <th>#</th>
                <th>Photo</th>
                <th scope="col" className="">
                  Name
                </th>
                <th scope="col" className="">
                  Denied
                </th>
                <th scope="col" className=" ">
                  Action
                </th>
              </tr>
            </thead>
            {/* This is table body, denied users go here */}
            <tbody className="">
              {deniedUsers.map((user, index) => (
                <Denied
                  key={user._id}
                  user={user}
                  index={index}
                  handleMakeDenied={() => handleMakeDenied(user._id)}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default MangeUsersX;
