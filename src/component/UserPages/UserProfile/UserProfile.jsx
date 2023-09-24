import { BsTelephone } from "react-icons/bs";
import banner from "../../../assets/userProfile/userBanner.png";
import img2 from "../../../assets/home/recommendation/girl.png";
import img3 from "../../../assets/home/recommendation/girl2.png";
import img4 from "../../../assets/home/recommendation/girl3.png";
import img5 from "../../../assets/home/recommendation/girl4.png";
import edit from "../../../assets/other/edit.svg";
import share from "../../../assets/other/share.svg";
import { Info } from "../MyProfle/Profile/Profile";
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
import Proposal from "../MyProfle/proposal/Proposal";
import ShowRltnNotify from "../MyProfle/relationSts/ShowRltnNotify";
import { Link } from "react-router-dom";
import { useRelationInfo } from "../../../utilities/utilities";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

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

  const { profileImage, name, email, _id, profileVisit, status } = userInfo;

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
        fetch(`http://localhost:5000/deleteUser/${id}`, {
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
            `http://localhost:5000/delPartner/${id}/${userInfo._id}/${partner._id}`
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
                className="absolute top-[50%] left-5 h-[150px] w-[150px] object-cover object-top rounded-full border-[3px] border-l-0 border-primary-400"
                src={profileImage}
                alt=""
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-2">
              <div className="h-[30px] md:h-[150px] w-[150px] md:block"></div>{" "}
              {/* spacer */}
              <div className="w-full mx-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between ">
                  <div className="">
                    <p className="font-alice text-[30px] lg:text-[30px]  text-[#272932]">
                      {name}
                    </p>
                    <p>{email}</p>
                  </div>
                  <div className="flex gap-2 items-end">
                    <button className="bg-primary-300 px-[15px] py-[10px] rounded-full">
                      <img className="" src={share} alt="" />
                    </button>
                    <EditBtn text="Edit Profile" />

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
                {status === "successful" ? (
                  <div className="flex justify-between mt-5">
                    <p>
                      Married with <Link>{partner?.name}</Link>
                    </p>

                    <div className="flex items-center space-x-4 p-4 border-b border-gray-300">
                      <Link
                        to={`/profile/${partner?._id}`}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={partner?.profileImage}
                            className="h-12 w-12 rounded-full"
                          />
                        </div>

                        <div className="flex-grow">
                          <p className="text-lg font-medium text-gray-800">
                            {partner?.name}
                          </p>
                        </div>
                      </Link>
                      <div className="flex-grow">
                        <button
                          onClick={() =>
                            handlePartnerDelete(relationship[0]?._id)
                          }
                          className="bg-primary-300 px-[8px] py-[6px] rounded-full tooltip"
                          data-tip="Delete Profile"
                        >
                          <AiOutlineDelete className="text-white text-1xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between mt-5 mr-8 md:mr-0">
                    <div className="text-[18px] text-center">
                      <p className="font-bold">100</p>
                      <p>Sent Interested</p>
                    </div>
                    <div className="text-[18px] text-center">
                      <p className="font-bold">400</p>
                      <p>Followers</p>
                    </div>
                    <div className="text-[18px] text-center ">
                      <p className="font-bold">2500</p>
                      <p>Following</p>
                    </div>
                    <div className="text-[18px] text-center ">
                      <p className="font-bold">
                        {profileVisit < 0 ? 0 : profileVisit}
                      </p>
                      <p>Visit remaining</p>
                    </div>
                  </div>
                )}
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
          <ShowRltnNotify />
          <MetForUser />
          <Follow />
          <Proposal />
          <BoxBorderContent title="Hobbies" content={<Hobbies />} />
          <BoxBorderContent title="Upload Your Photo" content={<SocialMedia />} />
          {/* <Plan /> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

const EditBtn = ({ text }) => {
  return (
    <button className="bg-[#3E4A5B] text-[#F0F2F5] px-[15px] py-[10px] rounded-full flex gap-1 items-center">
      <img className="" src={edit} alt="" />
      {text}
    </button>
  );
};

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

  const { age, height, jobSector, city , state } = userInfo;
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

const SocialMedia = () => {
  const [userInfo] = useMyData();
  const { register, handleSubmit } = useForm()
  const { _id } = userInfo;
  const imgHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_Image_Upload_Token}`
  const [loading, setLoading] = useState(false)
  const [imgURL, setImgURL] = useState(null)

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
          axios.post('http://localhost:5000/galleryImg', imgLink)
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
      {imgURL && <img className="w-[125px] h-[113px] rounded-2xl object-cover " src={imgURL} />}
      <form onSubmit={handleSubmit(upload)} className="">

        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="mt-4 py-5 flex flex-col items-center justify-center w-full  border-[#C3CAD5]  border-dashed border-2 cursor-pointer bg-gray-50  hover:bg-gray-100 rounded-2xl">
            <p className="flex items-center gap-2 text-xl text-primary-300"> <AiOutlinePlusCircle /> <span>Add Photo</span></p>
            <input {...register('image')}  name="image" id="dropzone-file" type="file" className="hidden" />
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
          axios.post('http://localhost:5000/galleryImg', imgLink)
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
