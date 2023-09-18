import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";

const UserDetails = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`https://soulmates-server.vercel.app/userStats/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className=" bg-[#f8e5e9] py-14 text-center text-[#cc294c] font-semibold text-3xl">
          Welcome Back {user?.displayName}!
        </h1>
      </div>
      <div className="flex justify-around my-10">
        <div className=" ml-5">
          <div className="stats stats-vertical shadow">
            <div className="stat flex items-center justify-between">
              <h1 className="stat-title font-semibold text-lg">Package</h1>
              <p className="stat-desc font-semibold text-lg">
                {datas.package ? datas.package.order.plan : "Free"}
              </p>
            </div>
            <div className="stat flex items-center justify-between">
              <div className="">
                <div className="stat-title">Blogs</div>
                <div className="stat-value text-2xl font-bold">
                  {datas.blog ? datas.blog : 0}
                </div>
              </div>
              <progress
                className="progress progress-accent w-56"
                value={datas.blog ? datas.blog : 0}
                max={datas.blogs ? datas.blogs : 0}
              ></progress>
            </div>

            <div className="stat flex items-center justify-between">
              <div className="">
                <div className="stat-title">Orders</div>
                <div className="stat-value text-2xl font-bold">
                  {datas.order ? datas.order : 0}
                </div>
              </div>
              <progress
                className="progress progress-accent w-56"
                value={datas.order ? datas.order : 0}
                max={datas.subscription ? datas.subscription : 0}
              ></progress>
            </div>
            <div className="stat flex items-center justify-between">
              <div className="">
                <div className="stat-title">BookedService</div>
                <div className="stat-value text-2xl font-bold">
                  {datas.bookedService ? datas.bookedService : 0}
                </div>
              </div>
              <progress
                className="progress progress-accent w-56"
                value={datas.bookedService ? datas.bookedService : 0}
                max={datas.bookedServices ? datas.bookedServices : 0}
              ></progress>
            </div>
          </div>
        </div>
        {/* total number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5">
            <div className="stat flex items-center justify-between">
              <div className="stat-title">Total Blogs</div>
              <div className="stat-value text-2xl font-semibold">{datas? datas.blogs:0}</div>
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5">
            <div className="stat flex items-center justify-between">
              <div className="stat-title">Total Orders</div>
              <div className="stat-value text-2xl font-semibold">{datas.subscription ? datas.subscription : 0}</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5">
            <div className="stat flex items-center justify-between">
              <div className="stat-title"> Total Booked Services</div>
              <div className="stat-value text-2xl font-semibold">{datas.bookedServices ? datas.bookedServices : 0}</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5">
            <div className="stat flex items-center justify-between">
              <div className="stat-title">Total CoupleDate</div>
              <div className="stat-value text-2xl font-semibold">{datas?datas.coupleDate:0}</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </div>
          {/* end */}
        </div>
    </div>
    </div>
  );
};

export default UserDetails;
