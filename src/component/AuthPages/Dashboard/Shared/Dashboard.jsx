import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import sliderbtn from "../../../../assets/other/control.png"
import { BiHome, BiUser, BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { FaUsers, FaUserCheck } from "react-icons/fa";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import FooterDashboard from "./FooterDashboard";
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAdmin from "../../../../Hooks/useAdmin";
import useSupport from "../../../../Hooks/useSupport";
import useAuthData from "../../../../Hooks/useAuthData";
import UserVerificationMes from "./UserVerificationMes";
import Loading from "../../../../Shared/Loading";

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    const [isSupport] = useSupport()
    const [userData] = useAuthData();
    const navigate = useNavigate()
    console.log(userData)
    const adminRoutes = [

        { title: "Profile", icon: <BiSolidUserCircle />, link: "/dashboard" },
        { title: "Dashboard", icon: <BiHome></BiHome>, link: "/dashboard/adminUser" },
        { title: "Manage Authority", icon: <BiUser></BiUser>, link: "/dashboard/manageUser" },
        { title: "All User", icon: <FaUsers />, link: "/dashboard/allUser" }
    ];
    const supportRoutes = [
        { title: "Profile", icon: <BiSolidUserCircle />, link: "/dashboard" },
        { title: "Support Dashboard", icon: <FaUserTie></FaUserTie>, link: "/dashboard/userDetails" },
        { title: "Add Service", icon: <MdOutlineMedicalServices />, link: "/dashboard/addService" },
        { title: "Add Blog", icon: <ImBlog />, link: "/dashboard/addBlog" },
        { title: "Verify User", icon: <FaUserCheck />, link: "/dashboard/verifyUser" },


    ];
    useEffect(() => {
        if (!userData || userData.status === "pending" || userData.status === "denied") {
            const logoutTimeout = setTimeout(() => {
                logOut();
                navigate('/authoritysignin');
            }, 7000);

            return () => clearTimeout(logoutTimeout);
        }
    }, [userData, logOut, navigate]);

    if (!userData) {
        return <h2>loading</h2>;
    }

    // Handle cases based on userData
    if (userData === "data not found") {
        return (
            <div>
                <UserVerificationMes
                    message1={"This account is currently set up as a Soulmate user profile"}
                    message2={"To create an author account, please sign up as a different user "}
                    pending={false}
                />
            </div>
        )
    }

    if (userData?.status === "pending") {
        return (
            <div>
                <UserVerificationMes
                    message1={"Your request is being reviewed by our support team"}
                    message2={"Once approved, you'll gain access to the platform"}
                    pending={true}
                />
            </div>
        )
    }

    if (userData?.status === "denied") {
        return (
            <div>
                <UserVerificationMes
                    message1={"Regrettably, your request has been denied"}
                    message2={"Feel free to reach out to our support team for further assistance and information"}
                    pending={false}
                />
            </div>
        )
    }

    if (userData?.status === "approved")
        return (
        <div className="">
            <div className="flex">
              <div className={` ${open ? "w-72" : "w-20 "} hidden md:block  h-screen p-5  pt-8 relative duration-300 bg-gray-100`}>
                <img src={sliderbtn} className={`absolute cursor-pointer -right-3 top-[90px] w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <div className="flex gap-x-4 items-center ">
                  <img src="" className={`cursor-pointer duration-500 ${open && "rotate-[360deg] "}`} />
                  <h1 className={` origin-left ms-12 font-medium text-2xl duration-200 ${!open && "scale-0 "}`}>Soulmate</h1>
                </div>
                <h4 className={` text-center mt-5 font-medium  duration-200 ${!open && "scale-0 "}`}>{user?.displayName}</h4>

                {
                  isAdmin ? <ul className="pt-6 ">
                    {adminRoutes.map((Menu, index) => (
                      <li key={index} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
                        <NavLink to={Menu.link}>
                          <button className="flex items-center gap-5 cursor-pointer">
                            {Menu.icon}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                              {Menu.title}
                            </span>
                          </button>
                        </NavLink>
                      </li>
                    ))}
                  </ul> : <></>
                }
                {
                  isSupport ? <ul className="pt-6 ">
                    {supportRoutes.map((Menu, index) => (
                      <li key={index} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
                        <NavLink to={Menu.link}>
                          <button className="flex items-center gap-5 cursor-pointer">
                            {Menu.icon}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                              {Menu.title}
                            </span>
                          </button>
                        </NavLink>
                      </li>
                    ))}
                  </ul> : <></>
                }
              </div>

              <div className="flex flex-col w-full ">
                <DashboardNav />
                <div className="flex-grow"><Outlet /></div>

                {isSupport && <BottomNav supportRoutes={supportRoutes} />}
                {isAdmin && <BottomNav adminRoutes={adminRoutes} supportRoutes={supportRoutes} />}
              </div>

            </div>
            <FooterDashboard />
        </div>
        
        );

          
};
export default Dashboard;

const BottomNav = ({adminRoutes, supportRoutes}) => {
  return(
    <div className="flex bg-primary-400 justify-evenly md:hidden">
      {adminRoutes ? adminRoutes.map((adminRoute, index) => (
        <Link className="p-2 text-gray-200  hover:bg-black" key={index} to={adminRoute.link}>{adminRoute.icon}</Link>
      )) : <></>}
      {supportRoutes ? supportRoutes.map((supportRoute, index) => (
        <Link className="p-2 text-gray-200  hover:bg-black" key={index} to={supportRoute.link}>{supportRoute.icon}</Link>
      )) : <></>}
    </div>
  )
}