import shield from '../../../../assets/home/whyChooseUs/shiled.png'
import man from '../../../../assets/home/whyChooseUs/man.png'
import line from "../../../../assets/Shared/line.png"
const WhyChooseUs = () => {
  return (

    <div className=' bg-opacity-30 mx-auto bg-primary-50 mt-[90px] dark:text-white dark:bg-gray-800  ' >
      <div className="max-w-7xl mx-auto py-[75px] w-[80%]">

        <div className="text-center mb-10" >
          <p className="text-[45px] mb-1 font-alice">Why Choose Us</p>
          <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
          <p className="font-lato md:text-[18px]">
Choose our site for an unparalleled matrimony experience. <br /> We offer a trusted platform, cutting-edge features, and a thriving community dedicated to helping you find your perfect match.</p>
        </div>
        {/* card section */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] md:w-full mx-auto" >

          <div className="hover:scale-[1.009] hover:shadow  rounded-lg border border-gray-200 bg-white duration-150 flex flex-col gap-2 items-center py-7 px-6  dark:bg-gray-500" data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-[50px] mb-2' src={shield} alt="" />
            <p className='font-alice text-2xl text-center'>Assure the Honesty of Profile</p>
            <p className='text-center font-lato'>Explore active profiles by location, community, profession, and more from .</p>
          </div>
          <div className="hover:scale-[1.009] hover:shadow  rounded-lg border border-gray-200 bg-white duration-150 flex flex-col gap-2 items-center py-7 px-6 dark:bg-gray-500 " data-aos="zoom-in" data-aos-duration="1000" >
            <img className='w-[50px] mb-2' src={man} alt="" />
            <p className='font-alice text-2xl text-center'>On-Site Verification</p>
            <p className='text-center font-lato'>Exclusive compilation of profiles authenticated by our agents through in-person visits.</p>
          </div>
          <div className="hover:scale-[1.009] hover:shadow  rounded-lg border border-gray-200 bg-white duration-150 flex flex-col gap-2 items-center py-7 px-6 dark:bg-gray-500"  data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-[50px] mb-2' src={shield} alt="" />
            <p className='font-alice text-2xl text-center'>Managing Privacy</p>
            <p className='text-center font-lato'>Enhance security by limiting unauthorized access to contact information and photos/videos.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WhyChooseUs;