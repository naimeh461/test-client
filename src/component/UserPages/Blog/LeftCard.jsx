import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const LeftCard = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch(`https://soulmates-server.vercel.app/PopularBlog`)
      .then(res => res.json())
      .then(data => {
        setPopular(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  console.log(popular)
  return (
    <div>
      <h1 className="text-3xl font-serif font-medium my-4">Popular Blogs</h1>
      <div className="h-[600px] w-full overflow-hidden overflow-y-auto hide-scrollbar">
        {
          popular?.map(pData => 

            <div className="border-2 p-2 mb-3 grid grid-cols-2" key={pData._id}>

              <div className="">
                <img className="h-32 w-full lg:w-[300px]  object-cover object-center" src={pData.image} alt="" />
              </div>

              <div className="px-2">

                <h2 className="text-lg font-serif font-normal">{pData.title}</h2>
                <div className="flex">
                  <button className="text-lg mb-2 dark:text-gray-100"><AiOutlineCalendar /></button>
                  <p className="mb-2 text-sm text-slate-600 dark:text-gray-300">{pData?.date}</p>
                </div>
                <div className="flex ms-0 lg:ms-32 text-red-600">
                  <Link to={`/blogDetails/${pData._id}`}><p >View</p></Link>
                  <AiOutlineArrowRight className="mt-1" />
                </div>
              </div>
            </div>
         )
        }
      </div>
    </div>
  );
};

export default LeftCard;
