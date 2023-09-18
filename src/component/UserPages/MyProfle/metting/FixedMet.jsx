import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import message from "../../../../assets/other/message.svg";

const FixedMet = ({ partnerUser }) => {
  const { _id, name } = partnerUser;
  const [showModal8, setShowModal8] = useState(false);
  const { register, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const [metForm, setMetForm] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://soulmates-server.vercel.app/userPlanInfo?email=${user?.email}`
      )
      .then((response) => {
        setUserInfo(response.data);
      });
  }, [user, loading]);

  const showModal = () => {
    setShowModal8(true);
    setMetForm(true);
  };

  const onSubmit = (data) => {
    const setMet = {
      userId: userInfo._id,
      partner: data.id,
      metDate: new Date(data.date),
      status: "pending",
    };

    axios
      .post(
        `https://soulmates-server.vercel.app/setMeeting?email=${user?.email}`,
        setMet
      )
      .then((response) => {
        if (response.data.insertedId) {
          setShowModal8(false);
          Swal.fire("Wait!", "Your Meeting is pending now", "success");
        }
      });
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="bg-[#3E4A5B] text-[#F0F2F5] px-[15px] py-[10px] rounded-full flex gap-1 items-center"
      >
        <span>
          <img className="hidden lg:block" src={message} alt="" />
        </span>
        Meeting
      </button>
      {showModal8 ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
            <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card relative">
              <button
                onClick={() => setShowModal8(false)}
                className=" bg-[#FF725E] text-white py-2 px-4 rounded-md w-fit absolute top-2 right-2"
              >
                X
              </button>

              {metForm ? (
                <>
                  <div className="md:card-body ">
                    <p className="text-lg font-medium text-center">
                      Set Metting With {name}
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="hidden"
                        value={_id}
                        className="w-full text-blue-950"
                        {...register("id", { required: true })}
                      />

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Select Your Date</span>
                        </label>
                        <label className="input-group">
                          <span>Date</span>
                          <input
                            type="datetime-local"
                            className="input input-bordered"
                            {...register("date", { required: true })}
                          />
                        </label>
                      </div>
                      <div className="mt-5 text-center">
                        <button className="w-3/6 bg-[#FF725E] text-white py-2 px-4 rounded-md">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FixedMet;
