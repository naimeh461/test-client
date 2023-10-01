import { useEffect, useState, Fragment } from "react";
import Loading from "../../../Shared/Loading";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import home from '../../../assets/plan/home.svg'
import scop from '../../../assets/plan/scop.svg'
import couple from '../../../assets/plan/couple.png'
import { BiFilterAlt, } from "react-icons/bi";
import { heightOptions, marital_status, religions, weightOptions, working_In, } from "../../../Shared/Variable";
import { Range } from "react-range";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";
import {  RxCross2 } from "react-icons/rx";
import { Country, State } from "country-state-city";
import SingleUserCard from "./SingleUserCard";
import useAllUsersGender from "../../../Hooks/useAllUsersGender";


const AllUser = () => {
  const location = useLocation();
  const searchData = location.state;
  const [userData, isLoading] = useAllUsersGender();
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [religionStatus, setReligionStatus] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [state, setState] = useState(null);
  const [stateData, setStateData] = useState();
  let countryData = Country.getAllCountries();
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [job, setJob] = useState(null);

  const [ageRange, setAgeRange] = useState({ min: 18, max: 100 });
  console.log(ageRange)
  const handleMinAgeChange = (e) => {
    const newMinAge = parseInt(e.target.value, 10);
    if (newMinAge <= ageRange.max) {
      setAgeRange({ ...ageRange, min: newMinAge });
    }
  };

  const handleMaxAgeChange = (e) => {
    const newMaxAge = parseInt(e.target.value, 10);
    if (newMaxAge >= ageRange.min) {
      setAgeRange({ ...ageRange, max: newMaxAge });
    }
  };
  useEffect(() => {
    setStateData(State.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);

  useEffect(() => {
    let filteredData = userData;
    if (searchData !== null) {
      filteredData = userData.filter((user) => {
        return (
          (!searchData.maritalStatus || user.marital_status === searchData.maritalStatus) &&
          (!searchData.minAge || user.age >= searchData.minAge) &&
          (!searchData.maxAge || user.age <= searchData.maxAge) &&
          (!searchData.religion || user.religion === searchData.religion) &&
          (!searchData.country || user.country === searchData.country) &&
          (!searchData.language || user.language === searchData.language)
        );
      });
      setFilteredUsers(filteredData);
    }
    if (
      maritalStatus ||
      religionStatus ||
      ageRange ||
      selectedCountry ||
      state ||
      height ||
      weight ||
      job
    ) {
      if (maritalStatus !== null) {
        filteredData = filteredData.filter(
          (user) => user.marital_status === maritalStatus
        );
      }
      if (religionStatus !== null) {
        filteredData = filteredData.filter(
          (user) => user.religion === religionStatus
        );
      }
      if (ageRange !== null) {
        filteredData = filteredData.filter(
          (user) => user.age >= ageRange?.min && user.age <= ageRange?.max
        );
      }
      if (selectedCountry !== null) {
        filteredData = filteredData.filter(
          (user) => user.country === selectedCountry?.name
        );
      }
      if (state !== null) {
        filteredData = filteredData.filter(
          (user) => user.state === state?.name
        );
      }
      if (state !== null) {
        filteredData = filteredData.filter(
          (user) => user.state === state?.name
        );
      }
      if (weight !== null) {
        filteredData = filteredData.filter(
          (user) => user.weight === weight
        );
      }
      if (height !== null) {
        const selectedHeight = parseHeightString(height);
        filteredData = filteredData.filter((user) => {
          const userHeightInches = parseHeightString(user.height);
          return userHeightInches >= selectedHeight;
        });
      }
      if (job !== null) {
        filteredData = filteredData.filter((user) => user.work === job);
      }

      setFilteredUsers(filteredData);
    }
  }, [userData, maritalStatus, religionStatus, ageRange, selectedCountry, state, height, weight, job, searchData]);
  const handleDelFilter = () => {
    setMaritalStatus(null)
    setReligionStatus(null)
    setAgeRange({ min: 18, max: 100 })
    setSelectedCountry(null)
    setState(null)
    setStateData(null)
    setHeight(null);
    setWeight(null);
    setJob(null);

  }

  function parseHeightString(heightString) {
    const parts = heightString.split(" ");
    const feet = parseInt(parts[0]);
    const inches = parseInt(parts[2]);
    return feet * 12 + inches;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl animate-pulse select-none">
        <Loading></Loading>
      </div>
    );
  }

  const Filter = () => {
    return (
      
 
          <div className="dark:bg-gray-500 p-2 rounded-xl  lg:w-[350px]  ">
            <div className=" mx-auto hidden lg:block ">
              <div className="flex justify-between items-center w-[80%] mx-auto ">
                <div className="flex justify-center items-center">
                  <BiFilterAlt className="text-[22px] font-alice gap-2 w-[80%] mx-auto " />
                  <h2 className=" text-[22px] font-alice gap-2 w-[80%] mx-auto ">
                    Filter
                  </h2>
                </div>
                <div
                  onClick={handleDelFilter}
                  className="outline text-lg font-semibold text-red-500  rounded-full outline-2 outline-red-500 outline-offset-0 px-4 hover:bg-red-100 flex justify-center items-center gap-2 "
                >
                  Clear all <RxCross2/>
                </div>

              </div>
              <hr className="my-2 h-0.5 border-t-0 bg-[#595E73] opacity-100 dark:opacity-50 mt-4"></hr>
            </div>
            <div className="lg:h-[600px] lg:overflow-y-auto pb-10">
              <div className="w-[80%] mx-auto pb-10 ">
                <div className="">
                  {/* For Marital Status */}
                  <div className="mt-5  ">
                    <label
                      className="text-black text-[18px] font-alice dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Marital Status
                    </label>
                    <div className="flex gap-2 flex-wrap mt-2">
                      {marital_status.map((marriage) => (
                        <div key={marriage.id}>
                          <div className="flex gap-5 mt-1">
                            <label className="cursor-pointer block ">
                              <input
                                type="checkbox"
                                className="peer sr-only "
                                name="marriage"
                                onChange={() =>
                                  setMaritalStatus(
                                    maritalStatus === marriage.name
                                      ? null
                                      : marriage.name
                                  )
                                }
                                checked={maritalStatus?.includes(marriage.name)}
                              />
                              <div
                                className={`max-w-xl rounded-3xl p-1 text-gray-600 hover:shadow bg-[#e3e3e7] font-lato ${maritalStatus === marriage?.name
                                  ? "ring-2  peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83]  "
                                  : "bg-gray-100"
                                  }`}
                              >
                                <div type="button" className="flex flex-col ">
                                  <div className="flex  gap-1 items-center justify-center px-2">
                                    <p>
                                      <span
                                        value="Gender"
                                        className=" font-lato text-[15px] select-none "
                                      >
                                        {marriage?.name}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* For Religion Status */}
                <div className="mt-10">
                  <label
                    className="text-black text-[18px] font-alice dark:text-white"
                    htmlFor="emailAddress"
                  >
                    Religion
                  </label>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {religions.map((value) => (
                      <div key={value.id}>
                        <div className="flex gap-5 mt-1">
                          <label className="cursor-pointer block ">
                            <input
                              type="checkbox"
                              className="peer sr-only "
                              name="religion"
                              onChange={() =>
                                setReligionStatus(
                                  religionStatus === value.name
                                    ? null
                                    : value.name
                                )
                              }
                              checked={religionStatus?.includes(value.name)}
                            />
                            <div
                              className={`max-w-xl rounded-3xl p-1 text-gray-600 hover:shadow bg-[#e3e3e7]  ${religionStatus === value?.name
                                ? "ring-2  peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] "
                                : "bg-gray-100"
                                }`}
                            >
                              <div type="button" className="flex flex-col ">
                                <div className="flex  gap-1 items-center justify-center px-2">
                                  <p>
                                    <span
                                      value="Gender"
                                      className=" font-lato text-[15px] select-none "
                                    >
                                      {value?.name}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* For Job Status */}
                <div className="mt-10  mx-auto">
                  <label
                    className="text-black text-[18px] font-alice dark:text-white"
                    htmlFor="emailAddress"
                  >
                    Job
                  </label>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {working_In.map((value) => (
                      <div key={value.id}>
                        <div className="flex gap-5 mt-1">
                          <label className="cursor-pointer block ">
                            <input
                              type="checkbox"
                              className="peer sr-only "
                              name="job"
                              onChange={() =>
                                setJob(job === value.name ? null : value.name)
                              }
                              checked={job?.includes(value.name)}
                            />
                            <div
                              className={`max-w-xl rounded-3xl p-1 text-gray-600 hover:shadow bg-[#e3e3e7] ${job === value?.name
                                ? "ring-2  peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] "
                                : "bg-gray-100"
                                }`}
                            >
                              <div type="button" className="flex flex-col ">
                                <div className="flex  gap-1 items-center justify-center px-2">
                                  <p>
                                    <span
                                      value="Gender"
                                      className=" font-lato text-[15px] select-none "
                                    >
                                      {value?.name}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* age */}
                <div className="mt-8 ">
                  <label
                    className="text-black text-[18px] font-alice text-left dark:text-white"
                    htmlFor="emailAddress"
                  >
                    Age
                  </label>
                  <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text dark:text-white  -mb-2">From</span>
                    </label>
                      <div>
                        <select id="minAge" value={ageRange.min} onChange={handleMinAgeChange}       className="w-full cursor-pointer rounded-lg bg-white py-2 pl-2 mt-2 text-[#536279] shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#51ac83] sm:text-sm">
                          {Array.from({ length: 100 - 18 + 1 }, (_, i) => (<option key={i} value={18 + i}>{18 + i}</option>))}
                        </select>
                     </div>
                    </div>

                    <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text dark:text-white -mb-2">To</span>
                    </label>
                      <div>
                        <select
                          id="maxAge" value={ageRange.max} onChange={handleMaxAgeChange}       className="w-full cursor-pointer rounded-lg bg-white py-2 pl-2 mt-2 text-[#536279] shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#51ac83] sm:text-sm">
                          {Array.from({ length: 100 - ageRange.min + 1 }, (_, i) => (
                            <option key={i} value={ageRange.min + i}>
                              {ageRange.min + i}
                            </option>
                          ))}
                        </select>
                     </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className=" w-[80%] mx-auto">
                <label
                  className="text-black text-[18px] font-alice text-left dark:text-white"
                  htmlFor="emailAddress"
                >
                  Body Measurements
                </label>
                <div className="md:flex gap-5">
                  {/* Height Selection */}
                  <select
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="md:w-1/2 w-full mb-2 md:mb-0 cursor-pointer rounded-lg bg-white py-2 pl-2 mt-2 text-[#536279] shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#51ac83] sm:text-sm"
                  >
                    <option value="">Select Height</option>
                    {heightOptions.map((value) => (
                      <option key={value.id} value={value.name}>
                        {value.name}
                      </option>
                    ))}
                  </select>

                  {/* Weight Selection */}
                  <select
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="md:w-1/2 w-full cursor-pointer rounded-lg bg-white py-2 pl-2 mt-2 text-[#536279] shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#51ac83] sm:text-sm"
                  >
                    <option value="">Select Weight</option>
                    {weightOptions.map((value) => (
                      <option key={value.id} value={value.name}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Location */}
              <div className="flex flex-col w-[80%] mt-8 mx-auto">
                <label
                  className="text-black text-[18px] font-alice text-left dark:text-white"
                  htmlFor="emailAddress"
                >
                  Location
                </label>
                <div className="md:flex gap-5">
                  <div>
                    <label className="label">
                      <span className="label-text dark:text-white -mb-2">Country</span>
                    </label>
                    <select
                      id="selectedCountry"
                      value={selectedCountry?.name || ""}
                      onChange={(e) => {
                        const selectedCountryName = e.target.value;
                        const selectedCountryObject = countryData.find(
                          (country) => country.name === selectedCountryName
                        );
                        setSelectedCountry(selectedCountryObject);
                      }}
                      className="w-full cursor-pointer rounded-lg bg-white py-2 pl-2 mt-2 text-[#536279] shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#51ac83] sm:text-sm"   >
                      <option value="">Select Country</option>
                      {countryData.map((country, index) => (
                        <option key={index} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    {selectedCountry && (
                      <>
                        <label className="label">
                          <span className="label-text dark:text-white -mb-2">State</span>
                        </label>
                        <div className="">
                          <select
                            id="selectedState"
                            value={state || ""}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full cursor-pointer rounded-lg bg-white py-2 pl-2 mt-2 text-[#536279] shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#51ac83] sm:text-sm"  >
                            <option value="">Select State</option>
                            {stateData?.map((value, index) => (
                              <option key={index} value={value.name}>
                                {value.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>




    );
  }

  return (
    <div className="dark:bg-gray-800">
      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Explore</title>
      </Helmet>

      {/* banner */}
      <div className="bg-[#FDE8E8] h-[235px]">
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center ">
          <div className="ms-4 text-left">
            <p className="font-alice text-[28px] text-[#272932]">Discover Your Perfect Match</p>
            <p className="text-[#3E4A5B]">Unlock a world of possibilities as you browse through a <br /> diverse collection of partner profiles,  where true love stories begin </p>
            <p className="flex text-[#536279] font-lato pt-7"><img className="mr-1" src={home} alt="" /> <Link to='/'>Home</Link> <span className="mx-2">/</span><img className="mr-1" src={scop} alt="" /> <Link to='/allUser'>Explore</Link></p>
          </div>
          <img className="h-full hidden lg:block" src={couple} alt="" />
        </div>
      </div>


      {/* Filter lg */}
      <div className="lg:flex select-none z-20 dark:bg-gray-800 ">
        <div className="hidden lg:block py-8 bg-[#F0F2F5] w-[350px] dark:bg-gray-500 dark:text-white h-[700px] mt-10 ml-10 rounded-2xl sticky top-10">
          <Filter></Filter>
        </div>

        {/* Filter for small devices */}
        <div className="collapse collapse-arrow bg-slate-200  text-black lg:hidden mt-10 w-[80%] mx-auto">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  ">
            Filter
          </div>
          <div className="collapse-content  ">
            <Filter></Filter>
          </div>
        </div>
        {/* User */}
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto  gap-5 relative  bg-white p-10  z-10 dark:bg-gray-800 overflow-hidden mb-10">
          {filteredUsers.map((filteredUser) => (
            <SingleUserCard
              key={filteredUser._id}
              filteredUser={filteredUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUser;