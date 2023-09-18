import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMyData from "../../../../Hooks/useMyData";
import { SwiperNavButtons } from "./SwiperNavButton";
import useAllUsersGender from "../../../../Hooks/useAllUsersGender";

const BestRecommendation = () => {

  const [userData] = useAllUsersGender();
  return (
    <div className="py-[120px] max-w-7xl mx-auto ">
      <p className="text-[#272932] text-[40px]  md:px-0 text-center  lg:text-left font-alice lg:ml-10 xl:ml-8 -mb-16 dark:text-white">Best Recommendation for you</p>
      <div className="max-w-7xl mx-auto ">
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
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
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="py-6"
      >
        {userData.map((item) => (
          <SwiperSlide key={item._id} className="group relative mt-10">
            <Link to={`/profile/${item?._id}`}>
              {/* SwiperSlide content */}
              <div className="relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-10">
                <img className="rounded-xl object-cover w-[300px] h-[300px]" src={item?.profileImage} alt="" />
                <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
                  <p className="text-[22px] font-alice mb-1 ">{item?.name}</p> <br />
                  <p className="font-lato text-[16px] ">{item?.country}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="hidden  lg:flex absolute -top-0  right-10 z-30 ">
          <SwiperNavButtons></SwiperNavButtons>
        </div>
        <div className="lg:hidden flex justify-center">
          <SwiperNavButtons></SwiperNavButtons>
        </div>
      </Swiper>
    </div>
  );
};
export default BestRecommendation;