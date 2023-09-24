import { NavLink, Outlet, useLocation } from "react-router-dom";
import payment from "../../assets/payment/payment.jpg";

const PaymentPage = () => {
  const url = useLocation();
  const searchParams = new URLSearchParams(url.search);
  const isStripeActive = url.pathname.includes("/payment/stripe");


  return (
    <div className=" max-w-7xl mx-auto ">
      <div className="max-w-[680px]  mx-auto mt-12 mb-8">
        <p className="text-[42px] font-alice text-[#272932] text-center dark:text-white">
          We&rsquo;ve Got The
          <span className="text-[#0F7173] dark:text-cyan-300">
            Perfect Plan
          </span>
          That is Finding for
          <span className="text-[#0F7173] dark:text-cyan-300">Your Need</span>
        </p>
        <p className="text-[#3E4A5B] font-lato text-center px-8 my-[18px] dark:text-gray-200">
        Unlock premium features and enhance your matrimony experience. Choose a plan that suits you best and start your journey to finding your life partner today.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 my-6 ">
        <div className="">
          <img
            className="h-[700px] w-full rounded-2xl brightness-50"
            src={payment}
            alt=""
          />
        </div>
        <div className="w-full bg-slate-50 p-2 rounded-md dark:bg-gray-400">
          <h3 className="dark:text-white text-center my-2 font-bold text-red-500">
            Select Your Favourite Payment Method
            <hr className="my-4" />
          </h3>
          <div className="flex w-full">
            <NavLink
             to={`/payment/stripe?${searchParams}`}
             isActive={() => isStripeActive}
             className={({ isActive }) =>
               isActive
                 ? "w-full border text-center p-4 link-shadow dark:text-cyan-200"
                 : "w-full border text-center p-4 dark:text-cyan-200"
             }
            >
              Stripe
            </NavLink>
            <NavLink
              to={`/payment/sslCommerz?${searchParams}`}
              className={({ isActive }) =>
                isActive
                  ? " w-full border text-center p-4 link-shadow dark:text-cyan-200"
                  : "w-full border text-center p-4 dark:text-cyan-200"
              }
            >
              sslCommerz
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
