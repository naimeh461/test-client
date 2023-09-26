import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import LeftCard from "./LeftCard";
import LatestBlog from "./LatestBlog";
import Loading from "../../../Shared/Loading";
import { Helmet } from "react-helmet";
import home from '../../../assets/plan/home.svg';
import scop from '../../../assets/plan/scop.svg';
import couple from '../../../assets/other/blogCouple.png';
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [react, setReact] = useState(false);

  console.log(blogData, react)
  // fetch Blog data
  useEffect(() => {
    fetch("https://soulmates-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogData(data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
        setLoading(false);
        // Handle the error or set blogData to a default value (e.g., [])
        setBlogData([]);
      });
  }, [react]);

  const handleShowBlogByCategory = (type) => {
    fetch(`https://soulmates-server.vercel.app/blogs/type/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogData(data);
      })
      .catch((error) => {
        console.error('Error fetching blog data by category:', error);
        setLoading(false);
        // Handle the error or set blogData to a default value
        setBlogData([]);
      });
  }


  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="mb-32">

      {/* Title */}
      <Helmet>
        <title>Soulmate | Blog</title>
      </Helmet>

      <div className="bg-[#FBF2E4] h-[235px] ">
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
          <div className="ms-4 text-left">
            <p className="font-alice text-[28px] text-[#272932]">Love Stories Unveiled, Advice Shared</p>
            <p className="text-[#3E4A5B]">Explore our blog for heartwarming love stories and expert relationship advice,<br />  guiding you on your path to a lifelong connection filled with love and joy. </p>
            <p className="flex text-[#536279] font-lato pt-7"><img className="mr-1" src={home} alt="" /> <Link to='/'>Home</Link> <span className="mx-2">/</span><img className="mr-1" src={scop} alt="" /> <Link to='/plan'>Plan</Link></p>
          </div>
          <img className="h-full hidden lg:block" src={couple} alt="" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center gap-16 dark:text-gray-200 ">
        <div className="lg:w-2/3  lg:mx-5 mx-2 w-full lg:ml-28 mt-10">

          <h1 className="text-4xl font-semibold mb-8 font-serif text-center ">ALL BLOG</h1>
          <div className="grid xl:grid-cols-2 gap-5">
            {Array.isArray(blogData) && blogData.length > 0 ? (
              blogData.map((data) => (
                <BlogCard key={data._id} data={data} setReact={setReact} react={react}></BlogCard>
              ))
            ) : (
              <p>No blog data available.</p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:mr-28  mt-10">

          <div className="tags-section mb-5">
            <div className="border-b-2 border-red-700 py-2">
              <h3 className="font-medium text-3xl font-serif">Tags</h3>
            </div>
            <div className="my-3">
              <button onClick={() => handleShowBlogByCategory('advice')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Advice</button>
              <button onClick={() => handleShowBlogByCategory('engagement')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Engagement</button>
              <button onClick={() => handleShowBlogByCategory('wedding')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Wedding</button>
            </div>
            <div>
              <button onClick={() => handleShowBlogByCategory('date')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Dates</button>
              <button onClick={() => handleShowBlogByCategory('photography')} className="btn btn-sm rounded-xl bg-slate-200 ms-2">Photography</button>
            </div>
          </div>
          <LeftCard></LeftCard>
          <LatestBlog></LatestBlog>
        </div>
      </div>
    </div>
  );
};

export default Blog;
