
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../../../Shared/Header/Header';


const AllHappyStory = () => {
  const params = useParams();
  const [happyStories, setHappyStories] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/reviews`)
          .then(res => res.json())
          .then(data => setHappyStories(data));
  }, [params.id])

console.log(happyStories);
    return (
      <div>
<Header title="What Our Members Say" text='   Read the heartwarming testimonials from our satisfied members who found their life partners through our platform. Join our community and start your journey to love and companionship today.' />
<div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
      {happyStories.map((data) => (
        <div key={data._id} className="card-wrapper ">
          <div className="card bg-base-100 shadow-xl h-full  dark:text-white dark:bg-gray-500" >
            <figure className="px-10 pt-10">
              <img src={data.imageURL} alt="Couple" className="rounded-xl w-full h-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.coupleName}</h2>
              <p>{data.review}</p>
              {data.date?(<div className="card-actions justify-end">Date: 
                {data.date}
              </div>) : <></>}
            </div>
          </div>
        </div>
      ))}
    </div>

      </div>
    );
};

export default AllHappyStory;