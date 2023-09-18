import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import img from "../../../assets/admin/admin.png";
import logo from "../../../assets/logo/logo.png/";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const Image_Hosting_Token = import.meta.env.VITE_Image_Upload_Token;

const AuthoritySignUp = () => {
  const navigate = useNavigate("/");
  const [authority, setAuthority] = useState('');
  console.log(authority);
  const [Error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    if (confirmPassword !== data.password) {
      setError("Passwords do not match");
      return;
    }


    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, imgUrl)
              .then(() => {
                const saveUser = {
                  name: data.name.toUpperCase(),
                  mobile: data.mobile,
                  email: data.email,
                  profileImage: imgUrl,
                  role: authority,
                  status: "pending"
                };
                console.log(saveUser);
                fetch("https://soulmates-server.vercel.app/authority", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      reset();
                      // localStorage.removeItem("step1");
                      // localStorage.removeItem("step2");
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User created successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate("/dashboard");
                    }
                  });
              })
              .catch((error) => setError(error.message));
          });
        }
      });

  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl w-[80%] mx-auto  rounded-3xl h-[50%] my-20 select-none">
      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Authority SignUp</title>
      </Helmet>

      <figure className="lg:w-[50%] ">
        <img className="p-10 hidden lg:flex" src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="text-center mb-5">
          <img className="w-52 mx-auto mt-10" src={logo} alt="" />
        </div>
        <p className="text-center text-[#a2a2a2] lg:text-xl text-lg">
          Welcome to SoulMate | Authority
        </p>
        {/* authority button start*/}
        <div className="flex justify-center gap-4">
          <div className="flex gap-5 mt-3">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="authority"
                onChange={() => setAuthority("admin")}
                required
              />
              <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-blue-800  peer-checked:ring-blue-800 peer-checked:ring-offset-2">
                <div className="flex flex-col ">
                  <div className="flex  gap-1 items-center justify-center px-2">
                    <p>
                      <span value="Gender" className="sm:text-lg p-4">
                        Admin
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </label>
          </div>
          <div className="flex gap-5 mt-3">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="peer sr-only"
                name="authority"
                onChange={() => setAuthority("support")}
                required
              />
              <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow  peer-checked:text-blue-800  peer-checked:ring-blue-800 peer-checked:ring-offset-2">
                <div className="flex flex-col ">
                  <div className="flex  gap-1 items-center justify-center px-2 ">
                    <p>
                      <span className="sm:text-lg p-4">Support</span>
                    </p>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        {/* authority button end*/}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mt-5 w-[100%] mx-auto md:mx-0 mb-24 justify-center "
        >
          {/* Email field*/}
          <div>
            <div className="relative z-0 mt-2">
              <input
                name="name"
                {...register("name", { required: true })}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  dark:border-gray-500 focus:outline-none focus:ring-0  peer"
                placeholder=""
              />
              <label className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter your full name
              </label>
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* img url  */}
          <div>
            <div className="relative z-0 mt-8">
              <label className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter your Image Url
              </label>
              <input
                name="imgurl"
                {...register("image", { required: true })}
               type="file" className="file-input file-input-bordered file-input-[#080373] w-full " 
                placeholder=""
              />
              {errors.imgurl && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          <div>
            <div className="relative z-0 mt-2">
              <input
                name="email"
                {...register("email", { required: true })}
                type="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter your Email
              </label>
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* password field*/}
          <div>
            <div className="relative z-0 mt-2">
              <div className="flex">
                <input
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none  dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                />
                <span className="absolute right-3 transform -translate-y-1/2 top-1/2 cursor-pointer">
                  <i onClick={togglePasswordVisibility}>
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </i>
                </span>
                <label className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
                {/* Toggle button for password visibility */}
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-600"> Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  {" "}
                  Password is must be 6 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  {" "}Password is must be ona number , one characters & symbol
                </span>
              )}
            </div>
          </div>
          <div>
            <div className="relative z-0 mt-2">
              <input
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={passwordVisible ? "text" : "password"}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#a2a2a2] appearance-none dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-[#a2a2a2] peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-[#a2a2a2] dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm Password
              </label>
            </div>
          </div>
          {Error && <p className="text-red-600">{Error}</p>}
          <div className="text-center">
            <p>
              Already Have an Account{" "}
              <Link className="text-blue-400" to="/authoritysignin">
                Log in
              </Link>{" "}
              <br />
            </p>
          </div>
          <button className="btn bg-[#080373] text-white  md:w-[25%] rounded-full mx-auto hover:text-black">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthoritySignUp;
