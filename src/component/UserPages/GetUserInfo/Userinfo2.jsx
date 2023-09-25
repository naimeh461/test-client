import { Listbox, Transition } from '@headlessui/react';
import  { useState, Fragment } from 'react';
import { useForm } from "react-hook-form";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import useMyData from '../../../Hooks/useMyData';
import { useNavigate } from 'react-router-dom';
import { salaryOptions,workingAsOptions,highestQualification,working_In,educations } from '../../../Shared/Variable';




const Userinfo2 = () => {
    const { handleSubmit, reset } = useForm();
    const [userInfo] = useMyData();
    const navigate = useNavigate();
    const [education, setEducation] = useState({});
    const [qualifications, setQualification] = useState(null);
    const [workingIn, setWorkingIn] = useState({});
    const [salary, setSalary] = useState(null);
    const [jobSector, setJobSector] = useState(null);
    const onSubmit = () => {
        const userinfo = { education: education.educationValue, qualifications: qualifications?.name, workingIn: workingIn.workingCategory, jobSector: jobSector?.name , salary: salary?.name , profile_complete:45 , id: userInfo._id}
        fetch('http://localhost:5000/update2', {
            method: "PUT",
            headers: {
              "content-type" : "application/json"
            },
            body: JSON.stringify(userinfo)
          })
            .then(res => res.json())
            .then(data => {  
                console.log(data)   
                reset();
                navigate("/userinfo3");
            })
    }
    return (
        <div className='select-none'>
            <div className="bg-green-200 h-2" style={{ width: `${30}%` }}></div>
            <section className=" w-[90%] lg:max-w-4xl  mx-auto rounded-md shadow-xl my-10  bg-opacity-10">
                <div className='flex justify-center bg-[#fa604c] p-2 rounded-t-xl w-full'> <h1 className="text-xl font-bold text-white capitalize">Education & Job Information</h1></div>
                <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Education</label>
                        <div className='flex gap-4 flex-wrap'>
                            {educations.map((education) =>
                                <div key={education.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="education" onChange={() => setEducation({ educationValue: education?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{education?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    {education.educationValue === "Other" || education.educationValue === 'Graduate' || education.educationValue === 'Undergraduate' ? <>
                        <div className="mt-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Highest Qualification</label>
                            <div className='flex gap-4 flex-wrap'>
                                <Listbox value={setQualification} onChange={setQualification}>
                                    <div className="relative mt-1 w-full">
                                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{qualifications ? qualifications.name : "Default"}</span>
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
                                                {highestQualification.map((qualification) => (
                                                    <Listbox.Option
                                                        key={qualification.id}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={qualification}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {qualification.name}
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
                    </> : <></>}

                    <div className="mt-10">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Working</label>
                        <div className='flex gap-4 flex-wrap'>
                            {working_In.map((work) =>
                                <div key={work.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="working" onChange={() => setWorkingIn({ workingCategory: work?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{work?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    {workingIn.workingCategory === "Defense" || workingIn.workingCategory === "Government" || workingIn.workingCategory === "Private Company" ? <>
                        <div className="mt-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Working Field</label>
                            <div className='flex gap-4 flex-wrap  '>
                                <Listbox value={setJobSector} onChange={setJobSector}>
                                    <div className="relative mt-1 w-full z-20">
                                        <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{jobSector ? jobSector.name : "Default"}</span>
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
                                                {workingAsOptions.map((workingOption) => (
                                                    <Listbox.Option
                                                        key={workingOption.id}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={workingOption}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {workingOption.name}
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
                    </> : <></>}
                    
                    {workingIn.workingCategory ? <>
                        <div className="mt-10 z-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Yearly Income</label>
                            <div className='flex gap-4 flex-wrap'>
                                <Listbox value={setSalary} onChange={setSalary}>
                                    <div className="relative mt-1 w-full z-10">
                                        <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{salary ? salary.name : "Default"}</span>
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
                                                {salaryOptions.map((salary) => (
                                                    <Listbox.Option
                                                        key={salary.id}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={salary}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {salary.name}
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
                    </> : <></>}

                    


                   
                    <div className="flex justify-center mt-10">
                        <button disabled={ !education.educationValue || !workingIn.workingCategory || !salary?.name  }  type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Continue<BsFillArrowRightCircleFill /></button>
                    </div>
                </form>
            </section>

        </div>

    );
};

export default Userinfo2;