import { FaTwitter, FaArrowRight, FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineLocationCity, MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import line from "../../assets/other/Group 1171277762 (1).png"
import logo from '../../assets/logo/logo2.png'
const Footer = () => {
  return (
    <div className="bg-[#222328] select-none ">
      <footer className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  font-alice py-10  w-[80%] text-white mx-auto ">
        <div className="mr-10">
          <span className="footer-title">
            <img src={logo} alt="" className="w-40 mb-5 text-white" />
          </span>
          <p className=" max-w-xs text-[#C3CAD5] font-lato">
            Discover your ideal partner through our trusted matrimonial website.
            We bring people together, fostering genuine connections based on
            compatibility and shared life goals. Start your journey to a joyful
            and fulfilling relationship with us.
          </p>
          <p className="mt-5 mb-2 text-[#FFFFFF] opacity-[100%] font-alice">
            Follow Usp
          </p>
          <div className="flex space-x-4 mb-5">
            <a href="#">
              <FaFacebookF className="text-4xl bg-slate-600 p-2 rounded-full" />
            </a>
            <a href="#">
              <FaLinkedinIn className="text-4xl bg-slate-600 p-2 rounded-full" />
            </a>
            <a href="">
              <AiFillInstagram className="text-4xl bg-slate-600 p-2 rounded-full" />
            </a>
            <a href="#">
              <FaTwitter className="text-4xl bg-slate-600 p-2 rounded-full" />
            </a>
          </div>
        </div>

        <div className="mr-10">
          <span className="font-alice text-[30px] leading-[45px] opacity-[100%]">
            Quick Link
          </span>
          <img src={line} alt="" />
          <div className="mt-[30px] flex flex-col gap-4">
            <Link
              to="/about"
              className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
            >
              <FaArrowRight /> About us
            </Link>
            <Link
              to="/allUser"
              className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
            >
              <FaArrowRight /> Explore
            </Link>
            <Link
              to="/blog"
              className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
            >
              <FaArrowRight /> Blog
            </Link>
            <Link
              to="/about"
              className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
            >
              <FaArrowRight /> Contact Us
            </Link>
            <Link
              to="/plans"
              className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
            >
              <FaArrowRight /> Plans
            </Link>
            <Link
              to="/termCondition"
              className="link link-hover flex items-center gap-2 text-[#C3CAD5] text-[16px]"
            >
              <FaArrowRight /> Privacy Policy
            </Link>
          </div>
        </div>

        <div className="select-text">
          <span className="font-alice text-[30px] leading-[45px] opacity-[100%] ">
            Contact Details
          </span>
          <img src={line} alt="" />
          <div className="mt-[30px]">
            <div className="text-[#C3CAD5] text-[16px] mb-3">
              <p className="text-[22px]  font-alice mb-1">Phone Number</p>
              <div className="flex items-center gap-2 text-base ">
                <FaPhoneAlt className="text-3xl bg-slate-600 p-2 rounded-full"></FaPhoneAlt>
                <span>+123 456 789</span>
              </div>
            </div>
            <div className="text-[#C3CAD5] text-[16px] mb-3">
              <p className="text-[22px] font-alice mb-1">Email</p>
              <div className="flex items-center gap-2 text-base ">
                <MdOutlineMail className="text-3xl bg-slate-600 p-2 rounded-full"></MdOutlineMail>
                <span>xyz@gmail.com</span>
              </div>
            </div>
            <div className="text-[#C3CAD5] text-[16px] mb-3">
              <p className="text-[22px] font-alice mb-1">Office Location</p>
              <div className="flex items-center gap-2 text-base ">
                <MdOutlineLocationCity className="text-3xl bg-slate-600 p-2 rounded-full"></MdOutlineLocationCity>
                <span>Dhaka, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-[30px] leading-[45px] opacity-[100%] font-alice">
            Newsletter
          </span>
          <img src={line} alt="" />
          <div className="form-control max-w-prose mt-[30px]">
            <p className="text-[16px] text-[#C3CAD5] font-lato">
              Sign Up to get updates & news about us . Get Latest Deals from
              Walker is Inbox to our mail address.
            </p>
            <label className="label">
              <span className="label-text text-[#C3CAD5] font-alice mt-4 text-[18px]"> Email</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input-bordered w-full pr-16 px-4 py-[11px] border border-[#cf9063] rounded-full bg-[#222328] text-white"
              />
              <button className="absolute top-1 right-1 rounded-full -none px-10 bg-red-600 hover:bg-red-800   py-2">
                sent
              </button>
            </div>
          </div>
          <button className=" mt-5  p-3 rounded-full  bg-red-600 text-white hover:bg-red-800 w-full ">
            Subscribe
          </button>
        </div>
      </footer>

      <div className=" bg-neutral text-neutral-content ">
        <div className="w-[80%] mx-auto md:flex justify-between items-center py-4">
          <p className="text-white">© 2023 SoulMate. All Rights Reserved.</p>
          <p className="text-white">Privacy / Terms & Condition</p></div></div>
    </div>
  );
};

export default Footer;
