import { BsTelephone } from "react-icons/bs";
import Lottie from "lottie-react";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import banner from "../../../assets/userProfile/userBanner.png";
import { GalleryImg, Info } from "../MyProfle/Profile/Profile";
import ages from "../../../assets/other/age.svg";
import heights from "../../../assets/other/height.svg";
import jobs from "../../../assets/other/job.svg";
import citys from "../../../assets/other/city.svg";
import MetForUser from "../MyProfle/metting/MetForUser";
import { AiOutlineMail, AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import file from "../../../assets/other/file.png";
import useMyData from "../../../Hooks/useMyData";
import Swal from "sweetalert2";
import Follow from "../MyProfle/follow/Follow";
import ShowRltnNotify from "../MyProfle/relationSts/ShowRltnNotify";
import { Link } from "react-router-dom";
import { useRelationInfo } from "../../../utilities/utilities";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

// lottie files
import manyLove from '../../../assets/lottie/manyLove.json'
import topLottie from '../../../assets/lottie/bigLove.json'

const UserProfile = () => {
  const [userInfo] = useMyData();
  const [partner, setPartner] = useState([]);
  console.log(userInfo, partner)
  const { refetchRelation, relationship } = useRelationInfo(userInfo._id);

  useEffect(() => {
    if (relationship[0]?.partner1 !== undefined) {
      setPartner(relationship[0]?.partner1);
    } else if (relationship[0]?.partner2 !== undefined) {
      setPartner(relationship[0]?.partner2);
    } else {
      setPartner([]);
    }
  }, [relationship]);

  const { profileImage, name, email, _id, profileVisit, status, gallery } = userInfo;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://soulmates-server.vercel.app/deleteUser/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: `User Deleted`,
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const handlePartnerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to delete this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted",
          "Wait a few second for changes or reload the page",
          "success"
        );
        axios
          .delete(
            `https://soulmates-server.vercel.app/delPartner/${id}/${userInfo._id}/${partner._id}`
          )
          .then((response) => {
            if (response.data.deletedCount > 0) {
              refetchRelation();
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-4 dark:bg-gray-300 rounded-xl">
      {/* grid section */}
      <div className="flex flex-col md:flex-row gap-4 font-lato text-[#778599]">
        {/* user info section */}
        <div className="md:w-[60%] ">
          {/* banner and profile img */}
          <div className="mb-4 border border-[#C3CAD5] rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-[180px] object-cover"
                src={banner}
                alt=""
              />
              <img

                className={`absolute top-[50%] left-7 h-[150px] w-[150px] object-cover object-top rounded-full border-[3px] ${userInfo?.profile_complete === 100 ? 'border-green-400  border-l-0' : 'border-primary-400  border-l-0'
                  }`}

                src={profileImage}
                alt=""
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-2">
              <div className="h-[30px] md:h-[150px] w-[150px] md:block"></div>{" "}
              {/* spacer */}
              <div className="w-full mx-4 mt-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between ">
                  <div className=" ml-4 ">
                    <p className="font-alice text-[30px] lg:text-[30px]  text-[#272932]">
                      {name}
                    </p>
                    <p>{email}</p>
                  </div>
                  <div className="flex gap-2  justify-center items-center">
                    <div className="text-[14px] text-center flex gap-3 bg-gray-200 py-3 px-4 rounded-lg">
                      <p className="font-bold">
                        {profileVisit < 0 ? 0 : profileVisit}
                      </p>
                      <p> Visit remaining</p>
                    </div>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="bg-primary-300 px-[12px] py-[10px] rounded-full tooltip"
                      data-tip="Delete Profile"
                    >
                      <AiOutlineDelete className="text-white text-2xl" />
                    </button>
                  </div>
                </div>
                {/* follow section */}
              </div>
            </div>
          </div>

          {/* status */}
          <BoxBorderContent title="Status" content={<Status />} />
          <BoxBorderContent title="About Me" content={<AboutMe />} />
          <BoxBorderContent title="Personal Info" content={<PersonalInfo />} />
        <BoxBorderContent title="Contact Info" content={<ContactInfo />} />
        </div>

        {/* other section */}
        <div className=" md:w-[40%]">
          <MarriedStatus userInfo={userInfo} partner={partner} handlePartnerDelete={handlePartnerDelete} relationship={relationship} />
          <ShowRltnNotify />
          <MetForUser />
          <Follow />
          <BoxBorderContent title="Hobbies" content={<Hobbies />} />
          <BoxBorderContent title="Photos" content={<SocialMedia gallery={gallery} />} />

        </div>
      </div>
    </div>
  );
};

export default UserProfile;

const MarriedStatus = ({ userInfo, partner, handlePartnerDelete, relationship }) => {
  console.log
  return (
    <>
      {userInfo?.status === "successful" ? (
        <div className="relative mb-5 flex flex-col  border border-[#C3CAD5] rounded-2xl overflow-hidden">
          <div className="flex justify-end mt-2 mr-2">
            <button
              onClick={() =>
                handlePartnerDelete(relationship[0]?._id)
              }
              className="bg-primary-300 px-[8px] py-[6px] rounded-full tooltip"
              
            >
              <AiOutlineDelete className="text-white text-1xl" />
            </button>
          </div>
          <Lottie className="w-[52%] h-[50%] mx-auto" animationData={topLottie} />
          <Lottie className="absolute bottom-0" animationData={manyLove} />
          <p className="text-3xl font-alice text-black text-center">In a relationship with </p>
          <div className="flex justify-center items-center gap-3 mb-5 mt-2 rela">
            <img src={partner?.profileImage} className="h-12 w-12 rounded-full" />
            <Link to={`/profile/${partner?._id}`}>
              <p className="text-[#3E43CB] text-lg font-lato text-center relative">{partner?.name}</p>
            </Link>
          </div>
        </div>) : <></>
      }
    </>
  )
}

  ;

const BoxBorderContent = ({ title, content }) => {
  return (
    <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center px-5 py-3">
        <p className="font-alice text-[25px] ">{title}</p>
      </div>
      <hr className="border border-[#C3CAD5]" />
      <div className="p-4">{content}</div>
    </div>
  );
};

const HBox = ({ value }) => {
  return (
    <div className="bg-[#F0F2F5] py-3 px-4 rounded-full text-[#536279] text-base">
      {value}
    </div>
  );
};

// contents

// status
const Status = () => {
  const [userInfo] = useMyData();

  const { age, height, jobSector, state } = userInfo;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="p-3  rounded-2xl bg-[#F0F2F5]">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={ages} alt="" />
        <div className="text-center text-[18px]">
          <p>AGE:</p>
          <p>{age}</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={heights} alt="" />
        <div className="text-center text-[18px]">
          <p>HEIGHT:</p>
          <p>{height}</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={citys} alt="" />
        <div className="text-center text-[18px]">
          <p>CITY:</p>
          <p>{state}</p>
        </div>
      </div>
      <div className="p-3 bg-[#F0F2F5] rounded-2xl">
        <img className="h-[35px] w-[35px] mb-3 mx-auto" src={jobs} alt="" />
        <div className="text-center text-[18px]">
          <p>JOB:</p>
          <p>{jobSector}</p>
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const [userInfo] = useMyData();

  const { aboutMe } = userInfo;
  return <p>{aboutMe}</p>;
};

const PersonalInfo = () => {
  const [userInfo] = useMyData();

  const {
    religion,
    gender,
    height,
    jobSector,
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
  } = userInfo;

  return (
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
  );
};

// contact info
const ContactInfo = () => {
  const [userInfo] = useMyData();

  const { country, mobile, email, city, state } = userInfo;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 ">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <BsTelephone className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]">
          {" "}
          <span className="text-[#8695AC] mr-1">Phone Number:</span>
          {mobile}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <AiOutlineMail className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]">
          {" "}
          <span className="text-[#8695AC] mr-1">Email:</span>
          {email}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
          <CiLocationOn className="text-2xl" />
        </div>
        <p className="text-[#3E4A5B] text-[18px]">
          {" "}
          <span className="text-[#8695AC] mr-1">Location:</span>
          {state} {city} {country}
        </p>
      </div>
    </div>
  );
};

// hobbies
const Hobbies = () => {
  const [userInfo] = useMyData();

  const { interests } = userInfo;

  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        {interests?.map((interest, index) => (
          <HBox key={index} value={interest} />
        ))}
      </div>
    </div>
  );
};

const SocialMedia = ({ gallery }) => {
  const [userInfo] = useMyData();
  const { register, handleSubmit } = useForm()
  const { _id } = userInfo;
  const imgHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_Image_Upload_Token}`
  const [loading, setLoading] = useState(false)
  const [imgURL, setImgURL] = useState(null)
  console.log(userInfo)

  const upload = e => {
    setLoading(true)
    const imgData = new FormData()
    imgData.append('image', e.image[0])

    axios.post(imgHostingUrl, imgData)
      .then(data => {
        if (data.status) {
          console.log(data.data.data.url)
          const imgLink = { img: data.data.data.url, userId: _id }
          console.log(imgLink)
          axios.post('https://soulmates-server.vercel.app/galleryImg', imgLink)
            .then(data => {
              if (data.status == 200) {
                setLoading(false)
                Swal.fire(
                  'Good job!',
                  'Photo Upload Successful!',
                  'success'
                )
              }
            })
            .catch(err => {
              setLoading(false)
              Swal.fire(
                'Error!',
                'Something Went Wrong!',
                'error'
              )
            })
        }
      })
      .catch(err => {
        setLoading(false)
        Swal.fire(
          'Error!',
          'Something Went Wrong!',
          'error'
        )
      })
  };
  const handleOnchange = e => {
    const file = e.target.files[0]
    console.log(2)
    if (file) {
      const imgUrl = URL.createObjectURL(file)
      setImgURL(imgUrl)
    }
  }

  return (
    <div className="">
      {/* {imgURL && <img className="w-[125px] h-[113px] rounded-2xl object-cover " src={imgURL} />} */}
      <div className="overflow-x-scroll profile">
        {
          gallery && <LightGallery

            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {
              gallery?.map((img, index) => <GalleryImg key={index} img={img} isProfile={true} />)
            }
          </LightGallery>
        }
      </div>
      <form onSubmit={handleSubmit(upload)} className="">

        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="mt-4 py-5 flex flex-col items-center justify-center w-full  border-[#C3CAD5]  border-dashed border-2 cursor-pointer bg-gray-50  hover:bg-gray-100 rounded-2xl">
            <p className="flex items-center gap-2 text-xl text-primary-300"> <AiOutlinePlusCircle /> <span>Add Photo</span></p>
            <input {...register('image')} name="image" id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <button disabled={loading} type="submit" className={loading ? 'text-[22px] w-[90%] mx-auto my-6  bg-gray-300 cursor-not-allowed rounded-full text-white py-4  flex justify-center items-center ' : 'active:scale-95 duration-100 text-[22px] w-[90%] mx-auto my-6  bg-primary-500 rounded-full text-white py-4  flex justify-center items-center '}>
          {loading ? <span className="loading loading-spinner loading-lg"></span> : 'Upload Now'}
        </button>
      </form>
    </div>
  );
};

// plan
const Plan = () => {
  const [userInfo] = useMyData();
  const { register, handleSubmit } = useForm()
  const { _id } = userInfo;
  const imgHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_Image_Upload_Token}`
  const [loading, setLoading] = useState(false)

  const upload = e => {
    setLoading(true)
    const imgData = new FormData()
    imgData.append('image', e.image[0])

    axios.post(imgHostingUrl, imgData)
      .then(data => {
        if (data.status) {
          console.log(data.data.data.url)
          const imgLink = { img: data.data.data.url, userId: _id }
          axios.post('https://soulmates-server.vercel.app/galleryImg', imgLink)
            .then(data => {
              if (data.status == 200) {
                setLoading(false)
                Swal.fire(
                  'Good job!',
                  'Photo Upload Successful!',
                  'success'
                )
              }
            })
            .catch(err => {
              setLoading(false)
              Swal.fire(
                'Error!',
                'Something Went Wrong!',
                'error'
              )
            })
        }
      })
      .catch(err => {
        setLoading(false)
        Swal.fire(
          'Error!',
          'Something Went Wrong!',
          'error'
        )
      })
  };

  return (
    <form onSubmit={handleSubmit(upload)} className="">

      <div className="flex items-center justify-center w-full">

        <label htmlFor="dropzone-file" className="py-5 flex flex-col items-center justify-center w-full border border-[#C3CAD5]   cursor-pointer bg-gray-50  hover:bg-gray-100 rounded-2xl">

          <div className="flex flex-col items-center justify-center pt-4 pb-4">
            <img className="mx-auto " src={file} alt="" />

            <p className="text-center text-[30px] font-alice">Upload  PICTURE  for<br />  gallery</p>
          </div>
          <input {...register('image')} name="image" id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <button disabled={loading} type="submit" className={loading ? 'text-[22px] w-[90%] mx-auto my-6  bg-gray-300 cursor-not-allowed rounded-full text-white py-4  flex justify-center items-center ' : 'active:scale-95 duration-100 text-[22px] w-[90%] mx-auto my-6  bg-primary-500 rounded-full text-white py-4  flex justify-center items-center '}>
        {loading ? <span className="loading loading-spinner loading-lg"></span> : 'Upload Now'}
      </button>
    </form>
  );
};
