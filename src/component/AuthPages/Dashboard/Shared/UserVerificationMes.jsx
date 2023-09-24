
import { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const UserVerificationMes = ({ message1, message2, pending }) => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleClick = () => {
        logOut();
        navigate('/authoritysignin');
    } 
    return (
        <div>
            <div className="relative top-20 mx-auto p-5 border w-[500px] shadow-lg rounded-md bg-white select-none">
                <div className="mt-3 text-center">
                    {pending ?
                        <>
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                                <BsClock className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Pending
                            </h3>
                        </> :
                        <>
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                <AiOutlineCloseCircle className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Operation Unsuccessful
                            </h3></>}
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500"> {message1} <br /> {message2} </p>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button id="ok-btn" onClick={handleClick} className={`px-4 py-2 text-white font-medium rounded-md w-full shadow-sm ${pending ? 'bg-blue-500' : 'bg-red-500'
                            }`}>OK </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserVerificationMes;