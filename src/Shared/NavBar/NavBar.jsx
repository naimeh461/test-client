import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo3.png'
import useMyData from '../../Hooks/useMyData';
import noProfile from "../../assets/other/blank.png"
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Headroom from 'react-headroom'
import './NavBar.css'
import { DarkMode } from '../DarkMode/DarkMode';
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

    <Headroom style={{ backgroundColor: "white", zIndex: 50, boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }} >
      <div className="navbar bg-base-100 w-[80%] mx-auto select-none ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavItems></NavItems>
            </ul>
          </div>
          <Link to="/" className='hidden md:flex'><img className='scale-75' src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <NavItems></NavItems>
          </ul>
        </div>
        <div className="navbar-end ml-auto">
          <DarkMode />

          {user ? (
            <>
              <div><Link to="/message"><AiFillMessage className='text-3xl mr-2 text-red-400' /></Link></div>
              <DropdownProfile userInfo={userInfo} logOut={handleLogOut} />
            </>
          ) : (
            <div className="">
              <Link to="/signup">
                <button className='bg-primary-500 rounded-full text-white px-10 py-2   justify-center items-center hidden md:flex'>Join Now</button>
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
    < >
      <li className=' font-semibold text-base '><NavLink to="/" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>Home</NavLink></li>
      <li className=' font-semibold text-base'><NavLink to="/allUser" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>Explore</NavLink></li>
      <li className=' font-semibold text-base'><NavLink to="/about" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>About us</NavLink></li>
      <li className=' font-semibold text-base'><NavLink to="/blog" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>Blog</NavLink></li>
      <li className=' font-semibold text-base '><Link to="/plans" className={({ isActive }) => (isActive && 'w-fit block after:block after:h-[3px] after:bg-[#4BE5E7] after:w-[30px]')}>Plans</Link></li>
    </>
  );
}

// profile dropdown links
const ProfileDropLinks = () => {
  return (
    <>
      <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to='/myProfile'>Profile</Link></li>
      <li><Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to='/settings'>Payment History</Link></li>

    </>
  )
}

const DropdownProfile = ({ userInfo, logOut, }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="relative">
      <button onClick={() => setToggle(!toggle)} id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-primary-500  md:mr-0 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-200 py-1 px-2" type="button">
        {userInfo.profileImage ?
          <><img className="w-10 h-10 mr-2 rounded-full object-cover" src={userInfo.profileImage} alt="user photo" /></>
          : <img className="w-10 h-10 mr-2 rounded-full object-cover" src={noProfile} alt="user photo" />
        }
        <span>{userInfo.name}</span>
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div id="dropdownAvatarName" className={toggle ? 'z-10 absolute mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600' : 'z-10 hidden absolute mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'}>
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">{userInfo.email}</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
          <ProfileDropLinks />
        </ul>
        <div className="py-2">
          <button onClick={() => logOut()} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;