import { PiMagnifyingGlassPlusThin } from "react-icons/pi";
import { BsArrowRightShort, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './style.css'
import img2 from "../../../../assets/home/recommendation/girl.png";
import img3 from "../../../../assets/home/recommendation/girl2.png";
import img4 from "../../../../assets/home/recommendation/girl3.png";
import img5 from "../../../../assets/home/recommendation/girl4.png";
import location from "../../../../assets/other/location.svg";
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

import { Link, useNavigate, useParams } from "react-router-dom";
import FixedMet from "../metting/FixedMet";
import useMyData from "../../../../Hooks/useMyData";
import axios from "axios";
import { RiUserUnfollowFill } from "react-icons/ri";
import RelationSts from "../relationSts/RelationSts";
import { performAction } from "../../../../utilities/utilities";

const onInit = () => {
  console.log('lightGallery has been initialized');
};

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Profile = () => {
  const [userInfo, refetch] = useMyData();
  const params = useParams();
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/specificUser/${params.id}`)
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
    interests
  } = user;


  // function formatHeight(height) {
  //   const heightParts = height.split(" ");
  //   const feet = parseInt(heightParts[0]);
  //   const inches = parseInt(heightParts[2]);
  //   return `${feet}ft ${inches}in`;
  // }

  useEffect(() => {
    if (userInfo?.profileVisit > 0) {
      setLoader(false);
    }
  }, [userInfo]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/disableFav/${userInfo._id}/${user._id}`
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

    performAction(
      userInfo._id,
      "showFlowing",
      "makeFav",
      "setFav",
      favUser,
      () => {
        setDisable(true);
      }
    );
  };

  const unfollowHandle = () => {
    const unfollow = {
      favId: user._id,
      favUser: user.name,
      favImg: user.profileImage,
    };
    axios
      .put(
        `http://localhost:5000/makeUnfollow/${userInfo._id}`,
        unfollow
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setDisable(false);
        }
      });
  };

  const handleClick = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/conversations/find/${userInfo._id}/${params.id}`
      );
      console.log(res.data);
      navigate("/message");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };


  

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
          <div className="w-[80%] mx-auto my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-lato mt-4">
              {/* photo section */}
              <div className="">
                <div className="sticky top-4">
                  {/* sticky the photo */}
                  {/* photo gallery */}
                  <div className="flex flex-col lg:flex-row gap-2 ">
                    <img className={user?.gallery ? "mx-auto h-[590px] rounded-2xl object-cover w-[95%] lg:w-[75%]  " : "w-[98%] mx-auto h-[590px] rounded-2xl object-cover "} src={profileImage} alt="" />

                    {/* Gallery imgs */}
                      <div className="flex  gap-8 md:gap-4 px-1 hide-scrollbar overflow-x-scroll lg:overflow-y-scroll lg:h-[590px] soulContainer">
                      {
                        // user?.gallery?.map((img, index) => <GalleryImg key={index} img={img} />)
                      }
                        <LightGallery
                          onInit={onInit}
                          speed={500}
                          plugins={[lgThumbnail, lgZoom]}
                        >
                          {
                            user?.gallery?.map((img, index) => <GalleryImg key={index} img={img} />)
                          }
                        </LightGallery>
                    </div>
                    {/* small imgs end */}
                  </div>
                  {/* button */}
                  <div className="flex justify-between gap-3 px-2 py-4">
                    <button
                      className="text-[17px] font-bold w-full bg-secondary-500 rounded-full text-white py-4  flex justify-center items-center "
                      onClick={handleClick}
                    >
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
                        {/* {disable ? (
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
                        )} */}
                        <FixedMet partnerUserID={user?._id} />

                        <RelationSts partnerUser={user} />
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
                        <p>{(height)}</p>
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
                        <p>{state}</p>
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
                      <Info title="Marital Status" value={marital_status} />
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


                {/* Hobbies Section */}
                {
                  interests ?
                    <>
                      <BorderBottom />
                      <Title title="Hobbies" />
                      <div className="flex gap-3 flex-wrap">
                        {interests?.map((interest, index) => (
                          <HBox key={index} value={interest} />
                        ))}
                      </div></> : <></>
                }

                <BorderBottom />
                

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

const GalleryImg = ({img}) => {
  return(
    <Link to={img} className="relative group cursor-pointer mb-2 w-[145px] lg:w-full">
      <img
        className="w-[145px] h-[133px] rounded-2xl object-cover  "
        src={img}
        alt=""
      />
      <div className="absolute center-div bg-black rounded-2xl duration-300 bg-opacity-50 h-0 w-0 group-hover:h-full group-hover:w-full ">
        <div className="w-full h-full flex items-center justify-center mb-4">
          <PiMagnifyingGlassPlusThin className="text-5xl text-primary-50" />
        </div>
      </div>
    </Link>
  )
}

