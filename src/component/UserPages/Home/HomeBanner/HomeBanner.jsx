import { BsFillPlayFill } from "react-icons/bs";
import Marquee from "react-fast-marquee";


import img from '../../../../assets/home/newHomeBannerImg/2.jpg'
import img2 from '../../../../assets/home/newHomeBannerImg/3.jpg'
import img3 from '../../../../assets/home/newHomeBannerImg/5.jpg'
import img4 from '../../../../assets/home/newHomeBannerImg/7.jpg'
import img5 from '../../../../assets/home/newHomeBannerImg/8.jpg'
import img6 from '../../../../assets/home/newHomeBannerImg/9.jpg';
import SearchFunction from "../SearchFunction/SearchFunction";
import { Link } from "react-router-dom";


const HomeBanner = () => {

  return (
    <div className=' bg-[#FDE8E8] select-none dark:bg-gray-800'>
      <div className="md:flex gap-5 justify-between w-[80%]  mx-auto py-10 md:py-0">
        <div className="space-y-5  mb-8 md:mt-[100px]  ">
          <p className='lg:text-[56px] text-3xl font-alice leading-normal dark:text-white'>Find Your <span className="text-primary-500">Life Partner</span> With Us</p>
          <p className='text-sm lg:text-[22px] font-lato text-gray-500 leading-9 dark:text-white'>End the struggle of finding a bride or groom. Discover your <br className="hidden md:flex" /> perfect match from the comfort of home. Your ultimate <br className="hidden md:flex" /> destination to find your ideal pertner</p>

          <div className="lg:flex items-center gap-8 ">
            <Link to='/allUser' className='bg-primary-500 rounded-full text-white px-16 py-2 mt-4 md:text-[22px]'>Explore </Link>
            <button onClick={() => window.my_modal_3.showModal()} className='flex justify-center items-center gap-2 mt-4 text-[22px]'>

              <span className="relative flex  justify-center items-center">
                <span className="animate-ping absolute inline-flex h-[80%] w-[80%] rounded-full bg-red-400 opacity-75 duration-1000 md:text-[22xp] "></span>
                <span className="relative inline-flex rounded-full h-[30px] w-[30px] md:h-[48px] md:w-[48px] bg-[#F27373] items-center justify-center"><BsFillPlayFill className=' text-white' /></span>
              </span>
              <span className="text-base md:text-[22px] dark:text-white">How it work </span>
              <dialog id="my_modal_3" className="modal ">
                <form method="dialog" className="modal-box w-11/12 max-w-[860px]">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-2">✕</button>
                  <iframe width="800" height="600" src="https://www.youtube.com/embed/743sfumvFhA?si=KOz4ELJtOHgzsZ7I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </form>
              </dialog>
            </button>
          </div>
        </div>
        {/* image marquee section */}
        <SearchFunction   />
      </div>

      <div className="sm:hidden md:block relative -mt-32  z-10 hidden lg:flex">
        <Marquee speed={20}>
          <img className=' h-[300px] ml-8 rounded-t-md shadow' src={img} alt="" srcSet="" />
          <img className=' h-[300px] ml-8  rounded-t-md shadow' src={img2} alt="" srcSet="" />
          <img className=' h-[300px] ml-8 rounded-t-md shadow' src={img3} alt="" srcSet="" />
          <img className=' h-[300px] ml-8 rounded-t-md shadow' src={img4} alt="" srcSet="" />
          <img className=' h-[300px] ml-8 rounded-t-md shadow' src={img5} alt="" srcSet="" />
          <img className=' h-[300px] ml-8 w-[319px] rounded-t-md shadow' src={img6} alt="" srcSet="" />
        </Marquee>
        <div className="bg-gradient-to-l from-primary-50 to-45% absolute inset-0 z-10"></div>
      </div>
    </div>
  );
};

export default HomeBanner;