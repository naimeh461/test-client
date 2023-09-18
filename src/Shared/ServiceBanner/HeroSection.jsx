import { Link } from "react-router-dom";
import carousel1 from "../../../../assets/hero carousel/carousel1.png";
import carousel2 from "../../../../assets/hero carousel/carousel2.png";
import carousel3 from "../../../../assets/hero carousel/carousel3.png";
import carousel4 from "../../../../assets/hero carousel/carousel4.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroSection = () => {
  const herodetails =
    <>
      <div className=" text-center lg:text-left ">

        <h1 className="lg:text-4xl xl:text-5xl text-[#000000] font-bold leading-tight text-xl md:text-2xl"><span className="red-text">Discover Your Life Partner</span> from the Comfort of Home on the Ultimate Platform</h1>
        <p className="text-sm lg:text-lg font-medium mt-5 lg:w-[70%]  mb-5 text-[#6d6969] ">End the struggle of finding a bride or groom. Discover your perfect match from the comfort of home. Your ultimate destination to find your ideal partner</p>

        <div className="flex justify-center lg:justify-start gap-3 lg:text-left   mt-5">
          <button >
            <Link to="signup/step-1">
              <p className=" red-primary text-white p-3 px-4 text-base lg:text-xl font-semibold rounded-xl hover:bg-[#bc1828] ">
                Register
              </p>
            </Link>
          </button>
          <button >
            <Link to="/">
              <p className="  text-[#FF725E] p-2 px-3 text-base lg:text-xl  font-semibold rounded-xl outline outline-offset-2 outline-4 outline-[#FF725E] hover:outline-[#bc1828]">
                Learn more
              </p>
            </Link>
          </button>
        </div>

      </div>
    </>
  return (
    <div className="secondary lg:mt-10">

      <div className="w-[80]% ">
      <Carousel  showThumbs={false} className="  gap-8 flex justify-center items-center flex-col-reverse  mx-auto lg:-mt-10"swipeable={true} autoFocus={false} emulateTouch={true} showStatus={false} autoPlay={true} infiniteLoop={true} showArrows={false}>
      <div className="flex justify-around items-center flex-col-reverse lg:flex-row  mx-auto lg:w-[90%] px-10 pb-20 md:pb-10  xl:pb-0 xl:p-0 ">
          <div className="md:w-1/2 text-center md:text-left">
            {herodetails}
          </div>
          <div className="w-[50%] md:w-1/3" >
            <img src={carousel1} alt="Hero image" className="" />
          </div>
        </div>

        <div className=" gap-8 flex justify-around items-center flex-col-reverse lg:flex-row  mx-auto lg:w-[90%] px-10 xl:p-0 ">
          <div className="md:w-1/2 text-center md:text-left">
            {herodetails}
          </div>
          <div className=" w-[50%] md:w-1/3" >
            <img src={carousel2} alt="Hero image" className="" />
          </div>
        </div>
       
        <div className=" gap-8 flex justify-around items-center flex-col-reverse lg:flex-row  mx-auto lg:w-[90%] px-10 xl:p-0 ">
          <div className="md:w-1/2 text-center md:text-left">
            {herodetails}
          </div>
          <div className=" w-[50%] md:w-1/3" >
            <img src={carousel3} alt="Hero image" className="" />
          </div>
        </div>
        <div className=" gap-8 flex justify-around items-center flex-col-reverse lg:flex-row  mx-auto lg:w-[90%] px-10 xl:p-0 ">
          <div className="md:w-1/2 text-center md:text-left">
            {herodetails}
          </div>
          <div className=" w-[50%] md:w-1/3" >
            <img src={carousel4} alt="Hero image" className="" />
          </div>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;

