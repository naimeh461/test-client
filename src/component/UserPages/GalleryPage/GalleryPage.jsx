import React from 'react';
import Header from '../../../Shared/Header/Header';

import img1 from '../../../assets/galleryPhotos/1.png'
import img2 from '../../../assets/galleryPhotos/2.png'
import img3 from '../../../assets/galleryPhotos/3.png'
import img4 from '../../../assets/galleryPhotos/4.png'
import img5 from '../../../assets/galleryPhotos/5.png'
import { PhotoContainer, PhotoGallerySection } from '../Home/gellary/Gallery';

const imgs = [
  'https://images.unsplash.com/photo-1634729108630-543394c7c2de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  'https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80',
  'https://images.unsplash.com/photo-1634729108541-516d16ddceec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1620315472787-52921e5f88a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1489094889106-39069373d6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
  'https://images.unsplash.com/photo-1525206809752-65312b959c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',

]


const GalleryPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Header title="Our Sweet Gallery" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt iure adipisci harum minima excepturi.' />
      <div className="">
        <PhotoGallerySection />

        {/* dynamic data goes here */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-[12px] mb-4">
          {
            imgs.map((img, index) => <PhotoContainer key={index} img={img} imgStyle='w-full h-full object-cover' />)
          }
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;