import { useEffect, useState, Fragment } from "react";
import Loading from "../../../Shared/Loading";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import home from '../../../assets/plan/home.svg'
import scop from '../../../assets/plan/scop.svg'
import couple from '../../../assets/plan/couple.png'
import { BiFilterAlt,  } from "react-icons/bi";
import {heightOptions,marital_status,religions,weightOptions,working_In,} from "../../../Shared/Variable";
import { Range } from "react-range";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";
import { Country, State } from "country-state-city";
import SingleUserCard from "./SingleUserCard";
import useAllUsersGender from "../../../Hooks/useAllUsersGender";


const AllUser = () => {
  const location = useLocation();
  const searchData = location.state;
  const [userData,isLoading] = useAllUsersGender();
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [religionStatus, setReligionStatus] = useState(null);
  const [ageRange, setAgeRange] = useState([18, 60]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [state, setState] = useState(null);
  const [stateData, setStateData] = useState();
  let countryData = Country.getAllCountries();
  const [height, setheight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [job, setJob] = useState(null);


  const handleAgeChange = (newAgeRange) => {
    setAgeRange(newAgeRange);
  };

  useEffect(() => {
    setStateData(State.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);

  useEffect(() => {
    let filteredData = userData;
    if (searchData !== null) {
      filteredData = userData.filter((user) => {
        return (
          (!searchData.gender || user.gender === searchData.gender) &&
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
          (user) => user.age >= ageRange[0] && user.age <= ageRange[1]
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
          (user) => user.weight === weight?.name
        );
      }
      if (height !== null) {
        const selectedHeight = parseHeightString(height?.name);
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
  }, [userData,maritalStatus,religionStatus,ageRange,selectedCountry, state,height, weight,job,searchData]);

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
      < >
        <div className="sticky top-0 ">
          <div className="">
            <div className="w-[350px] hidden lg:block">
              <h2 className="flex items-center text-[22px] font-alice gap-2 w-[80%] mx-auto -mt-4">
                <BiFilterAlt />
                Filter
              </h2>
              <hr className="my-2 h-0.5 border-t-0 bg-[#595E73] opacity-100 dark:opacity-50"></hr>
            </div>
            <div className="w-[80%] mx-auto pb-10 ">
              <div>
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
                              className={`max-w-xl rounded-3xl p-1 text-gray-600 hover:shadow bg-[#e0e1e8] font-lato ${maritalStatus === marriage?.name
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
                            className={`max-w-xl rounded-3xl p-1 text-gray-600 hover:shadow bg-[#e0e1e8] ${religionStatus === value?.name
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
                            className={`max-w-xl rounded-3xl p-1 text-gray-600 hover:shadow bg-[#e0e1e8] ${job === value?.name
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
              <div className="flex flex-col  mt-10 ">
                <label
                  className="text-black text-[18px] font-alice mb-10 text-left dark:text-white"
                  htmlFor="emailAddress"
                >
                  Age
                </label>
                <div className="flex items-center space-x-4 ">
                  <Range
                    values={ageRange}
                    step={1}
                    min={18}
                    max={100}
                    onChange={handleAgeChange}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="h-1 bg-gray-950 rounded-full "
                        style={{
                          ...props.style,
                          height: "6px",
                          width: "80%",
                          backgroundColor: "#ccc",
                        }}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props, index }) => (
                      <div
                        {...props}
                        className="h-4 w-4 bg-[#51ac83] rounded-full shadow flex items-center justify-center relative"
                      >
                        <span
                          className={`absolute -top-8  text-white  bg-[#21754f] p-[3px]  rounded-sm tooltip text-xs  ${index === 0 ? "left-0" : "-right-[2px]"
                            }`}
                        >
                          {ageRange[index]}
                        </span>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Location */}

            <div className="flex flex-col  mt-1  w-[80%] mx-auto">
              <label
                className="text-black text-[18px] font-alice  text-left dark:text-white"
                htmlFor="emailAddress"
              >
                Location
              </label>
              <div className="flex gap-5 ">
                <Listbox
                  value={setSelectedCountry}
                  onChange={setSelectedCountry}
                >
                  <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white py-2 pl-2 mt-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ">
                    <span className="block truncate text-sm text-[#536279]">
                      {selectedCountry
                        ? selectedCountry?.name
                        : "Select Country"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                      <HiChevronUpDown
                        className="h-5 w-5 text-gray-400 mr-3"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="z-30 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {countryData.map((country, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                            }`
                          }
                          value={country}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                  }`}
                              >
                                {country.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <HiCheck
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>

                {selectedCountry?.name ? (
                  <>
                    <Listbox value={setState} onChange={setState}>
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-2 mt-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate text-sm text-[#536279]">
                          {state ? state?.name : "Select State"}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                          <HiChevronUpDown
                            className="h-5 w-5 text-gray-400 mr-3"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {stateData.map((value, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-amber-100 text-amber-900"
                                  : "text-gray-900"
                                }`
                              }
                              value={value}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {value.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <HiCheck
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </Listbox>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="flex flex-col  mt-8  w-[80%] mx-auto ">
              <label
                className="text-black text-[18px] font-alice  text-left dark:text-white"
                htmlFor="emailAddress"
              >
                Body Measurements
              </label>
              <div className="flex gap-5 ">
                <Listbox value={setheight} onChange={setheight}>
                  <Listbox.Button className=" relative w-1/2 cursor-default rounded-lg bg-white py-2 pl-2 mt-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ">
                    <span className="block truncate text-sm text-[#536279]">
                      {height ? height?.name : "Select height"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                      <HiChevronUpDown
                        className="h-5 w-5 text-gray-400 mr-3"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="z-30 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {heightOptions.map((value) => (
                        <Listbox.Option
                          key={value.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                            }`
                          }
                          value={value}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                  }`}
                              >
                                {value.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <HiCheck
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>
                <Listbox value={setWeight} onChange={setWeight}>
                  <Listbox.Button className="w-1/2 relative  cursor-default rounded-lg  bg-white py-2 pl-2 mt-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ">
                    <span className="block truncate text-sm text-[#536279]">
                      {weight ? weight?.name : "Select weight"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                      <HiChevronUpDown
                        className="h-5 w-5 text-gray-400 mr-3"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="z-30 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {weightOptions.map((value) => (
                        <Listbox.Option
                          key={value.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                            }`
                          }
                          value={value}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                  }`}
                              >
                                {value.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <HiCheck
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="">
      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Explore</title>
      </Helmet>
      
            {/* banner */}
      <div className="bg-[#FDE8E8] h-[235px]">
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
          <div className="ms-4 text-left">
            <p className="font-alice text-[28px] text-[#272932]">" Discover Your Perfect Match "</p>
            <p className="text-[#3E4A5B]">Unlock a world of possibilities as you browse through a <br /> diverse collection of partner profiles,  where true love stories begin </p>
            <p className="flex text-[#536279] font-lato pt-7"><img className="mr-1" src={home} alt="" /> <Link to='/'>Home</Link> <span className="mx-2">/</span><img className="mr-1" src={scop} alt="" /> <Link to='/allUser'>Explore</Link></p>
          </div>
          <img className="h-full hidden lg:block" src={couple} alt="" />
        </div>
      </div>
      

      {/* Filter lg */}
      <div className="lg:flex select-none z-20 ">
        <div className="hidden lg:block py-8 bg-[#F0F2F5] w-[350px]  dark:bg-gray-500 dark:text-white">
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
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto  gap-5 relative  bg-white p-10  z-10 dark:bg-gray-800 overflow-hidden">
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
