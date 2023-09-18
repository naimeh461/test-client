import React from 'react';
import { useSwiper } from 'swiper/react';
import { BsArrowLeft , BsArrowRight} from "react-icons/bs";
import "./styles.css"
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns text-center ">
      <div className='flex justify- gap-4'>
      <button className='dark:bg-white' onClick={() => swiper.slidePrev()}><BsArrowLeft className='text-black  '></BsArrowLeft></button>
      <button className='dark:bg-white' onClick={() => swiper.slideNext()}><BsArrowRight className='text-black '></BsArrowRight></button>
      </div>
    </div>
  );
};
