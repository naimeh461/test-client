import {
  AiOutlineCalendar,
  AiFillHeart,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const BlogDetails = () => {
  const data = useLoaderData();
  const [latests, setLatests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://soulmates-server.vercel.app/blogsLatest")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLatests(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dark:bg-gray-400">
      <div className="">
        <div className="ms-20 lg:ms-96 lg:mx-10 mx-20 my-8 lg:my-5 lg:w-1/2 w-full">
          <img
            className="lg:h-[500px] md:h-[400px] h-full w-48 md:w-[700px] lg:w-full  object-cover"
            src={data.image}
            alt=""
          />
        </div>
        <div className="m-55 p-7 lg:m-0 space-y-5">
          <Fade>
            <h1 className="text-3xl font-medium font-serif">{data.title}</h1>
          </Fade>
          <p className="text-slate-600 dark:text-gray-100">{data.details}</p>
          <div className="lg:flex text-xl ">
            <p className="font-light me-2 dark:text-gray-200">
              <AiOutlineCalendar className="inline-block mb-1" />
              {data.date}{" "}
            </p>
            <p>
              | <AiFillHeart className="inline-block text-red-600" />{" "}
              {data.react}
            </p>
          </div>
        </div>
      </div>
      {/* Latest Blog Slide */}

      <div className=" mt-20 ms-16">
        <h1 className="text-5xl font-serif">Latest Blogs</h1>
      </div>
      <div>
        <Swiper
         slidesPerView={4}
         spaceBetween={30}
          watchSlidesProgress={true}
          className="mySwiper "
        >
          {latests?.map((latest) => (
            <SwiperSlide key={latest._id} className="text-black bg-gray-200 ">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="h-[300px] w-full object-cover object-center">
                  <img
                    src={latest.image}
                    className="h-full w-full object-cover"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body dark:bg-gray-300">
                  <h2 className="card-title text-black">{latest.title}</h2>
                  <p className="text-xs text-slate-600">{latest.details.slice(0, 150)}
                  <button><Link to={`/blogDetails/${data._id}`} className="text-red-600 font-semibold text-sm ms-1">Read more</Link></button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogDetails;
