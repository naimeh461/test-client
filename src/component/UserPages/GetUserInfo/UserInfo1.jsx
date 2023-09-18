import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { City, Country, State } from "country-state-city";
import { useEffect, useState, Fragment } from 'react';
import { BiFemale, BiMale } from 'react-icons/bi';
import { calculateAge } from '../../../utilities/utilities';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Selector from '../MyProfle/Selector';
import useMyData from '../../../Hooks/useMyData';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import { Listbox, Transition } from '@headlessui/react';
import { heightOptions, marital_status, religions, weightOptions, motherTongueOptions, muslimSectOptions, hinduSectOptions, christianSectOptions, jewishSectOptions, buddhistSectOptions } from '../../../Shared/Variable';

const genders = [
    { id: 1, name: 'Male', icon: <BiMale className='text-lg' /> },
    { id: 2, name: 'Female', icon: <BiFemale className='text-lg' /> },

];


const UserInfo1 = () => {
    const location = useLocation();
    const profileFor = location.state;
    const [userInfo] = useMyData();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [selectedOption, setSelectedOption] = useState({});
    const [maritalStatus, setMaritalStatus] = useState({});
    const [religion, setReligion] = useState({});
    const [height, setheight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [sect, setSect] = useState(null);
    const [motherTongue, setMotherTongue] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('US');
    const [error, setError] = useState("");
    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = useState();
    const [cityData, setCityData] = useState();
    const [country, setCountry] = useState("Country");
    const [state, setState] = useState();
    const [city, setCity] = useState();

    console.log(userInfo);
    
    useEffect(() => {
        setStateData(State.getStatesOfCountry(country?.isoCode));
    }, [country]);

    useEffect(() => {
        setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
    }, [state]);

    useEffect(() => {
        stateData && setState(stateData[0]);
    }, [stateData]);

    useEffect(() => {
        cityData && setCity(cityData[0]);
    }, [cityData]);

    const onSubmit = (data) => {
        setError("")
        const birthdate = new Date(data.birth);
        const age = calculateAge(birthdate);
        if (age < 18) {
            setError("You must be 18 years old");
            return;
        }
        data = { mobile: phoneNumber, age: age, gender: selectedOption.gender, maritalStatus: maritalStatus.maritalStatus, religion: religion.Religion, country: country?.name, state: state?.name, city: city?.name, height: height?.name, weight: weight?.name, profile_complete: 30, profileFor: profileFor?.Profile_For, id: userInfo._id , motherTongue:motherTongue?.name , sect: sect.name }
        console.log(data)
        fetch('https://soulmates-server.vercel.app/update1', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                reset();
                navigate("/userinfo2");
            })

    };



    return (
        <div>
            <div className="bg-green-200 h-2" style={{ width: `${10}%` }}></div>
            <section className="lg:max-w-4xl w-[90%]   mx-auto rounded-md shadow-xl my-10  bg-opacity-10">
                <div className='flex justify-center bg-[#fa604c] p-2 rounded-t-xl w-full'> <h1 className="text-xl font-bold text-white capitalize">Personal Information</h1></div>
                <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        {/* For gender selection */}
                        <div className="mt-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Gender</label>
                            <div className='flex gap-4 flex-wrap'>
                                {genders.map((gender) =>
                                    <div key={gender.id}>
                                        <div className='flex gap-5 mt-3'>
                                            <label className="cursor-pointer">
                                                <input type="radio" className="peer sr-only" name="gender" onChange={() => setSelectedOption({ gender: gender?.name })} />
                                                <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                    <div className="flex flex-col ">
                                                        <div className="flex  gap-1 items-center justify-center px-2">
                                                            <div>
                                                                {gender.icon}
                                                            </div>
                                                            <p><span value="Gender" className="sm:text-lg ">{gender?.name}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* For Marital Status */}
                        <div className="mt-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Marital Status</label>
                            <div className='flex gap-4 flex-wrap'>
                                {marital_status.map((marriage) =>
                                    <div key={marriage.id}>
                                        <div className='flex gap-5 mt-3'>
                                            <label className="cursor-pointer">
                                                <input type="radio" className="peer sr-only" name="marriage" onChange={() => setMaritalStatus({ maritalStatus: marriage?.name })} />
                                                <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                    <div className="flex flex-col ">
                                                        <div className="flex  gap-1 items-center justify-center px-2">
                                                            <p><span value="Gender" className="sm:text-lg ">{marriage?.name}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* For Religion Status */}
                        <div className="mt-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Religion</label>
                            <div className='flex gap-4 flex-wrap'>
                                {religions.map((religion) =>
                                    <div key={religion.id}>
                                        <div className='flex gap-5 mt-3'>
                                            <label className="cursor-pointer">
                                                <input type="radio" className="peer sr-only" name="religion" onChange={() => setReligion({ Religion: religion?.name })} />
                                                <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                    <div className="flex flex-col ">
                                                        <div className="flex  gap-1 items-center justify-center px-2">
                                                            <p><span value="Gender" className="sm:text-lg ">{religion?.name}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='mt-10 '>
                            <div className="grid md:grid-cols-3 rounded-lg  gap-5">
                                <div className='z-40'>
                                    <p className="text-black text-lg font-semibold">Country :</p>
                                    <Selector
                                        data={countryData}
                                        selected={country}
                                        setSelected={setCountry}
                                    />
                                </div>
                                {state && (
                                    <div className='z-40'>
                                        <p className="text-black text-lg font-semibold">State :</p>
                                        <Selector
                                            data={stateData}
                                            selected={state}
                                            setSelected={setState}
                                        />
                                    </div>
                                )}
                                {city && (
                                    <div className='z-40'>
                                        <p className="text-black text-lg font-semibold">City :</p>
                                        <Selector data={cityData} selected={city} setSelected={setCity} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='lg:flex lg:gap-10'>
                            <div className='mt-10 lg:w-[50%] z-30'>
                                <label className="text-black text-lg font-semibold" htmlFor="standard_success ">Phone number</label>
                                <div className='mt-4'><PhoneInput inputProps={{ name: 'phone', required: true, autoFocus: true }} country={phoneNumber} onChange={(value => { setPhoneNumber(value) })} /></div>
                            </div>

                            <div className='mt-10 lg:w-[50%]'>
                                <label className="text-black text-lg font-semibold" htmlFor="standard_success">Date of Birth</label>
                                <input {...register("birth", { required: true })} id="standard_success" aria-describedby="standard_success_help" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-[#51ac83] focus:outline-none peer-checked:ring-[#51ac83] " />
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            {/* Mother tongue */}
                            <div className="mt-10 z-20 lg:w-[50%]">
                                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Mother tongue</label>
                                <div className='flex gap-4 flex-wrap'>
                                    <Listbox value={setMotherTongue} onChange={setMotherTongue}>
                                        <div className="relative mt-1 w-full">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{motherTongue ? motherTongue.name : "Default"}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <HiChevronUpDown
                                                        className="h-5 w-5 text-gray-400"
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
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {motherTongueOptions.map((value) => (
                                                        <Listbox.Option
                                                            key={value.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={value}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {value.name}
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
                                </div>
                            </div>
                            {/* sect selection option */}
                            {religion.Religion === "Muslim" || religion.Religion === "Hindu" || religion.Religion === "Buddhist" || religion.Religion === "Jewish" || religion.Religion === "Christian" ? <>
                            <div className="mt-10 z-20 lg:w-[50%]">
                                <div>
                                    <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Sect</label>
                                    <div className='flex gap-4 flex-wrap'>
                                        <Listbox value={setSect} onChange={setSect}>
                                            <div className="relative mt-1 w-full">
                                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                    <span className="block truncate">{sect ? sect.name : "Default"}</span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <HiChevronUpDown
                                                            className="h-5 w-5 text-gray-400"
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
                                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {religion.Religion === "Muslim" ? <>
                                                            {muslimSectOptions.map((value) => (
                                                                <Listbox.Option
                                                                    key={value.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={value}
                                                                >
                                                                    {({ selected }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                    }`}
                                                                            >
                                                                                {value.name}
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
                                                        </> : <></>}
                                                        {religion.Religion === "Hindu" ? <>
                                                            {hinduSectOptions.map((value) => (
                                                                <Listbox.Option
                                                                    key={value.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={value}
                                                                >
                                                                    {({ selected }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                    }`}
                                                                            >
                                                                                {value.name}
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
                                                        </> : <></>}
                                                        {religion.Religion === "Christian" ? <>
                                                            {christianSectOptions.map((value) => (
                                                                <Listbox.Option
                                                                    key={value.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={value}
                                                                >
                                                                    {({ selected }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                    }`}
                                                                            >
                                                                                {value.name}
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
                                                        </> : <></>}
                                                        {religion.Religion === "Buddhist" ? <>
                                                            {buddhistSectOptions.map((value) => (
                                                                <Listbox.Option
                                                                    key={value.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={value}
                                                                >
                                                                    {({ selected }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                    }`}
                                                                            >
                                                                                {value.name}
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
                                                        </> : <></>}
                                                        {religion.Religion === "Jewish" ? <>
                                                            {jewishSectOptions.map((value) => (
                                                                <Listbox.Option
                                                                    key={value.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={value}
                                                                >
                                                                    {({ selected }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                    }`}
                                                                            >
                                                                                {value.name}
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
                                                        </> : <></>}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </Listbox>
                                    </div>
                                </div>
                                </div>
                            </> : <></>}
                        </div>

                        {/* This is for height */}
                        <div className='lg:flex lg:gap-10'>
                            <div className="mt-10 z-10 lg:w-[50%]">
                                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Height</label>
                                <div className='flex gap-4 flex-wrap'>
                                    <Listbox value={setheight} onChange={setheight}>
                                        <div className="relative mt-1 w-full z-10">
                                            <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{height ? height.name : "Default"}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <HiChevronUpDown
                                                        className="h-5 w-5 text-gray-400"
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
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {heightOptions.map((myHeight) => (
                                                        <Listbox.Option
                                                            key={myHeight.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={myHeight}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {myHeight.name}
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
                                </div>
                            </div>
                            {/* User Weight */}
                            <div className="mt-10 z-10 lg:w-[50%]">
                                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Weight</label>
                                <div className='flex gap-4 flex-wrap'>
                                    <Listbox value={setWeight} onChange={setWeight}>
                                        <div className="relative mt-1 w-full">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{weight ? weight.name : "Default"}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <HiChevronUpDown
                                                        className="h-5 w-5 text-gray-400"
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
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {weightOptions.map((value) => (
                                                        <Listbox.Option
                                                            key={value.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={value}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {value.name}
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
                                </div>
                            </div>

                        </div>
                    </div>
                    {
                        error && (
                            <div className="text-red-500 mt-4 text-center">
                                {error}
                            </div>
                        )
                    }
                    <div className="flex justify-center mt-10">
                        <button disabled={!selectedOption.gender || !maritalStatus.maritalStatus || !religion.Religion || country === "Country" || !height?.name} type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Continue<BsFillArrowRightCircleFill /></button>
                    </div>
                </form >
            </section >

        </div >
    );
};

export default UserInfo1;