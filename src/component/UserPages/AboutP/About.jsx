import { BsBrowserChrome, BsTelephoneFill, } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { FaFemale, FaMale, FaUsers } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin, } from "react-icons/bi";
// BiLogoInstagram, BiLogoWhatsapp 
import badge from '../../../assets/about-photos/badge.png'
import trust from '../../../assets/about-photos/trust.png'
import ring from '../../../assets/about-photos/rings.png'
import img1 from '../../../assets/about-photos/1.jpg'
import img2 from '../../../assets/about-photos/2.jpg'
import img4 from '../../../assets/about-photos/4.jpg'
import home from '../../../assets/about-photos/homeWhite.svg'
import scop from '../../../assets/about-photos/peopleWhite.svg'
import people from '../../../assets/about-photos/aboutPeople.png'
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const About = () => {
  const [team, setTeam] = useState([]);
  console.log(team);
  useEffect(() => {
    fetch("https://soulmates-server.vercel.app/team")
    .then((res) => res.json())
    .then((data) => setTeam(data));
  }, []);

  return (
    <div className='font-poppins mb-32 dark:bg-gray-800'>

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | About us</title>
      </Helmet>

      {/* about header */}
      <div className="relative mb-20 dark:bg-gray-800">
        {/* about text */}
        {/* <div className="h-[300px] bg-gradient-to-t from-[#FF725E] to-[#ec1d02] ">
          <div className="text-center space-y-5 pt-10">
            <p className=" text-xl text-[#EBFFF6] ">#1 Wedding Website</p>
            <p className="text-7xl font-extrabold bg-clip-text text-transparent text-white">About us</p>
            <p className="text-white text-lg">Most Trusted and premium Matrimony Service in the World.</p>
          </div>
        </div> */}
        <div className="bg-[#0F7173]">
          <div className="max-w-7xl flex justify-between items-center h-full w-full mx-auto p-5 lg:p-0">
            <div className="ms-4 text-left text-[#F0F2F5] ">
              <p className="font-alice lg:text-[28px] text-2xl">{"Where Hearts Find Their Perfect Match"}</p>
              <p className="lg:text-base text-xs mt-2 "> we are dedicated to helping you find your lifelong partner <br /> With a deep understanding of the importance of love and compatibility </p>
              <p className="flex  font-lato pt-7"><img className="mr-1" src={home} alt="" /> <Link to='/'>Home</Link> <span className="mx-2">/</span><img className="mr-1" src={scop} alt="" /> <Link to='/about'>About Us</Link></p>
            </div>
            <img className="hidden lg:block" src={people} alt="" />
          </div>
        </div>

        {/* about cards */}

        <div className=" w-full mt-6">
          <div className="grid justify-center gap-6 md:gap-4 lg:gap-10 md:flex">
            <div className="w-[263px] md:w-[203px] lg:w-[263px] h-[206px] p-8 md:p-4 lg:p-8 text-center text-[#66451c] space-y-4 border rounded shadow-lg hover:scale-110 hover:shadow-2xl duration-500 bg-white">
              <img className='w-[50px] h-[50px] mx-auto' src={badge} alt="" />
              <p className='font-semibold'>Genuine profiles</p>
              <p className='text-sm'>The most trusted wedding matrimony brand</p>
            </div>
            <div className="w-[263px] md:w-[203px] lg:w-[263px] h-[206px] p-8 md:p-4 lg:p-8 text-center text-[#66451c] space-y-4 border rounded shadow-lg hover:scale-110 hover:shadow-2xl duration-500 bg-white">
              <img className='w-[50px] h-[50px] mx-auto' src={trust} alt="" />
              <p className='font-semibold'>Most trusted</p>
              <p className='text-sm'>The most trusted wedding matrimony brand</p>
            </div>
            <div className=" w-[263px] md:w-[203px] lg:w-[263px] h-[206px] p-8 md:p-4 lg:p-8 text-center text-[#66451c] space-y-4 border rounded shadow-lg hover:scale-110 hover:shadow-2xl duration-500 bg-white">
              <img className='w-[50px] h-[50px] mx-auto' src={ring} alt="" />
              <p className='font-semibold'>2000+ weddings</p>
              <p className='text-sm'>The most trusted wedding matrimony brand</p>
            </div>
          </div>
        </div>
      </div>

      {/* welcome section */}
      <div className="lg:grid lg:grid-cols-2 mb-12 max-w-7xl mx-auto dark:bg-gray-800">
        {/* photo section */}
        <div className="relative hidden lg:block">
          <div className="w-[100px] h-[100px] border-[7px] border-[#f0a805] rounded-full absolute -top-[7%] -left-[5%] -z-10 "></div>
          <img className='w-[75%] h-[550px] object-cover rounded-2xl' src={img1} alt="two couples picture" />
          <img className='w-[80%] h-[300px] object-cover rounded-se-[100px] rounded-br-[15px] rounded-bl-[100px] border-white border-t-[15px] border-l-[15px] absolute top-[46%] left-[16%]' src={img2} alt="two couples picture" />
          <div className="w-[200px] h-[200px] border-[7px] border-[#ffe2f0] rounded-2xl absolute top-[68%] left-[68%] -z-10"></div>
        </div>
        <div className=" space-y-6 font-semibold px-8 dark:text-white">
          <div className="dark:text-white">
            <p className='text-[58px] font-bold'>Welcome to</p>
            <p className='text-[35px] font-bold text-[#ec1d02] dark:text-pink-500'>Soulmate matrimony</p>
          </div>
          <p className="dark:text-white">Welcome to our matrimony site, where love stories begin and dreams of forever come to life. We are thrilled to have you join our community of hopeful hearts on the journey to finding lasting love. Start your adventure today, and let us be your trusted partner in this beautiful chapter of life..</p>
          <br />
          <Link to='/plans'>Click here to Start you Soulmate Finding Journy now.</Link>
          <hr />
          <p className="">{"Where the search for love meets a world of possibilities. We're delighted to have you here, embarking on the path to a lifetime of happiness. Explore, connect, and let us help you find that special someone who will make your heart skip a beat"}</p>

          <div className="md:flex gap-10 space-y-6 md:space-y-0 ">
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-black flex justify-center items-center rounded-full border-gray-300 border-[7px]">
                <BsTelephoneFill className="text-white  text-[18px] " />
              </div>
              <div className="">
                <p className="text-[#7a7a7a]dark:text-white">Enquiry</p>
                <p className="text-[18px] font-semibold text-black dark:text-white">+01 2242 3366</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] bg-black flex justify-center items-center rounded-full border-gray-300 border-[7px]">
                <AiOutlineMail className="text-white  text-[18px] " />
              </div>
              <div className="">
                <p className="text-[#7a7a7a] dark:text-white">Get Support</p>
                <p className="text-[18px] font-semibold text-black dark:text-white">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* counting section */}
      <div className="text-[#66451c] grid grid-cols-2 gap-2 md:gap-0 md:flex mt-32 mb-10 px-2 max-w-7xl mx-auto dark:text-orange-300 dark:bg-gray-800">
        <div className="border p-5 flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full md:border-l-0">
          <div className="border-[#d7d1be] border p-3 w-auto rounded-2xl mt-2">
            <AiOutlineHeart className="text-[20px]" />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-cinzel text-[40px] font-bold">2K</p>
            <p className="text-sm font-normal">COUPLES PARED</p>
          </div>
        </div>
        <div className="border p-5 flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full">
          <div className="border-[#d7d1be] border p-3 w-auto rounded-2xl mt-2">
            <FaUsers className="text-[20px]" />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-cinzel text-[40px] font-bold">4000+</p>
            <p className="text-sm font-normal">REGISTERED USERS</p>
          </div>
        </div>
        <div className="border p-5 flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full">
          <div className="border-[#d7d1be] border p-3 w-auto rounded-2xl mt-2">
            <FaMale className="text-[20px]" />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-cinzel text-[40px] font-bold">1600+</p>
            <p className="text-sm font-normal">MENS</p>
          </div>
        </div>
        <div className="border p-5 flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full md:border-r-0">
          <div className="border-[#d7d1be] border  p-3 w-auto rounded-2xl mt-2">
            <FaFemale className="text-[20px]" />
          </div>
          <div className="text-center lg:text-left">
            <p className="font-cinzel text-[40px] font-bold">2000+</p>
            <p className="text-sm font-normal">WOMENS</p>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto">

        <div className="space-y-4 px-4">
          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold dark:bg-gray-500 dark:text-white">
              How can your website help me find the perfect wedding partner?
            </div>
            <div className="collapse-content text-[#66451c]  dark:bg-gray-500 dark:text-white">
              <p className=" dark:bg-gray-500 dark:text-white"> Our website employs advanced matchmaking algorithms and a vast user base to increase your chances of connecting with your ideal life partner.</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold  dark:bg-gray-500 dark:text-white">
              What makes your matrimony site stand out from the rest?
            </div>
            <div className="collapse-content text-[#66451c]  dark:bg-gray-500 dark:text-white">
              <p>We stand out through our commitment to user privacy, a wide range of premium features, and a dedicated support team that ensures a safe and enjoyable experience.</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold  dark:bg-gray-500 dark:text-white">
              How do I create an impressive profile on your website?
            </div>
            <div className="collapse-content text-[#66451c]  dark:bg-gray-500 dark:text-white">
              <p>We provide profile creation tips and guidelines to help you showcase your personality, interests, and preferences effectively.</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold  dark:bg-gray-500 dark:text-white">
              Can I trust the authenticity of profiles on your site?

            </div>
            <div className="collapse-content text-[#66451c]  dark:bg-gray-500 dark:text-white">
              <p> Yes, we implement strict verification processes to ensure the authenticity of profiles, enhancing your confidence in the people you interact with.</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold  dark:bg-gray-500 dark:text-white">
              Do you offer any wedding planning resources or advice?
            </div>
            <div className="collapse-content text-[#66451c]  dark:bg-gray-500 dark:text-white">
              <p> Yes, our platform provides a wealth of wedding planning resources, including articles, guides, and a vibrant community of engaged couples to share insights and ideas.</p>
            </div>
          </div>

          {/* single accordion */}
          <div className="collapse collapse-plus bg-white shadow rounded">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold  dark:bg-gray-500 dark:text-white">
              What subscription plans do you offer, and how can they benefit me?
            </div>
            <div className="collapse-content text-[#66451c]  dark:bg-gray-500 dark:text-white">
              <p> We offer a range of subscription plans tailored to your needs, granting access to exclusive features, enhanced visibility, and greater control over your search for a life partner.</p>
            </div>
          </div>
        </div>

        {/* faq img */}
        <div className="px-2">
          <img className="rounded h-[630px] w-full object-top object-cover " src={img4} alt="" />
        </div>
      </div>

      <div className=" mt-32">
        <h2 className="text-center font-alice text-4xl font-bold mb-6 dark:text-white">Meet Our Team</h2>
      </div>

      {/* team section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  lg:gap-7 justify-center  max-w-7xl mx-auto mb-12">

        {/* card */}
        {team.map((item) => (
          <div key={item._id} className="shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
            <img className="w-full object-cover group-hover:scale-110  duration-700" src={item.img} alt="" />
            <div className="h-[100px]"></div>
            <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
              <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] dark:text-yellow-400">{item.name}</p>
              <p className="text-sm group-hover:text-white dark:text-gray-200">{item.team_role}</p>
            </div>


            {/* socials */}
            <div className="flex justify-center absolute  group-hover:bottom-[40px] duration-700 -bottom-6 inset-x-0 z-10">
              <div className="flex gap-8">
                <Link to={item.facebook} className="p-1 rounded-lg text-black ">
                  <BiLogoFacebook className="text-xl cursor-pointer text-white hover:text-sky-300" />
                </Link>

                <Link to={item.linkdin} className="p-1 rounded-lg text-black cursor-pointer">
                  <BiLogoLinkedin className="text-xl text-white  hover:text-sky-300" />
                </Link>
                <Link to={item.web} className="p-1 rounded-lg text-black cursor-pointer">
                  <BsBrowserChrome className="text-xl text-white hover:text-sky-300" />
                </Link>
              </div>
            </div>
            <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">

            </div>
          </div>

        )
        )
        }



      </div>

      <Contact />
    </div>
  );
};

export default About;
// #a16304