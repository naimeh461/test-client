import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { RxCross2 } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";

const FixedMet = ({ partnerUserID }) => {
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
      title: data.title,
      descript: data.descript,
      location: data.location,
      metDate: new Date(data.date),
      status: "pending",
    };

    console.log(setMet);

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
        className="xl:py-4 xl:px-4 py-2 px-2 bg-[#128587] text-[#F0F2F5] rounded-full"
      >
        Invite Meeting
      </button>
      {showModal8 ? (
        <>
          <div className="fixed z-50 w-full overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-40 backdrop-filter bg-black">
            <div className="bg-white w-1/3 rounded-lg shadow-2xl card relative">
              <button
                onClick={() => setShowModal8(false)}
                className=" text-[#FF725E] text-3xl font-bold w-fit absolute top-2 right-3"
              >
                <RxCross2 />
              </button>

              {metForm ? (
                <>
                  <div className="md:card-body ">
                    <h1 className="text-3xl font-medium text-left">
                      Schedule a Metting
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="hidden"
                        value={partnerUserID}
                        className="w-full text-blue-950"
                        {...register("id", { required: true })}
                      />

                      <div className="form-control mb-5">
                        <label className="label">
                          <span className="label-text font-bold">
                            Meeting Title<span className="text-red-600">*</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your meeting title is here"
                          className="py-3 px-4 border border-[#FF725E] rounded-lg"
                          {...register("title", { required: true })}
                        />
                      </div>

                      <div className="form-control mb-5">
                        <label className="label">
                          <span className="label-text font-bold">
                            Description
                          </span>
                        </label>
                        <textarea
                          placeholder="Write here.... (optional)"
                          className="h-20 py-3 px-4 border border-[#FF725E] rounded-lg"
                          {...register("descript")}
                        ></textarea>
                      </div>

                      <div className="form-control mb-10">
                        <label className="label">
                          <span className="label-text font-bold">
                            Set Metting Location
                            <span className="text-red-600">*</span>
                          </span>
                        </label>
                        <label className="input-group">
                          <input
                            type="location"
                            placeholder="Choose your location"
                            className="py-3 px-4 border border-[#FF725E] rounded-lg w-full"
                            {...register("location", { required: true })}
                          />
                          <span className="text-2xl">
                            <IoLocationSharp />
                          </span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold">
                            Select Your Date
                            <span className="text-red-600">*</span>
                          </span>
                        </label>
                        <label className="input-group">
                          <span>Date</span>
                          <input
                            type="datetime-local"
                            className="py-3 px-4 border border-[#FF725E] rounded-lg w-full"
                            {...register("date", { required: true })}
                          />
                        </label>
                      </div>

                      <div className="mt-5 text-center">
                        <button className="w-3/6 bg-[#FF725E] text-white font-bold py-2 px-4 rounded-lg">
                          Send Invite
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