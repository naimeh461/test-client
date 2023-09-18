import { useContext, useEffect, useState } from "react";
import sliderbtn from "../../../../assets/other/control.png"
import { BiHome, BiUser, BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BsBookmarkCheck } from "react-icons/bs";
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

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { user } = useContext(AuthContext);
    const [profileDatas, setProfileDatas] = useState({});
    const [loading, setLoading] = useState(true)
    const [isAdmin] = useAdmin()
    const [isSupport] = useSupport()

    useEffect(() => {
        fetch(`https://soulmates-server.vercel.app/profileData/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setLoading(false)
                setProfileDatas(data)
            })
            .catch(error => console.log(error))
    }, [user])
    console.log(profileDatas);


    const adminRoutes = [

        { title: "Profile", icon: <BiSolidUserCircle />, link: "/dashboard" },
        { title: "Dashboard", icon: <BiHome></BiHome>, link: "/dashboard/adminUser" },
        { title: "Manage User", icon: <BiUser></BiUser>, link: "/dashboard/manageUser" },
        { title: "All User", icon: <FaUsers />, link: "/dashboard/allUser" }
    ];
    const supportRoutes = [
        { title: "Profile", icon: <BiSolidUserCircle />, link: "/dashboard" },
        { title: "User Support", icon: <FaUserTie></FaUserTie>, link: "/dashboard/userDetails" },
        { title: "Add Service", icon: <MdOutlineMedicalServices />, link: "/dashboard/addService" },
        { title: "Add Blog", icon: <ImBlog />, link: "/dashboard/addBlog" },
        { title: "Verify User", icon: <FaUserCheck />, link: "/dashboard/verifyUser" },


    ];

    return (
        <div className="flex select-none">
            <div className={` ${open ? "w-72" : "w-20 "}  h-screen p-5  pt-8 relative duration-300 `}>
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
            <div className="flex-1 bg-slate-200 flex-col flex-grow">
                <DashboardNav></DashboardNav>
                <div className=""><Outlet></Outlet></div>
                <FooterDashboard></FooterDashboard>
            </div>

        </div>
    );
};
export default Dashboard;