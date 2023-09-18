import { useEffect, useState } from "react";
import Pending from "./Pending";
import Swal from "sweetalert2";
import './ManageUser.css'

import Approve from "./Approve";
import Denied from "./Denied";
import { useRef } from "react";
const MangeUsersX = () => {
  const searchRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setsearch] = useState('')
  useEffect(() => {
    fetch(`https://soulmates-server.vercel.app/authority?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);

      })
      .catch((error) => {
        console.log(error);
      });
  }, [users, search]);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center ">
        <span className="loading loading-bars loading-lg scale-150"></span>
      </div>

    );
  }
  const handleMakeApprove = (id) => {
    fetch(`https://soulmates-server.vercel.app/makeApprove/${id}`, {
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
    console.log(id);
    fetch(`https://soulmates-server.vercel.app/makeDenied/${id}`, {
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
  const pendingUsers = users.filter((user) => user.status === "pending");
  const approvedUsers = users.filter((user) => user.status === "approved");
  const deniedUsers = users.filter((user) => user.status === "denied");

  const handleSearch = () => {
    setsearch(searchRef.current.value)
  };
  return (
    <div className="relative overflow-x-auto  rounded-2xl px-6 w-[75%] mx-auto py-6 my-10 cards ">
      {/* Input field */}

      <div className="InputContainer">
        <input
          ref={searchRef}
          placeholder="Search By Name.."
          id="input"
          className="input"
          name="text"
          type="text"
        />
        <button onClick={handleSearch} className="btn rounded-3xl btn-sm">Search</button>

      </div>
      {/* pending table */}
      <h1 className="text-black text-4xl my-8 text-center font-serif">
        Pending Users
      </h1>
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
              Pending
            </th>
            <th scope="col" className=" ">
              Action
            </th>
          </tr>
        </thead>

        {/* This is table body, pending users goes here */}

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

      {/* Approved Table */}
      <h1 className="text-black text-4xl my-8 text-center font-serif">
        Approve Users
      </h1>
      <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card mt-5">
        {/* This is table HEAD */}

        <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
          <tr className="">
            <th></th>
            <th></th>
            <th scope="col" className="">
              Name
            </th>
            <th scope="col" className="">
              Approve
            </th>
            <th scope="col" className=" ">
              Action
            </th>
          </tr>
        </thead>

        {/* This is table body, pending users goes here */}

        <tbody className="">
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

      {/* Denied User Table */}
      <h1 className="text-black text-4xl my-8 text-center font-serif">
        Denied Users
      </h1>
      <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card mt-5">
        {/* This is table HEAD */}

        <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
          <tr className="">
            <th></th>
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

        {/* This is table body, pending users goes here */}

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
    </div>
  );
};
export default MangeUsersX;