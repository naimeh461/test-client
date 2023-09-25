import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

const VerifyTr = ({ user, index }) => {
  const [modal, setModal] = useState(false);
  console.log(user)
  const handleVerify = () => {
    fetch(`http://localhost:5000/userVerify/${user?.email}`, {
      method: "PUT"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setModal(false)
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
      })
      .catch(error => console.log(error))
  }

  const handleCancle = () => {
    fetch(`http://localhost:5000/userCancle/${user?.email}`, {
      method: "PUT"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setModal(false)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `Her verification is cancled!`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }

      })
      .catch(error => console.log(error))

  }
  return (
    <>
      <motion.tr
        onClick={() => setModal(true)}
        className="bg-white   hover:bg-gray-50 "
        // remake
        transition={{ delay: 0.1 * index }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <td className="text-black">{index + 1}</td>
        <td><img className="w-10 h-10 rounded-full " src={user?.verificationImage} alt="Jese image" /></td>
        <td> <img className="w-10 h-10 rounded-full" src={user?.userImage} /></td>
        <td> <div className="text-black ">{user?.name}</div></td>
        <td>
          {user?.profile_complete >= 90 ? (
            <button className="  bg-green-900 text-white p-2 rounded-xl" >Verify</button>
          ) : (
            <button className="bg-gray-600 text-white p-2 rounded-xl" onClick={() => setModal(true)}>Details</button>
          )}
        </td>

      </motion.tr>

      {modal ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">

            <div className="modal-box  max-w-7xl">
              <div className="flex gap-5">
                <div className="flex gap-3">
                  <img
                    className="w-[300px] h-[200px] "
                    src={user?.verificationImage}
                    alt=""
                  />
                  <img
                    className="h-full w-1/2"
                    src={user?.userImage}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-serif uppercase">
                    {user?.name}
                  </h3>
                  <p>{user?.email}</p>
                </div>
              </div>

              <div className="modal-action">
                <div className="">
                  <button onClick={() => handleVerify()} className='text-xl btn text-white bg-green-500 p-2 rounded-full cursor-pointer'><AiOutlineCheck /></button>
                  <button onClick={() => handleCancle(user?.email)} className='text-xl btn text-white bg-red-500 p-2 rounded-full ml-2 cursor-pointer'><RxCross1 /></button>
                </div>

              </div>
            </div>

          </div>
        </>
      ) : null}
    </>
  );
};

export default VerifyTr;