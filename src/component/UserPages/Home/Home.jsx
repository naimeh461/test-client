import { Helmet } from "react-helmet";
import HowItWork from "./HowItWork/HowItWork";
import Gallery from "./gellary/Gallery";
import BestRecommendation from "./BestRecommendation/BestRecommendation";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import HomeBanner from "./HomeBanner/HomeBanner";
import HappyStory from "./HappyStory/HappyStory";
import useMyData from "../../../Hooks/useMyData";
import Service from "../Service/Service";


const Home = () => {
  const [userInfo, refetch] = useMyData();
  if(userInfo?.status === "successful")
  return(
    <><Service></Service></>
    )
  return (

    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Soulmate | Home</title>
    </Helmet>
    <div className=" overflow-x-hidden md:overflow-visible lg:overflow-x-hidden dark:bg-gray-800">
    <HomeBanner></HomeBanner>
    <HowItWork/>
    <WhyChooseUs></WhyChooseUs>
    <BestRecommendation />
    <div className="w-[80%] mx-auto">
      <Gallery/>
      <HappyStory></HappyStory>
    </div>
  

    </div>
  </>
  );
}
export default Home;


