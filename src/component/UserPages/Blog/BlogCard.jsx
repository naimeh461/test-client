import { Link } from "react-router-dom";

import {motion, AnimatePresence} from 'framer-motion'

import { AiOutlineHeart, AiFillHeart, AiOutlineCalendar , AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from "react";




const BlogCard = ({ data, react, setReact }) => {
const [love, setLove] = useState(false);
  const handleReactInc = id => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setReact(!react)
        }
      })
  }
  const handleReactDec = id => {
    fetch(`http://localhost:5000/blogss/${id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setReact(!react)
        }
      })
  }

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      layout
    >
      <AnimatePresence >
      <div className="card h-full card-compact w-full bg-base-200 shadow-xl mb-10 relative dark:bg-gray-500">
        <figure>
          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-80 object-cover "
          />
        </figure>
        <div className="bg-black h-1/2 text-white bg-opacity-25 opacity-0 hover:opacity-100 rounded-2xl absolute inset-4 inset-y-30 mb-72">
          <div className=" flex justify-center mt-36">
           <Link to={`/blogDetails/${data._id}`}><button id="text-shadow" className="text-2xl">View Details </button></Link>
            <AiOutlineArrowRight className="mt-1 text-2xl"/>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title font-serif">{data?.title}</h2>

          <div className="flex justify-between">
            <div className="flex text-xl text-red-600 ">
              {
                love ? <button onClick={() => handleReactDec(data?._id)}  className="text-2xl"><AiFillHeart onClick={() => setLove(!love)} /></button> : <button onClick={() => handleReactInc(data?._id)} className="text-2xl"><AiOutlineHeart onClick={() => setLove(!love)} /></button>
              }
              <p className="font-medium">{data?.react}</p>
            </div>
            <div className="flex">
              <button className="text-lg mb-2"><AiOutlineCalendar /></button>
              <p className="font-medium">{data?.date}</p>
            </div>
          </div>

          <p className="text-xs lg:text-sm xl:text-base py-3 text text-[#728483] text-clip text dark:text-gray-100">{data?.details < 200 ? <>{data.details}</> :
            <>{data?.details.slice(0, 150)}... </>} <button><Link to={`/blogDetails/${data._id}`} className="text-red-600 font-semibold">Read more</Link></button> </p>
        </div>
      </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogCard;
