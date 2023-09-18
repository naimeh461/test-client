import { createBrowserRouter } from "react-router-dom";
import Home from "../component/UserPages/Home/Home";
import Main from "../Layouts/Main";
import SignIn from "../component/UserPages/SignIn/SignIn";
import Blog from "../component/UserPages/Blog/Blog";
import Plans from "../component/UserPages/Plans/Plans";
import SignUp from "../component/UserPages/SignUp/SignUp";
import About from "../component/UserPages/AboutP/About";
import Service from "../component/UserPages/Service/Service";
import ServiceCard from "../component/UserPages/Service/ServiceCard";
import BlogDetails from "../component/UserPages/Blog/BlogDetails";
import MyProfile from "../component/UserPages/MyProfle/MyProfile";
import PaymentCard from "../payments/SSLcommerz/PaymentCard";
import PaymentSuccess from "../payments/SSLcommerz/PaymentSuccess";
import PaymentFail from "../payments/SSLcommerz/PaymentFail";
import AddService from "../Shared/AddService/AddService";
import StripePayment from "../payments/StripePayment/StripePayment";
import UserProfile from "../component/UserPages/UserProfile/UserProfile";
import Messenger from "../component/UserPages/Chat/Messenger/Messenger";
import PaymentPage from "../payments/PaymentPage/PaymentPage";
import SSl from "../payments/SSLcommerz/SSl";
import SingleHappyStory from "../component/UserPages/Home/HappyStory/SingleHappyStory";
import UserPrivateRoute from "./UserPrivateRoute";
import AddBlog from "../component/UserPages/Blog/AddBlog";
import AllUser from "../component/UserPages/AllUser/AllUser";
import UserInfo1 from "../component/UserPages/GetUserInfo/UserInfo1";
import Userinfo2 from "../component/UserPages/GetUserInfo/Userinfo2";
import Userinfo3 from "../component/UserPages/GetUserInfo/Userinfo3";
import Userinfo4 from "../component/UserPages/GetUserInfo/Userinfo4";
import Userinfo5 from "../component/UserPages/GetUserInfo/Userinfo5";
import Userinfo6 from "../component/UserPages/GetUserInfo/Userinfo6";
import Userinfo7 from "../component/UserPages/GetUserInfo/Userinfo7";
import AuthoritySignIn from "../component/AuthPages/AuthorityAccount/AuthoritySignIn";
import AuthoritySignUp from "../component/AuthPages/AuthorityAccount/AuthoritySignUp";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Profile from "../component/UserPages/MyProfle/Profile/Profile";
import DashboardProfile from "../component/AuthPages/Dashboard/Shared/DashboardProfile";
import AdminHome from "../component/AuthPages/Dashboard/Admin/AdminHome/AdminHome";
import MangeUsersX from "../component/AuthPages/Dashboard/Admin/ManageUsersX/MangeUsersX";
import AllUserD from "../component/AuthPages/Dashboard/Admin/AllUser/AllUserD";
import VerifyUser from "../component/AuthPages/Dashboard/Support/VerifyUser/VerifyUser";
import UserDetails from "../component/AuthPages/Dashboard/Support/UserDetails/UserDetails";
import BookService from "../component/AuthPages/Dashboard/Support/BookService/BookService";
import Dashboard from "../component/AuthPages/Dashboard/Shared/Dashboard";
import GalleryPage from "../component/UserPages/GalleryPage/GalleryPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alluser",
        element: <UserPrivateRoute><AllUser></AllUser></UserPrivateRoute>,
      },
      {
        path: "/plans",
        element: <Plans></Plans>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/galleryPage",
        element: <GalleryPage/>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        
        path: '/userProfile',
        element: <UserProfile />
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/profile/:id',
        element: <Profile />

      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://soulmates-server.vercel.app/blogsDetails/${params.id}`)

      },
      {
        path: "/service",
        element: <Service></Service>,
      },

      {
        path: "/paymentOne",
        element: <PaymentCard></PaymentCard>,
      },
      
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFail></PaymentFail>,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
        children: [
          {
            path: '/payment/stripe',
            element: <StripePayment />
          },
          {
            path: '/payment/sslCommerz',
            element: <SSl />
          }
        ]
      },
      
      {
        path: "/allcouple/:id",
        element: <SingleHappyStory />,
      },
      {
        path: "/message",
        element: <UserPrivateRoute><Messenger></Messenger></UserPrivateRoute>
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
   
      {
        path: "hotel/:id",
        element: <ServiceCard></ServiceCard>,
        loader: ({ params }) => fetch(`https://soulmates-server.vercel.app/service/${params.id}`),

      },
      {
        path: "/",
        children: [
          {
            path: "/userinfo1",
            element: <UserInfo1></UserInfo1>,
          },
          {
            path: "/userinfo2",
            element: <Userinfo2/>,
          },
          {
            path: "/userinfo3",
            element: <Userinfo3/>,
          },
          {
            path: "/userinfo4",
            element: <Userinfo4/>,
          },
          {
            path: "/userinfo5",
            element: <Userinfo5/>,
          },
          {
            path: "/userinfo6",
            element: <Userinfo6/>,
          },
          {
            path: "/userinfo7",
            element: <Userinfo7/>,
          },
        ],
      },
    ],
  },


  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardProfile></DashboardProfile>
      },
      {
        path: "adminUser",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageUser",
        element: <MangeUsersX></MangeUsersX>,
      },
      {
        path: "allUser",
        element: <AllUserD></AllUserD>,
      },
      {
        path: "bookService",
        element: <BookService></BookService>,
      },
      {
        path: "addService",
        element: <AddService />,
      },
      {
        path: "verifyUser",
        element: <VerifyUser />,
      },
      {
        path: "addBlog",
        element: <AddBlog />
      },
      {
        path:"userDetails",
        element:<UserDetails></UserDetails>
      }
    ]
  },
  {
    path: "/",
    children: [
      {
        path: "authoritysignin",
        element: <AuthoritySignIn />,
      },
      {
        path: "authoritysignup",
        element: <AuthoritySignUp />,
      },
    ],
  },
]);
export default router;
