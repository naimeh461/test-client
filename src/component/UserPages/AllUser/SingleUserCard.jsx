import { CiLocationOn } from "react-icons/ci";
import share from "../../../assets//other/share.svg";
import useMyData from "../../../Hooks/useMyData";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import noImg from "../../../assets/other/blank.png"
const SingleUserCard = ({ filteredUser }) => {
  const [userInfo, refetch] = useMyData();
  const navigate = useNavigate();


  const {
    profileImage,
    name,
    country,
    religion,
    _id,
    aboutMe,
    height,
    work,
    age,
    marital_status,
  } = filteredUser;

  const userPermission = () => {
    axios
      .put(
        `https://soulmates-server.vercel.app/profileVisit?user=${userInfo?.email}`
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          if (refetch()) {
            if (userInfo.profileVisit < 0) {
              Swal.fire({
                title: "Your Package is over",
                text: "Want to select your package to see this user?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, I want",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire("Thanks You", "Please Select Your Package");
                  navigate("/plans");
                } else {
                  navigate("/allUser");
                }
              });
            }
          }
        }
      });
  };

  const putUserHandle = (visitUser) => {
    axios
      .get(
        `https://soulmates-server.vercel.app/disableAddVstUser/${userInfo._id}/${_id}`
      )
      .then((response) => {
        if (!response.data) {
          axios
            .put(
              `https://soulmates-server.vercel.app/addVstUser/${userInfo._id}`,
              visitUser
            )
            .then((response) => {
              if (response.data.modifiedCount > 0) {
                userPermission();
              }
            });
        }
      });
  };

  const handleVisitPermit = () => {
    const visitUser = {
      favId: _id,
      vstUser: name,
    };

    axios
      .get(`https://soulmates-server.vercel.app/showVstUser/${userInfo._id}`)
      .then((response) => {
        if (response.data.userId) {
          putUserHandle(visitUser);
        } else {
          axios
            .post(
              `https://soulmates-server.vercel.app/pstVstUser/${userInfo._id}`,
              visitUser
            )
            .then((response) => {
              if (response.data.insertedId) {
                userPermission();
              }
            });
        }
      });
  };

  // filter string and slice it
  const getString = (text) => {
    if (typeof text == "string") {
      return text.slice(0, 50) + "...";
    } else {
      return "No data found!!!";
    }
  };

  return (
    <div className="hover:shadow-xl duration-100 border border-[#E1E5EA] rounded-2xl pt-3 pl-3 pr-3 font-lato z-0 dark:text-white dark:bg-gray-500">
      {/* img and location */}
      <div className="relative rounded-2xl overflow-hidden ">
        {profileImage ? <><img
          className="md:h-[430px] w-full object-cover object-top "
          src={profileImage}
          alt=""
        /></> : <><img   className="md:h-[430px] w-full object-cover object-top " src={noImg}></img></>}
        <div className="flex items-center bg-[#272932a6] text-white gap-2 rounded-tr-2xl py-1 px-2 absolute left-0 bottom-0">
          <CiLocationOn className="text-xl " />
          <p>{country}</p>
        </div>
      </div>
      <div className="py-2 flex justify-between items-center">
        <div className="">
          <p className="text-[22px] font-alice text-[#272932] dark:text-white ">
            {name}
          </p>
          <p className="text-[#595E73] text-sm md:text-base  dark:text-white">
            Status: {marital_status}
          </p>
        </div>
        <p className="bg-[#F0F2F5] border border-primary-200 rounded-full md:py-3 py-1 md:px-[32px] px-2 md:text-base text-sm font-normal text-[#595E73] ">
          {religion}
        </p>
      </div>
      {/* description */}
      <p className="text-[#8695AC] py-3  dark:text-white">
        {getString(aboutMe)}
      </p>
      {/* info */}
      <div className="flex justify-around ">
        <div className="text-center md:px-10 md:py-2 ">
          <p className="text-[#8695AC]  dark:text-white">Age</p>
          <p className="text-[#3E4A5B]  dark:text-white">{age}</p>
        </div>
        <div className="border "></div>
        <div className="text-center md:px-10 md:py-2 ">
          <p className="text-[#8695AC]  dark:text-white ">Height</p>
          <p className="text-[#3E4A5B]  dark:text-white">{height}</p>
        </div>
        <div className="border "></div>
        <div className="text-center md:px-10 md:py-2">
          <p className="text-[#8695AC]  dark:text-white">Job</p>
          <p className="text-[#3E4A5B]  dark:text-white">{work}</p>
        </div>
      </div>
      {/* button section */}
      <div className="flex gap-5 py-5">
        
        <Link
          to={`/profile/${_id}`}
          onClick={handleVisitPermit}
          className="md:text-[20px]  text-sm font-bold w-full bg-primary-500 rounded-full text-white py-[13px]  flex justify-center items-center "
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default SingleUserCard;
