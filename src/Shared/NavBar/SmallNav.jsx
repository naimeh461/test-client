import React from 'react';
import {  HiHome, } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import noProfile from "../../assets/other/blank.png";
import useMyData from '../../Hooks/useMyData';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdPayments } from "react-icons/md";
import { FaBlogger } from 'react-icons/fa';
const SmallNav = () => {
    const [userInfo] = useMyData();
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    return (
        <div className='z-50 fixed bottom-20 md:hidden'>
            <nav className=" flex flex-col items-center lg:hidden gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
                <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[60px] xl:h-max py-8 bg-red-300 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
                    <Link
                        to={"/"}  
                        className={`relative flex items-center group hover:text-accent transition-all duration-300`}
                    >
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p[6px] rounded-full opacity-80">
                                <div className="text-[15px] leading-none font-semibold capitalize p-3">Home</div>
                            </div>
                        </div>
                        <div className="text-white text-2xl"><HiHome /></div>
                  
                    </Link>
                    <Link
                        to={"/allUser"}  
                        className={`relative flex items-center group hover:text-accent transition-all duration-300`}
                    >
                     
                      
                    </Link>
                    <DropdownProfile userInfo={userInfo} logOut={handleLogOut}></DropdownProfile>
                    <Link
                        to={"/plans"}  
                        className={`relative flex items-center group hover:text-accent transition-all duration-300`}
                    >
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p[6px] rounded-full opacity-80">
                                <div className="text-[15px] leading-none font-semibold capitalize p-3">Home</div>

                            </div>
                        </div>
                        <div className="text-white text-2xl"><MdPayments/></div>
                         
                    </Link>
                    <Link
                        to={"/blog"}  
                        className={`relative flex items-center group hover:text-accent transition-all duration-300`}
                    >
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p[6px] rounded-full opacity-80">
                                <div className="text-[15px] leading-none font-semibold capitalize p-3">Home</div>

                            </div>
                        </div>
                        <div className="text-white text-2xl"><FaBlogger /></div>
                         
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default SmallNav;
const DropdownProfile = ({ userInfo, logOut, }) => {
    return (
        <div className="dropdown dropdown-top select-none">
            <label tabIndex={0} >
                {userInfo.profileImage ?
                    <><img className="w-10 h-10 mr-2 rounded-full object-cover" src={userInfo.profileImage} alt="user photo" /></>
                    : <img className="w-10 h-10 mr-2 rounded-full object-cover" src={noProfile} alt="user photo" />
                }
            </label>
            <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600 dark:hover:text-white" to='/myProfile'>Profile</Link></li>
                <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-black" to='/paymentHistory'>Payment History</Link></li>
                <li onClick={() => logOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg dark:text-black">Sign out</li>
            </ul>

        </div>
    );
};