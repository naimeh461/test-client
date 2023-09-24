import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { creativeOptions, fitnessOptions, funOptions, otherInterestsOptions } from "../../../Shared/Variable";
import useMyData from "../../../Hooks/useMyData";

const Userinfo5 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  const { handleSubmit, reset } = useForm();
  const [aboutMe, setAboutMe] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [userInfo] = useMyData();
  const onSubmit = () => {
    const userinfo ={hobbies: selectedOptions, aboutMe : aboutMe ,  id: userInfo._id, profile_complete: 90  }
    console.log(userInfo)
    fetch('http://localhost:5000/update5', {
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
            navigate("/userinfo7");
        })

  }
  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else if (selectedOptions.length < 5) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleAboutMeChange = (event) => {
    const newText = event.target.value;
    setAboutMe(newText);
    setIsValid(newText.length >= 50);
  };

  const characterCount = `${aboutMe.length}/50`;
  return (
    <div>
      <div className="bg-green-200 h-2" style={{ width: `${80}%` }}></div>
      <section className="lg:max-w-4xl w-[90%]   mx-auto rounded-md shadow-xl my-10  bg-opacity-10">
        <div className='flex justify-center bg-[#fa604c] p-2 rounded-t-xl w-full'> <h1 className="text-xl font-bold text-white capitalize">About Yourself and Interests</h1></div>
        <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 w-[80%] mx-auto">
            <label className="text-black text-lg font-semibold" htmlFor="aboutMe">About yourself </label>
            <div className="relative">
              <textarea
                id="aboutMe"
                className={`w-full h-32 mt-2 p-2 border rounded-md ${isValid ? "border-green-500" : "border-red-500"}`}
                placeholder="Write something about yourself..."
                value={aboutMe}
                onChange={handleAboutMeChange}
              />
              <div className="absolute top-0 right-0 p-2 text-gray-400">
                {characterCount}
              </div>
            </div>
            <div>
              {isValid ? (
                <p className="text-green-500">You have written at least 50 characters.</p>
              ) : (
                <p className="text-red-500">Please write at least 50 characters.</p>
              )}
            </div>
          </div>
          <div className="mt-10 w-[80%] mx-auto">
            <div className="mt-10 ">
              <div className="mb-3">
                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Creative</label>
              </div>
              <div className='flex gap-4 flex-wrap'>
                {creativeOptions.map((value) => (
                  <div key={value.id}>
                    <div className='flex gap-3 '>
                      <label className="cursor-pointer">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          name="selectedOption"
                          checked={selectedOptions.includes(value.name)}
                          onChange={() => handleSelect(value.name)}
                        />
                        <div className={` bg-gray-100 rounded-2xl text-gray-600 ring-2 ring-transparent transition-all hover:shadow  ${selectedOptions.includes(value.name) ? "text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2" : ""}`}>
                          <div className="flex flex-col ">
                            <div className="flex gap-1 text-xs px-2 py-1 ">
                              <p>
                                {value.name}
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
            <div className="mt-10 ">
              <div className="mb-3">
                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Fun</label>
              </div>
              <div className='flex gap-4 flex-wrap'>
                {funOptions.map((value) => (
                  <div key={value.id}>
                    <div className='flex gap-3 '>
                      <label className="cursor-pointer">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          name="selectedOption"
                          checked={selectedOptions.includes(value.name)}
                          onChange={() => handleSelect(value.name)}
                        />
                        <div className={` bg-gray-100 rounded-2xl text-gray-600 ring-2 ring-transparent transition-all hover:shadow  ${selectedOptions.includes(value.name) ? "text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2" : ""}`}>
                          <div className="flex flex-col ">
                            <div className="flex gap-1 text-xs px-2 py-1 ">
                              <p>
                                {value.name}
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
            <div className="mt-10 ">
              <div className="mb-3">
                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Fitness</label>
              </div>
              <div className='flex gap-4 flex-wrap'>
                {fitnessOptions.map((value) => (
                  <div key={value.id}>
                    <div className='flex gap-3 '>
                      <label className="cursor-pointer">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          name="selectedOption"
                          checked={selectedOptions.includes(value.name)}
                          onChange={() => handleSelect(value.name)}
                        />
                        <div className={` bg-gray-100 rounded-2xl text-gray-600 ring-2 ring-transparent transition-all hover:shadow  ${selectedOptions.includes(value.name) ? "text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2" : ""}`}>
                          <div className="flex flex-col ">
                            <div className="flex gap-1 text-xs px-2 py-1 ">
                              <p>
                                {value.name}
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
            <div className="mt-10 ">
              <div className="mb-3">
                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Other Interests</label>
              </div>
              <div className='flex gap-4 flex-wrap'>
                {otherInterestsOptions.map((value) => (
                  <div key={value.id}>
                    <div className='flex gap-3 '>
                      <label className="cursor-pointer">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          name="selectedOption"
                          checked={selectedOptions.includes(value.name)}
                          onChange={() => handleSelect(value.name)}
                        />
                        <div className={` bg-gray-100 rounded-2xl text-gray-600 ring-2 ring-transparent transition-all hover:shadow  ${selectedOptions.includes(value.name) ? "text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2" : ""}`}>
                          <div className="flex flex-col ">
                            <div className="flex gap-1 text-xs px-2 py-1 ">
                              <p>
                                {value.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-10 ">
                <button disabled={selectedOptions.length !== 5 || aboutMe.length < 50}  type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Continue {selectedOptions.length}/5<BsFillArrowRightCircleFill /></button>
              </div>
            </div>
          </div>
        </form >
      </section >

    </div >
  );
};

export default Userinfo5;
