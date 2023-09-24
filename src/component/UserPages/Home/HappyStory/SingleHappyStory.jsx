
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const SingleHappyStory = () => {
  const params = useParams();
  const [happyStories, setHappyStories] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/reviews/${params.id}`)
          .then(res => res.json())
          .then(data => setHappyStories(data));
  }, [params.id])

  const { coupleName, imageURL,review ,date } = happyStories;

    return (
      <div className="card lg:card-side bg-base-100 shadow-xl  dark:bg-gray-800">
      <figure><img src={imageURL} alt="Album"/></figure>
      <div className="card-body flex flex-col justify-center items-center text-center dark:text-white">
        <h2 className="card-title">{coupleName}</h2>
        <p>{review}</p>
        <div className="card-actions justify-end">
          {date}
        </div>
      </div>
    </div>
    
    );
};

export default SingleHappyStory;