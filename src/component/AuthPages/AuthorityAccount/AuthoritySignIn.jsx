import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/admin/admin.png";
import { useContext } from "react";

import Swal from "sweetalert2";

import logo from "../../../assets/logo/logo.png";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthoritySignIn = () => {
  const [Error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  console.log(Error);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (loggedUser) {
          Swal.fire("Good job!", "Login Successful", "success");
          navigate("/dashboard");
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl w-[80%] mx-auto  rounded-3xl mt-44 select-none ">
      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Authority SignUp</title>
      </Helmet>

      <figure className="lg:w-[50%] ">
        <img className="p-10 hidden lg:flex" src={img} alt="" />
      </figure>
      <div className="card-body select-none">
        <div className="text-center mb-5">
          <img className="w-52 mx-auto mt-10" src={logo} alt="" />
        </div>
        <p className="text-center text-[#a2a2a2] lg:text-xl text-lg text-t">
          Welcome to SoulMate | Authority
        </p>
        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-6 mx-4 md:mx-0"
          action=""
        >
          {/* Email field*/}
          <div>
            <div className="relative z-0">
              <input
                name="email"
                type="email"
                id="standard_success"
                aria-describedby="standard_success_help"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none  dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="standard_success"
                className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User name or Email
              </label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p
              id="standard_success_help"
              className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"
            >
              <span className="font-medium">Well done!</span> Some success
              message.
            </p>
          </div>

          {/* password field*/}
          <div>
            <div className="relative z-0">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                id="standard_success"
                aria-describedby="standard_success_help"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none  dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                placeholder=" "
                required
              />
              <span className="absolute right-3 transform -translate-y-1/2 top-1/2 cursor-pointer">
                <i onClick={togglePasswordVisibility}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </i>
              </span>
              <label
                htmlFor="standard_success"
                className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            {/* This paragraph is for input validation. if user inter invalid email or password this paragraph will be shown and text color will be red */}
            <p
              id="standard_success_help"
              className="hidden mt-2 text-xs text-[#a2a2a2] dark:text-gray-400"
            >
              <span className="font-medium">Well done!</span> Some success
              message.
            </p>
          </div>
          <p className="text-sm text-[#a2a2a2] text-right">
            <Link className="red-text">Forgot password?</Link>{" "}
          </p>
          <button className="btn text-gray-300 w-[40%] md:w-[25%] rounded-full mx-auto  bg-[#080373]">
            SignIn
          </button>
        </form>
        {Error && <p className="text-red-600">{Error}</p>}

        <p className="text-center text-[#a2a2a2] ">
          New to soulmate?{" "}
          <Link className="red-text" to="/authoritysignup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthoritySignIn;
