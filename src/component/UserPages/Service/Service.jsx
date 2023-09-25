import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbHeartPlus } from "react-icons/tb";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import scop from '../../../assets/plan/scop.svg'
import couple from '../../../assets/other/blogCouple.png'
import home from '../../../assets/plan/home.svg'
// import "./styles.css";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import Happy2 from "./Happy2";
import HappyStory from "../Home/HappyStory/HappyStory";

const Service = () => {
  const [catering, setCatering] = useState([]);
  const [photography, setPhotography] = useState([]);
  const [hotel, setHotel] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:5000/service/catering")
      .then((res) => res.json())
      .then((data) => setCatering(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/service/photography")
      .then((res) => res.json())
      .then((data) => setPhotography(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/service/hotel")
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, []);





  return (
    <>
      <div className=" max-w-screen-xl mt-20 mx-auto ">



        {/* content-section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white ">
            Hotel Booking service <span className="red-text">for you</span>{" "}
          </h2>
        </div>

        {/* slider Section */}
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },

            }}

            modules={[Navigation, Pagination, A11y, Autoplay]}
            className="mySwiper"
          >
            {hotel.map((item) => (
              <SwiperSlide key={item._id}>
                <Link to={`/hotel/${item._id}`}>
                  {/* new card */}
                  <div className="bg-[#F0F2F5]  text-[#536279] text-base w-[300px] rounded-lg overflow-hidden relative group mx-8">
                    <img className="w-[300px] h-[200px] object-cover" src={item?.image} alt="" />
                    <TbHeartPlus className="p-2 bg-white text-4xl rounded-xl absolute top-2 right-2 hidden group-hover:block cursor-pointer " />
                    <div className="p-3 space-y-2 cursor-progress">
                      <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Name:</span> {item.name}</p>
                      <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Price:</span> {item.price}</p>
                      <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Description: </span> <span>{item.description.substring(0, 100)}...</span></p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>




      <div className="mt-10">

        <div className=" max-w-screen-xl mt-20 mx-auto ">
          {/* content-section */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold dark:text-white ">
              Media Booking service <span className="red-text">for you</span>{" "}
            </h2>
          </div>
          {/* slider Section */}
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                240: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}

              modules={[Navigation, Pagination, A11y, Autoplay]}
              className="mySwiper"
            >
              {photography.map((item) => (
                <SwiperSlide key={item._id}>
                  <Link to={`/hotel/${item._id}`}>
                    {/* new card */}
                    <div className="bg-[#F0F2F5]  text-[#536279] text-base w-[300px] rounded-lg overflow-hidden relative group mx-8">
                      <img className="w-[300px] h-[200px] object-cover" src={item?.image} alt="" />
                      <TbHeartPlus className="p-2 bg-white text-4xl rounded-xl absolute top-2 right-2 hidden group-hover:block cursor-pointer " />
                      <div className="p-3 space-y-2 cursor-progress">
                        <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Name:</span> {item.name}</p>
                        <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Price:</span> {item.price}</p>
                        <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Description: </span> <span>{item.description.substring(0, 100)}...</span></p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="mt-10">

        <div className=" max-w-screen-xl mt-20 mx-auto ">
          {/* content-section */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold dark:text-white ">
            Catering Booking service <span className="red-text">for you</span>{" "}
            </h2>
          </div>
          {/* slider Section */}
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                240: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}

              modules={[Navigation, Pagination, A11y, Autoplay]}
              className="mySwiper"
            >
              {catering.map((item) => (
                <SwiperSlide key={item._id}>
                  <Link to={`/hotel/${item._id}`}>
                    {/* new card */}
                    <div className="bg-[#F0F2F5]  text-[#536279] text-base w-[300px] rounded-lg overflow-hidden relative group mx-8">
                      <img className="w-[300px] h-[200px] object-cover" src={item?.image} alt="" />
                      <TbHeartPlus className="p-2 bg-white text-4xl rounded-xl absolute top-2 right-2 hidden group-hover:block cursor-pointer " />
                      <div className="p-3 space-y-2 cursor-progress">
                        <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Name:</span> {item.name}</p>
                        <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Price:</span> {item.price}</p>
                        <p className="font-medium"><span className="text-[#0e0d0d] font-semibold">Description: </span> <span>{item.description.substring(0, 100)}...</span></p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mt-20 mx-auto ">
        <div className="bg-[#FBF2E4] h-[235px]">
          <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
            <div className="ms-4 text-left">
              <p className="font-alice text-[28px] text-[#272932]">Share Your Happy Moment With Us!</p>
              <p className="text-[#3E4A5B]"> Encourage others to<br /> Find there soulmate </p>
              <p className="flex text-[#536279] font-lato pt-7"><img className="mr-1" src={home} alt="" /> <Link to='/'>Home</Link> <span className="mx-2">/</span><img className="mr-1" src={scop} alt="" /> <Link to='/plan'>Plan</Link></p>
            </div>
            <img className="h-full" src={couple} alt="" />
          </div>
        </div>
        <Happy2 />

        <HappyStory></HappyStory>
      </div>

    </>
  );
};

export default Service;
