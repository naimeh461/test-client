import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const AdminHome = () => {
  const data = [
    {
      name: 'February',
      Sell: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'March',
      Sell: 2400,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'April',
      Sell: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'May',
      Sell: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'june',
      Sell: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'July',
      Sell: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'August',
      Sell: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/adminStats")

      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, [data._id]);
  const doller = datas.revenue / 100;
  console.log(datas);

  
  

  return (
    <div className="py-10 w-[90%] mx-auto ">
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5  ">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={datas.user}
                text={`${datas.user ? datas.user / 100 : "0"}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `(#1E3A8A , ${datas.user / 100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="stat-title">User</div>
          <div className="stat-value">{datas.user ? datas.user : "0"}</div>
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={datas.blog}
                text={`${datas.blog ? datas.blog / 100 : "0"}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `(#1E3A8A , ${datas.blog / 100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="stat-title">Blog</div>
          <div className="stat-value">{datas.blog ? datas.blog : "0"}</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={doller/100}
                text={`${doller ? doller / 100 : "0"}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `(#1E3A8A , ${ doller/100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${doller ? doller : "0"}</div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={datas.subscription}
                text={`${datas.subscription ? datas.subscription / 100 : "0"}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `(#1E3A8A , ${datas.subscription / 100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="stat-title">Subscription</div>
          <div className="stat-value">
            {datas.subscription ? datas.subscription : "0"}
          </div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={datas.servicesPackage}
                text={`${datas.servicesPackage ? datas.servicesPackage / 100 : "0"}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `(#1E3A8A , ${datas.subscription / 100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="stat-title">Total Services Booked </div>
          <div className="stat-value">
            {datas.servicesPackage ? datas.servicesPackage : "0"}
          </div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={datas.coupleDate}
                text={`${datas.coupleDate ? datas.coupleDate / 100 : "0"}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `(#1E3A8A , ${datas.coupleDate / 100})`,
                  textColor: "#3e98c7",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="stat-title">Couple Date</div>
          <div className="stat-value">
            {datas.coupleDate ? datas.coupleDate : "0"}
          </div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
      </div>



      
    </div>
{/* Chart */}
    <div style={{ width: '100%', height: 400 }} className="mt-10 shadow mb-30 pb-10 mb-10">
      <div className="flex justify-between px-4 py-2">
        <div>
          <h1 className="font-bold text-xl mb-2">Monthly Revenue</h1>
          <p className="mb-2">Total Revenue This Month</p>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">$3490</h1>
          <p className="mb-2">+1.5% then Last Month</p>
        </div>
      </div>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Sell" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminHome;