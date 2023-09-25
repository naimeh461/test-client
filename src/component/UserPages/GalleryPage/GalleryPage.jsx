import  { useEffect, useState } from 'react';
import Header from '../../../Shared/Header/Header';

import { PhotoContainer, PhotoGallerySection } from '../Home/gellary/Gallery';
import { useParams } from 'react-router-dom';

const GalleryPage = () => {
  const params = useParams();
  const [happyStories, setHappyStories] = useState([]);
  console.log(happyStories)
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then(res => res.json())
      .then(data => setHappyStories(data));

  }, [params.id])
  const getName = (coupleName) => {
    const name = coupleName.split('and')
    return name
  }

  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Header title="Our Sweet Couples Gallery" text=' Discover the beautiful love stories of couples who found their perfect match through our platform. Join us in celebrating their journey to happiness and everlasting love.' />

      <div className="">
        <PhotoGallerySection />

        {/* dynamic data goes here */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-[12px] mb-4">
          {
            happyStories.map((data, index) => <PhotoContainer maleName={getName(data.coupleName)[0]} femaleName={getName(data.coupleName)[1]} key={index} img={data.imageURL} imgStyle='w-full h-full object-cover' />)
          }
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;