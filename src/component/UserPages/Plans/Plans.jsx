import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import couple from "../../../assets/plan/couple.png";
import tick from "../../../assets/plan/tick.svg";
import cross from "../../../assets/plan/cross.svg";
import loyal from "../../../assets/plan/vip-royal.svg";
import monitor from "../../../assets/plan/monitor-flash.svg";
import plant from "../../../assets/plan/organic-plant.svg";
import bg from "../../../assets/plan/bg.svg";
import bg1 from "../../../assets/plan/1bg.svg";
import bg3 from "../../../assets/plan/3bg.svg";
import pattern from "../../../assets/plan/pattern.svg";
import home from "../../../assets/plan/home.svg";
import scop from "../../../assets/plan/scop.svg";

const Plans = () => {
  const lovebirds = {
    plan: "lovebirds",
    price: 1000,
  };
  const lovebirdsData = encodeURIComponent(btoa(JSON.stringify(lovebirds)));

  const premium = {
    plan: "premium",
    price: 4900,
  };
  const premiumData = encodeURIComponent(btoa(JSON.stringify(premium)));

  const ultimate = {
    plan: "ultimate",
    price: 9900,
  };
  const ultimateData = encodeURIComponent(btoa(JSON.stringify(ultimate)));

  return (
    <div className="">
      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Services</title>
      </Helmet>

      {/* banner */}
      <div className="w-full h-[350px] bg-[#fdeaea] overflow-hidden relative">
        <div className=" flex h-full ">
          <img className="h-full" src={pattern} alt="" />
          <img className="h-full" src={pattern} alt="" />
          <img className="h-full" src={pattern} alt="" />
          <img className="h-full" src={pattern} alt="" />
          <img className="h-full" src={pattern} alt="" />
          <img className="h-full" src={pattern} alt="" />
        </div>
        <div className="max-w-7xl mx-auto flex justify-between h-full items-center absolute inset-0">
          <div className="ms-4 text-left">
            <p className="font-alice text-[28px] text-[#272932]">
              &ldquo;Unlock Love&rsquo;s Potential with Premium Plans!&rdquo;
            </p>
            <p className="text-[#3E4A5B]">
              Upgrade to Find Your Forever, <br /> Exclusive Benefits Await
            </p>
            <p className="flex text-[#536279] font-lato pt-7">
              <img className="mr-1" src={home} alt="" />
              <Link to="/">Home</Link> <span className="mx-2">/</span>
              <img className="mr-1" src={scop} alt="" />
              <Link to="/plans">Plan</Link>
            </p>
          </div>
          <img
            className="h-96
           hidden md:block lg:block "
            src={couple}
            alt=""
          />
        </div>
      </div>
      <div className="max-w-[680px]  mx-auto mt-12 mb-8">
        <p className="text-[42px] font-alice text-[#272932] text-center dark:text-white">
          We&rsquo;ve Got The
          <span className="text-[#0F7173]">Perfect Plan</span>
          That is Finding for <span className="text-[#0F7173]">Your Need</span>
        </p>
        <p className="text-[#3E4A5B] font-lato text-center px-8 my-[18px] dark:text-gray-200 text-xl">
          &ldquo;Discover the path to lasting love with our premium subscription
          plans. Unleash a world of exclusive benefits and enhance your journey
          towards finding your soulmate.&rdquo;
        </p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto font-lato py-8 gap-7  ">
        {/* card */}
        <div className="border border-[#E1E5EA] rounded-2xl hover:shadow-2xl duration-500 overflow-hidden dark:bg-gray-600">
          <Header
            bg={bg1}
            title="Lovebirds"
            titleImg={plant}
            price="10"
            profileCount="10"
          />
          <div className="px-5 pt-6">
            <p className="text-[24px] font-alice mb-[18px] dark:text-white">
              Lite Incudes:
            </p>
            <Content isCross={true} text="2 Premium Profiles view /mo" />
            <Content text="Free user profile can view" />
            <Content isCross={true} text="5 Premium Profiles view /mo" />
            <Content isCross={true} text="Send interest" />
            <Content isCross={true} text="Start Chat" />
          </div>
          <LinkBtn plan={lovebirdsData} />
        </div>

        {/* card */}
        <div className="border border-[#E1E5EA] rounded-2xl hover:shadow-2xl duration-500 overflow-hidden dark:bg-gray-600">
          <Header
            bg={bg}
            isPopular={true}
            title="Premium"
            titleImg={monitor}
            price="49"
            profileCount="30"
          />
          <div className="px-5 pt-6">
            <p className="text-[24px] font-alice mb-[18px] dark:text-white">
              Lite Incudes:
            </p>
            <Content text="6 Premium Profiles view /mo" />
            <Content text="Free user profile can view" />
            <Content text="5 Premium Profiles view /mo" />
            <Content text="Send interest" />
            <Content text="Start Chat" />
          </div>
          <LinkBtn plan={premiumData} />
        </div>

        {/* card */}
        <div className="border border-[#E1E5EA] rounded-2xl hover:shadow-2xl duration-500 overflow-hidden dark:bg-gray-600">
          <Header
            bg={bg3}
            title="Ultimate "
            titleImg={loyal}
            price="99"
            profileCount="70"
          />
          <div className="px-5 pt-6">
            <p className="text-[24px] font-alice mb-[18px] dark:text-white">
              Lite Incudes:
            </p>
            <Content text="2 Premium Profiles view /mo" />
            <Content text="Free user profile can view" />
            <Content text="5 Premium Profiles view /mo" />
            <Content text="Send interest" />
            <Content text="Start Chat" />
          </div>
          <LinkBtn plan={ultimateData} />
        </div>
      </div>
    </div>
  );
};

export default Plans;

const Header = ({ isPopular, title, titleImg, price, profileCount, bg }) => {
  return (
    <div className="relative">
      <img className="absolute -z-10 inset-0" src={bg} alt="" />
      <div className="px-5 pt-9">
        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <img className="w-9 h-9" src={titleImg} alt="" />
            <p className="text-[36px] font-alice dark:text-white">{title}</p>
          </div>
          <p
            className={
              isPopular
                ? "text-[#272932] dark:text-white py-[13px] px-[22px] border rounded-full font-lato border-[#0F7173]"
                : "text-[#272932] py-[13px] px-[22px] border rounded-full font-lato border-[#0F7173] hidden "
            }
          >
            POPULAR
          </p>
        </div>
        <p className="text-[#3E4A5B] font-lato text-[22px] dark:text-white">
          Perfect to get Started
        </p>
        <div className="flex items-end gap-2">
          <p className="text-[78px] font-alice text-[#272932] dark:text-pink-500">
            <span className="text-[#A9ACBC]">$</span>
            {price}
          </p>
          <p className="text-[#3E4A5B] mb-7 dark:text-white">
            {profileCount} profile/month
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

const Content = ({ isCross, text }) => {
  return (
    <div className="flex items-center gap-2 mb-4 ">
      <img className="h-[22px] w-[22px]" src={isCross ? cross : tick} alt="" />
      <p className="text-[18px] font-lato text-[#3E4A5B] dark:text-white">
        {text}
      </p>
    </div>
  );
};

const LinkBtn = ({ plan }) => {
  return (
    <div className="px-5 pb-5 pt-6 flex">
      <Link
        className="w-full py-4 bg-primary-500 text-center font-bold text-[22px] text-white rounded-full "
        to={`/payment?plan=${plan}`}
      >
        Get Started
      </Link>
    </div>
  );
};