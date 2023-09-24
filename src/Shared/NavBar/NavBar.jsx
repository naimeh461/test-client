import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo3.png";
import useMyData from "../../Hooks/useMyData";
import noProfile from "../../assets/other/blank.png";
import { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Headroom from "react-headroom";
import "./NavBar.css";
import { DarkMode } from "../DarkMode/DarkMode";
import { AiFillMessage } from "react-icons/ai";

const NavBar = () => {
  // if you need to add new links in navbar, add it in li element
  const [userInfo] = useMyData();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  return (
    <Headroom
      className="bg-white dark:bg-gray-400 "
      style={{
        zIndex: 50,
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="navbar  md:px-20 select-none dark:bg-gray-400 dark:text-white bg-[#E8FCFC]">
        <div className="navbar-start">
          <div className="dropdown lg:hidden hidden md:flex">
            <label tabIndex={0} className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavItems></NavItems>
            </ul>
          </div>
          <Link to="/" className="">
            <img className="scale-75" src={logo} alt="" />
          </Link>
        </div>
        <div className="lg:navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <NavItems></NavItems>
          </ul>
        </div>
        <div className="navbar-end ml-auto">
          <DarkMode />
          {user ? (
            <>
              <div>
                <Link to="/message">
                  <AiFillMessage className="text-3xl mr-2 text-red-400" />
                </Link>
              </div>
              <div className="hidden md:block">
                <DropdownProfile userInfo={userInfo} logOut={handleLogOut} />
              </div>
            </>
          ) : (
            <div className="">
              <Link to="/signup">
                <button className="bg-primary-500 rounded-full text-white px-10 py-2   justify-center items-center hidden md:flex">
                  Join Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

    </Headroom>
  );
};

const NavItems = () => {
  return (
    <>
      <li className=" font-semibold text-base dark:bg-gray-400 dark:text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ?
              "w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px] dark:text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className=" font-semibold text-base dark:bg-gray-400 dark:text-white">
        <NavLink
          to="/allUser"
          className={({ isActive }) =>
            isActive ?
              "w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px] " : ""
          }
        >
          Explore
        </NavLink>
      </li>
      <li className=" font-semibold text-base dark:bg-gray-400 dark:text-white">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ?
              "w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]" : ""
          }
        >
          About us
        </NavLink>
      </li>
      <li className=" font-semibold text-base dark:bg-gray-400 dark:text-white">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ?
              "w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li className=" font-semibold text-base dark:bg-gray-400 dark:text-white">
        <NavLink
          to="/plans"
          className={({ isActive }) =>
            isActive ?
              "w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]" : ""
          }
        >
          Plans
        </NavLink>
      </li>
    </>
  );
};




const DropdownProfile = ({ userInfo, logOut, }) => {
  return (

    <div className="dropdown ">
      <label tabIndex={0} className=" flex items-center active:scale-95 duration-75 cursor-pointer border rounded-full pr-3 ">
        {userInfo.profileImage ?
          <><img className="w-10 h-10 mr-2 rounded-full object-cover" src={userInfo.profileImage} alt="user photo" /></>
          : <img className="w-10 h-10 mr-2 rounded-full object-cover" src={noProfile} alt="user photo" />
        }
        <span className=''>{userInfo.name}</span>
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600 dark:hover:text-white" to='/myProfile'>Profile</Link></li>
        <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-black" to='/paymentHistory'>Payment History</Link></li>
        <li onClick={() => logOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg dark:text-black">Sign out</li>
      </ul>

    </div>
  );
};

export default NavBar;
