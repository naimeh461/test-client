import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useState } from "react";

const VerifyTr = ({ user, index, handleVerify, handleCancle }) => {
  const [modal, setModal] = useState(false);
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
        <td
          scope="row"
          className="flex items-center px-6 py-4 whitespace-nowrap "
        >
          <a href={user?.verificationImage}>
            <img
              className="w-10 h-10 rounded-full "
              src={user?.verificationImage}
              alt="Jese image"
            />
          </a>
        </td>
        <td>
          <div className="text-black ">{user?.name}</div>
        </td>
        <td className="px-6 py-4">
          <div className="">
            <button
              onClick={() => handleVerify(user?.email)}
              className="text-xl text-white bg-green-500 p-2 rounded-full ml-8 cursor-pointer"
            >
              <AiOutlineCheck />
            </button>
            <button
              onClick={() => handleCancle(user?.email)}
              className="text-xl text-white bg-red-500 p-2 rounded-full ml-8 cursor-pointer"
            >
              <RxCross1 />
            </button>
          </div>
        </td>
      </motion.tr>

      {modal ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
            <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card relative">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="flex">
                  <div>
                    <img
                      className="h-full w-1/2"
                      src={user?.verificationImage}
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
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button onClick={() => setModal(false)} className="btn">
                      Close
                    </button>
                  </form>
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