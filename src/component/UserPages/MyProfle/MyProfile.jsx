import { useEffect, useState } from "react";
import useMyData from "../../../Hooks/useMyData";
import { BsArrowRightCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";

const MyProfile = () => {

  const [userInfo] = useMyData();
  const {  profile_complete } = userInfo

  const accountFor = [
    { id: 1, name: 'MySelf' },
    { id: 2, name: 'My Son' },
    { id: 3, name: 'My Daughter' },
    { id: 4, name: 'My Brother' },
    { id: 5, name: 'My Sister' },
    { id: 6, name: 'My Friend' }
  ];


  const [selectedOption, setSelectedOption] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal7, setShowModal7] = useState(false);


  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    console.log(selectedOption);
    navigate("/userinfo1", {
      state: selectedOption
    }
    )

  };

  

  useEffect(() => {
    if (profile_complete === 10) {
      setShowModal(true);
    }
    if (profile_complete === 30) {
      setShowModal2(true);
    }
    if (profile_complete === 45) {
      setShowModal3(true);
    }
    if (profile_complete === 60) {
      setShowModal4(true);
    }
    if (profile_complete === 70) {
      setShowModal5(true);
    }
    if (profile_complete === 90) {
      setShowModal7(true);
    }
  }, [profile_complete]);



  return (
    <div className="w-[80%] mx-auto m-32">
      {showModal ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-30 backdrop-blur-lg backdrop-filter bg-gray-300">
            <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
              <div className="md:card-body ">
                <div className="flex justify-center"> <BiSolidUserCircle className="text-6xl" /></div>
                <div className="text-center mb-20 flex justify-center"><h2 className="card-title ">Profile For</h2></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="container  gap-5  grid grid-cols-2 md:grid-cols-3">
                  {accountFor.map((value) =>
                      <div key={value.id}>
                        <label className="cursor-pointer">
                        <input type="radio" className="peer sr-only" name="profileFor" onChange={() => setSelectedOption({ Profile_For: value.name })}  />
                        <div className=" max-w-xl rounded-md bg-gray-100 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                          <div className="flex flex-col ">
                            <div className="flex  gap-2 items-center">
                              <div>
                                <BsFillCheckCircleFill className="text-xl -mb-1" />
                              </div>
                              <p><span value="mySelf" className="sm:text-lg ">{value.name}</span></p>
                            </div>
                          </div>
                        </div>
                        </label>
                      </div> 
                    )}

                  </div>
                  <div className="flex justify-center mt-10"><button disabled={!selectedOption} className="bg-[#34af78] py-2 rounded-lg text-white btn" type="submit">Submit</button></div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {showModal2 ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
            <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
              <div className="md:card-body ">
                <p className="text-lg font-medium">Update Your Profile please</p>
                <div className="flex justify-center mt-4"><div className="radial-progress bg-[#51ac83] text-primary-content border-4 border-[#51ac83] text-center" style={{ "--value": 30 }}>30%</div></div>
                <div className="flex justify-center mt-10">
                  <Link to="/userinfo2"> <button className="bg-[#34af78] py-2 rounded-lg text-white btn" type="submit">Continue<BsArrowRightCircle className="text-lg font-semibold" /></button></Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {showModal3 ? (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
            <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
              <div className="md:card-body ">
                <p className="text-lg font-medium">Update Your Profile please</p>
                <div className="flex justify-center mt-4"><div className="radial-progress bg-[#51ac83] text-primary-content border-4 border-[#51ac83] text-center" style={{ "--value": 45 }}>45%</div></div>
                <div className="flex justify-center mt-10">
                  <Link to="/userinfo3"> <button className="bg-[#34af78] py-2 rounded-lg text-white btn" type="submit">Continue<BsArrowRightCircle className="text-lg font-semibold" /></button></Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null
      }
      {
        showModal4 ? (
          <>
            <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
              <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
                <div className="md:card-body ">
                  <p className="text-lg font-medium">Update Your Profile please</p>
                  <div className="flex justify-center mt-4"><div className="radial-progress bg-[#51ac83] text-primary-content border-4 border-[#51ac83] text-center" style={{ "--value": 60 }}>60%</div></div>
                  <div className="flex justify-center mt-10">
                    <Link to="/userinfo4"> <button className="bg-[#34af78] py-2 rounded-lg text-white btn" type="submit">Continue<BsArrowRightCircle className="text-lg font-semibold" /></button></Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null
      }
      {
        showModal5 ? (
          <>
            <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
              <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
                <div className="md:card-body ">
                  <p className="text-lg font-medium">Update Your Profile please</p>
                  <div className="flex justify-center mt-4"><div className="radial-progress bg-[#51ac83] text-primary-content border-4 border-[#51ac83] text-center" style={{ "--value": 70 }}>70%</div></div>
                  <div className="flex justify-center mt-10">
                    <Link to="/userinfo5"> <button className="bg-[#34af78] py-2 rounded-lg text-white btn" type="submit">Continue<BsArrowRightCircle className="text-lg font-semibold" /></button></Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null
      }
      {
        showModal7 ? (
          <>
            <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
              <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
                <div className="md:card-body ">
                  <p className="text-lg font-medium">Update Your Profile please</p>
                  <div className="flex justify-center mt-4"><div className="radial-progress bg-[#51ac83] text-primary-content border-4 border-[#51ac83] text-center" style={{ "--value": 90 }}>90%</div></div>
                  <div className="flex justify-center mt-10">
                    <Link to="/userinfo7"> <button className="bg-[#34af78] py-2 rounded-lg text-white btn" type="submit">Continue<BsArrowRightCircle className="text-lg font-semibold" /></button></Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}


  {/* integrate user profile here  */}
  <UserProfile/>

     
    </div>
  );
};

export default MyProfile;
