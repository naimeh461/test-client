import { useState } from "react";




import { useForm } from "react-hook-form";
import useMyData from "../../../Hooks/useMyData";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { dietOptions, drinkHabitsOptions, religiousValuesOptions, smokingOptions } from "../../../Shared/Variable";
const Userinfo3 = () => {
    const { handleSubmit, reset } = useForm();
    const [userInfo] = useMyData();
    const navigate = useNavigate();
    const [religiousValue, setReligiousValue] = useState({});
    const [foodHabit, setFoodHabit] = useState({});
    const [smokingHabit, setSmokingHabit] = useState({});
    const [drinkHabit, setDrinkHabit] = useState({});
    const onSubmit = () => {
        const userinfo = { religionValue: religiousValue?.religiousValue, foodHabit: foodHabit?.FoodOptions, smokingHabit: smokingHabit?.smokingHabit, drinkHabit: drinkHabit?.drinkHabit , profile_complete:60 , id: userInfo._id}
        fetch('http://localhost:5000/update3', {
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
                navigate("/userinfo4");
            })

    }
    return (
        <div className="select-none">
            <div className="bg-green-200 h-2" style={{ width: `${45}%` }}></div>
            <section className="lg:max-w-4xl w-[90%] mx-auto rounded-md shadow-xl my-10  bg-opacity-10">
                <div className='flex justify-center bg-[#fa604c] p-2 rounded-t-xl w-full'> <h1 className="text-xl font-bold text-white capitalize">Life Style & Values</h1></div>
                <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-10">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Religious Values</label>
                        <div className='flex gap-4 flex-wrap'>
                            {religiousValuesOptions.map((value) =>
                                <div key={value.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="religiousValue" onChange={() => setReligiousValue({ religiousValue: value?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{value?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-10">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Food Habit</label>
                        <div className='flex gap-4 flex-wrap'>
                            {dietOptions.map((value) =>
                                <div key={value.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="dit" onChange={() => setFoodHabit({ FoodOptions: value?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{value?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-10">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Smoke Habit</label>
                        <div className='flex gap-4 flex-wrap'>
                            {smokingOptions.map((value) =>
                                <div key={value.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="smoke" onChange={() => setSmokingHabit({ smokingHabit: value?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{value?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-10">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Drink Habit</label>
                        <div className='flex gap-4 flex-wrap'>
                            {drinkHabitsOptions.map((value) =>
                                <div key={value.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="drink" onChange={() => setDrinkHabit({ drinkHabit: value?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{value?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button disabled={!drinkHabit?.drinkHabit || !smokingHabit?.smokingHabit } type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Continue<BsFillArrowRightCircleFill /></button>
                    </div>

                </form>
            </section >
        </div>

    );
};

export default Userinfo3;