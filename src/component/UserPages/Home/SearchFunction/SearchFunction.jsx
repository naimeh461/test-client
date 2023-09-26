import { useForm } from 'react-hook-form';
import heart from '../../../../assets/home/newHomeBannerImg/heart.gif'
import { useNavigate } from 'react-router-dom';
import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import { Country } from 'country-state-city';
const SearchFunction = () => {

  // const [searchData, setSearchData] = useState([]);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  let countryData = Country.getAllCountries();
  const onSubmit = data => {
    const searchInfo = { maritalStatus: data?.maritalStatus, religion: data?.religion, country: selectedCountry?.name, minAge: ageRange?.min, maxAge: ageRange?.max }
    navigate("/alluser", {
      state: searchInfo
    }
    )

  };
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [ageRange, setAgeRange] = useState({ min: 18, max: 100 });
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

  return (
    <div className=" bg-white md:w-[436px] z-20 rounded-xl mt-[100px] pb-8 dark:bg-gray-400" data-aos="fade-left" data-aos-duration="2000">

      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-[32px] font-alice p-[8px]">Find Your Partner</p>
          <img className="scale-90 w-[56px] " src={heart} alt="" />
        </div>
      </div>
      <hr />

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto space-y-4 mt-4 " action="">
          {/* age */}
          <div className="">
            <span className=" text-[18px] text-[#2A313C] font-medium ">Age</span>
            <div className="flex items-center space-x-4 ">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">From</span>
                </label>
                <div className="relative w-full -mt-2">
                  <select id="minAge" value={ageRange.min} onChange={handleMinAgeChange} className="  text-[16px] text-[#536279] bg-white px-4 py-2 border-2 border-primary-300  rounded-full  text-left transition-all cursor-pointer appearance-none focus:outline-none w-full ">
                    {Array.from({ length: 100 - 18 + 1 }, (_, i) => (<option key={i} value={18 + i}>{18 + i}</option>))}
                  </select>
                  <HiChevronUpDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5 mr-3" aria-hidden="true" />
                </div>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">To</span>
                </label>
                <div className="relative w-full -mt-2">
                  <select
                    id="maxAge" value={ageRange.max} onChange={handleMaxAgeChange} className="  text-[16px] text-[#536279] bg-white px-4 py-2 border-2 border-primary-300  rounded-full  text-left transition-all cursor-pointer appearance-none focus:outline-none w-full ">
                    {Array.from({ length: 100 - ageRange.min + 1 }, (_, i) => (
                      <option key={i} value={ageRange.min + i}>
                        {ageRange.min + i}
                      </option>
                    ))}
                  </select>
                  <HiChevronUpDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5 mr-3" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          
          {/* Religion */}
          <div className="form-control w-full">
            <span className=" text-[18px] text-[#2A313C] font-medium ">Religion</span>
            <div className="flex items-center justify-center h-full w-full mt-3">
              <div className="relative w-full">
                <select {...register("religion")}
                  className="  text-[16px] text-[#536279] bg-white px-4 py-2 border-2 border-primary-300  rounded-full  text-left transition-all cursor-pointer appearance-none focus:outline-none w-full " >
                  <option defaultValue value="">Pick one</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Jewish">Jewish</option>
                  <option value="No Religion">No Religion</option>
                  <option value="Other">Other</option>
                </select>
                <HiChevronUpDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5 mr-3" aria-hidden="true" />
              </div>
            </div>
          </div>
          {/* Living In */}

          <Listbox value={setSelectedCountry} onChange={setSelectedCountry}>
            <div className="relative mt-1">
              <label className="label">
                <span className=" text-[18px] text-[#2A313C] font-medium ">Living In</span>
              </label>
              <Listbox.Button className="relative w-full cursor-default  bg-white border-2  border-primary-300  rounded-full py-3 px-5 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-[16px] text-[#536279]">{selectedCountry ? selectedCountry?.name : "Select Country"}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
                  {countryData.map((country, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={country}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {country.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          {/* Religion */}
          <div className="form-control w-full">
            <span className=" text-[18px] text-[#2A313C] font-medium ">Marital Status</span>
            <div className="flex items-center justify-center h-full w-full mt-3">
              <div className="relative w-full">
                <select {...register("maritalStatus")}
                  className="  text-[16px] text-[#536279] bg-white px-4 py-2 border-2 border-primary-300  rounded-full  text-left transition-all cursor-pointer appearance-none focus:outline-none w-full " >
                  <option defaultValue value="">Pick one</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Separated">Separated</option>
                </select>
                <HiChevronUpDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5 mr-3" aria-hidden="true" />
              </div>
            </div>
          </div>
              
          <div className="">
            <button className="bg-primary-500 text-white w-full py-2 rounded-full mt-4 btn hover:bg-primary-600">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFunction;