import { PiMagnifyingGlassPlusThin } from "react-icons/pi";
import { BsArrowRightShort, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import img2 from "../../../../assets/home/recommendation/girl.png";
import img3 from "../../../../assets/home/recommendation/girl2.png";
import img4 from "../../../../assets/home/recommendation/girl3.png";
import img5 from "../../../../assets/home/recommendation/girl4.png";
import location from "../../../../assets/other/location.svg";
import follow from "../../../../assets/other/follow.svg";
import share from "../../../../assets/other/share.svg";
import bookmark from "../../../../assets/other/bookmark.svg";
import ages from "../../../../assets/other/age.svg";
import heights from "../../../../assets/other/height.svg";
import job from "../../../../assets/other/job.svg";
import citys from "../../../../assets/other/city.svg";
import facebook from "../../../../assets/other/facebook.svg";
import linkedin from "../../../../assets/other/linkedin.svg";
import insta from "../../../../assets/other/insta.svg";
import twitter from "../../../../assets/other/twitter.svg";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import FixedMet from "../metting/FixedMet";
import useMyData from "../../../../Hooks/useMyData";
import axios from "axios";
import { RiUserUnfollowFill } from "react-icons/ri";

const Profile = () => {
  const [userInfo,refetch] = useMyData();
  const params = useParams();
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://soulmates-server.vercel.app/specificUser/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [params]);

  const {
    profileImage,
    name,
    country,
    religion,
    mobile,
    email,
    gender,
    age,
    height,
    jobSector,
    city,
    aboutMe,
    marital_status,
    profile,
    state,
    weight,
    education,
    qualifications,
    work,
    yearlyIncome,
    drinkHabit,
    foodHabit,
    interests,
  } = user;

  console.log(interests);
  useEffect(() => {
    if (userInfo?.profileVisit > 0) {
      setLoader(false);
    }
  }, [userInfo]);

  useEffect(() => {
    axios
      .get(
        `https://soulmates-server.vercel.app/disableFav/${userInfo._id}/${user._id}`
      )
      .then((response) => {
        if (response.data.userId) {
          setDisable(true);
        }
      });
  }, [user, userInfo]);

  const setFav = () => {
    const favUser = {
      favId: user._id,
      favUser: user.name,
      favImg: user.profileImage,
    };

    axios
      .get(
        `https://soulmates-server.vercel.app/showFlowing/${userInfo._id}`
      )
      .then((response) => {
        if (response.data.userId) {
          axios
            .put(
              `https://soulmates-server.vercel.app/makeFav/${userInfo._id}`,
              favUser
            )
            .then((response) => {
              if (response.data.modifiedCount > 0) {
                setDisable(true);
              }
            });
        } else {
          axios
            .post(
              `https://soulmates-server.vercel.app/setFav/${userInfo._id}`,
              favUser
            )
            .then((response) => {
              if (response.data.insertedId) {
                setDisable(true);
              }
            });
        }
      });
  };

  const unfollowHandle = () => {
    console.log("unfollow");
    const unfollow = {
      favId: user._id,
      favUser: user.name,
      favImg: user.profileImage,
    };
    axios
      .put(
        `https://soulmates-server.vercel.app/makeUnfollow/${userInfo._id}`,
        unfollow
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setDisable(false);
        }
      });
  };

    const handleClick = async () => 
    {
        try{
            const res = await axios.get(`https://soulmates-server.vercel.app/conversations/find/${userInfo._id}/${params.id}`)
            console.log(res.data)
            navigate("/message");
            refetch();
        }
        catch(err){
            console.log(err)
        }

    }

  return (
    <>
      {loader ? (
        <>
          <div className="my-5 text-center">
            <span className="loading loading-dots loading-xs me-2"></span>
            <span className="loading loading-dots loading-sm me-2"></span>
            <span className="loading loading-dots loading-md me-2"></span>
            <span className="loading loading-dots loading-lg me-2"></span>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-lato mt-4">
              {/* photo section */}
              <div className="">
                <div className="sticky top-4">
                  {/* sticky the photo */}
                  {/* photo gallery */}
                  <div className="flex flex-col md:flex-row gap-2">
                    <img
                      className="mx-4 md:mx-0 h-[590px] rounded-2xl object-cover"
                      src={profileImage}
                      alt=""
                    />

                    {/* small imgs */}
                    <div className="flex flex-row md:flex-col gap-1 md:gap-4 px-1">
                      {/* single small img */}
                      <div className="relative group cursor-pointer">
                        <img
                          className="w-[145px] h-[133px] rounded-2xl object-cover "
                          src={img2}
                          alt=""
                        />
                        <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
                          <div className="w-full h-full flex items-center justify-center">
                            <PiMagnifyingGlassPlusThin className="text-5xl text-primary-50" />
                          </div>
                        </div>
                      </div>

                      {/* single small img */}
                      <div className="relative group cursor-pointer">
                        <img
                          className="w-[145px] h-[133px] rounded-2xl object-cover "
                          src={img3}
                          alt=""
                        />
                        <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
                          <div className="w-full h-full flex items-center justify-center">
                            <PiMagnifyingGlassPlusThin className="text-5xl text-primary-50" />
                          </div>
                        </div>
                      </div>

                      {/* single small img */}
                      <div className="relative group cursor-pointer">
                        <img
                          className="w-[145px] h-[133px] rounded-2xl object-cover "
                          src={img4}
                          alt=""
                        />
                        <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
                          <div className="w-full h-full flex items-center justify-center">
                            <PiMagnifyingGlassPlusThin className="text-5xl text-primary-50" />
                          </div>
                        </div>
                      </div>

                      {/* single small img */}
                      <div className="relative group cursor-pointer">
                        <img
                          className="w-[145px] h-[133px] rounded-2xl object-cover "
                          src={img5}
                          alt=""
                        />
                        <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
                          <div className="w-full h-full flex items-center justify-center">
                            <PiMagnifyingGlassPlusThin className="text-5xl text-primary-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* small imgs end */}
                  </div>
                  {/* button */}
                  <div className="flex justify-between gap-3 px-2 py-4">
                    <button className="text-[17px] font-bold w-full bg-secondary-500 rounded-full text-white py-4  flex justify-center items-center " onClick={handleClick}>
                      Message
                    </button>

                    {disable ? (
                      <button
                        onClick={unfollowHandle}
                        className="text-[17px] font-bold w-full bg-primary-500 rounded-full text-white py-4  flex justify-center items-center "
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={setFav}
                        className="text-[17px] font-bold w-full bg-primary-500 rounded-full text-white py-4  flex justify-center items-center "
                      >
                        Sent Interested
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* info section */}
              <div className="bg-[#F0F2F5] p-5 rounded-2xl">
                {/* img and name section */}
                <div className="flex gap-4 items-start flex-col lg:flex-row">
                  {/* profile rounded img */}
                  <div className="w-full lg:w-auto">
                    <img
                      className="h-[200px] w-[200px] mx-auto lg:h-[100px] lg:w-[100px] object-top object-cover rounded-full"
                      src={profileImage}
                      alt=""
                    />
                  </div>
                  {/* name and info */}
                  <div className="w-[80%]">
                    <p className="font-alice text-[30px] lg:text-[35px] ">
                      {name}
                    </p>
                    <p className="flex text-[16px] lg:text-[18px] font-lato items-start lg:items-center gap-2 lg:gap-1">
                      <span>
                        <img
                          className=" h-[20px] w-[20px] lg:h-6 lg:w-6 "
                          src={location}
                          alt=""
                        />
                      </span>
                      {city} {country}
                    </p>
                    <div className="flex flex-col lg:flex-row w-full justify-between mt-4 gap-2 lg:">
                      <div className="flex gap-4 ">
                        {disable ? (
                          <button
                            onClick={unfollowHandle}
                            className="text-[15px] bg-primary-500 px-4 rounded-full text-white py-[10px] flex justify-center items-center gap-1"
                          >
                            <span>
                              <RiUserUnfollowFill />
                            </span>
                            Unfollow
                          </button>
                        ) : (
                          <button
                            onClick={setFav}
                            className="text-[15px] bg-primary-500 px-4 rounded-full text-white py-[10px] flex justify-center items-center gap-1"
                          >
                            <span>
                              <img
                                className="hidden lg:block"
                                src={follow}
                                alt=""
                              />
                            </span>
                            Sent Interested
                          </button>
                        )}
                        <FixedMet partnerUser={user} />
                      </div>
                      <div className="flex gap-4">
                        <button className="bg-[#A4B0C1] px-[15px] py-[10px] rounded-full">
                          <img className="" src={share} alt="" />
                        </button>
                        <button className="bg-[#A4B0C1] px-[15px] py-[10px] rounded-full">
                          <img className="" src={bookmark} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* status */}
                <div className="">
                  <Title title="Status" />

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="p-3 bg-white rounded-2xl">
                      <img
                        className="h-[35px] w-[35px] mb-3 mx-auto"
                        src={ages}
                        alt=""
                      />
                      <div className="text-center text-[18px]">
                        <p>AGE:</p>
                        <p>{age}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-2xl">
                      <img
                        className="h-[35px] w-[35px] mb-3 mx-auto"
                        src={heights}
                        alt=""
                      />
                      <div className="text-center text-[18px]">
                        <p>HEIGHT:</p>
                        <p>{height}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-2xl">
                      <img
                        className="h-[35px] w-[35px] mb-3 mx-auto"
                        src={citys}
                        alt=""
                      />
                      <div className="text-center text-[18px]">
                        <p>CITY:</p>
                        <p>{city}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-2xl">
                      <img
                        className="h-[35px] w-[35px] mb-3 mx-auto"
                        src={job}
                        alt=""
                      />
                      <div className="text-center text-[18px]">
                        <p>JOB:</p>
                        <p>{jobSector}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <BorderBottom />
                {/* About me */}
                <div className="">
                  <Title title="About me" />
                  <p className="text-[#3E4A5B]">{aboutMe}</p>
                </div>

                <BorderBottom />
                {/* Personal Info */}
                <div className="">
                  <Title title="Personal Info" />
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="">
                      <Info title="Gender" value={gender} />
                      <Info title="Height" value={height} />
                      <Info
                        title="Marital Status
"
                        value={marital_status}
                      />
                      <Info title="Profile" value={profile} />
                      <Info title="Religion" value={religion} />
                      <Info title="State" value={state} />
                      <Info title="Weight" value={weight} />
                    </div>
                    <div className="">
                      <Info title="Education" value={education} />
                      <Info title="JobSector" value={jobSector} />
                      <Info title="Qualifications" value={qualifications} />
                      <Info title="Work" value={work} />
                      <Info title="Yearly Income" value={yearlyIncome} />
                      <Info title="Drink Habbit" value={drinkHabit} />
                      <Info title="Food Habbit" value={foodHabit} />
                    </div>
                  </div>
                </div>

                <BorderBottom />
                {/* Contact Info */}
                <div className="">
                  <Title title="Contact Info" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 ">
                      <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
                        <BsTelephone className="text-2xl" />
                      </div>
                      <p className="text-[#3E4A5B] text-[18px]">
                        <span className="text-[#8695AC] mr-1">
                          Phone Number:
                        </span>
                        {mobile}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
                        <AiOutlineMail className="text-2xl" />
                      </div>
                      <p className="text-[#3E4A5B] text-[18px]">
                        <span className="text-[#8695AC] mr-1">Email:</span>
                        {email}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
                        <CiLocationOn className="text-2xl" />
                      </div>
                      <p className="text-[#3E4A5B] text-[18px]">
                        <span className="text-[#8695AC] mr-1">Location:</span>
                        {city},{country}
                      </p>
                    </div>
                  </div>
                </div>

                <BorderBottom />
                <Title title="Hobbies" />
               
                {/* Hobbies Section */}
                {/* {
                  interests?  <div className="flex gap-3 flex-wrap">
                  {interests?.map((interest, index) => (
                    <HBox key={index} value={interest} />
                  ))}
                </div>: <></>
                } */}
                

                <BorderBottom />
                <Title title="Social Media" />
                <div className="flex gap-2">
                  <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
                    <img src={facebook} className="text-2xl" />
                  </div>
                  <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
                    <img src={linkedin} className="text-2xl" />
                  </div>
                  <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
                    <img src={insta} className="text-2xl" />
                  </div>
                  <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
                    <img src={twitter} className="text-2xl" />
                  </div>
                </div>

                {/* info div */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;

const BorderBottom = () => {
  return <div className="border-2 mt-4 border-b w-[95%] mx-auto"></div>;
};
const Title = ({ title }) => {
  return <p className="font-alice text-[25px] mt-6 mb-4">{title}:</p>;
};
export const Info = ({ title, value }) => {
  return (
    <div className="flex items-center text-[#3E4A5B] text-[18px] mb-2 ">
      <BsArrowRightShort className="text-lg" />
      <p className="">
        <span className="text-[#8695AC] mr-1">{title}:</span>
        {value}
      </p>
    </div>
  );
};
const HBox = ({ value }) => {
  return (
    <div className="bg-white py-3 px-4 rounded-full text-[#536279] text-base ">
      {value}
    </div>
  );
};
