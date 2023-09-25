import { Link } from 'react-router-dom'
import img1 from '../../../../assets/galleryPhotos/1.png'
import img2 from '../../../../assets/galleryPhotos/2.png'
import img3 from '../../../../assets/galleryPhotos/3.png'
import img4 from '../../../../assets/galleryPhotos/4.png'
import img5 from '../../../../assets/galleryPhotos/5.png'
import line from "../../../../assets/Shared/line.png"

const Gallery = () => {
  return (
    <div className='max-w-7xl mx-auto'>

      <div className='text-center'>
        <h1 className="text-[45px] mb-1 font-alice dark:text-white">
          Love Stories Unveiled
        </h1>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        <p className="text-[18px]  font-lato text-center  max-w-[685px] mx-auto leading-[27px] mb-20 dark:text-white">
          Explore real-life love tales from couples who found their <br /> soulmates, inspiring your own romantic journey
        </p>
      </div>

      <PhotoGallerySection isHome={true} />
    </div>
  );
};

export default Gallery;

export const PhotoGallerySection = ({isHome}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div className="col-span-2 flex flex-col gap-3">
        <PhotoContainer location='London' maleName='James' femaleName='Amelia' isHome={isHome} imgStyle='h-[363px] w-full object-cover' img={img1} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <PhotoContainer location='Mumbai' maleName='Benjamin' femaleName='Sophia' isHome={isHome} img={img2} />
          <PhotoContainer location="Barisal" maleName='Jack' femaleName='Ava' isHome={isHome} img={img3} />

        </div>
      </div>
      <div className="flex flex-col gap-3">
        <PhotoContainer location='Dhaka' maleName='Ethan' femaleName='Sofia' isHome={isHome} imgStyle='h-[282px] object-cover w-full' img={img4} />
        <PhotoContainer location='Khulna' maleName='Jackson' femaleName='Elizabeth' isHome={isHome} imgStyle='h-[282px] object-cover w-full' img={img5} />
      </div>
    </div>
  );
}

export const PhotoContainer = ({ img, imgStyle, isHome, maleName, femaleName, location }) => {

  return (
    <div className="relative rounded-2xl overflow-hidden group">
      <img className={imgStyle ? imgStyle : "h-full w-full"} src={img} alt="" />
      <div className="absolute flex justify-between items-center bg-slate-800 w-full  bg-opacity-50 group-hover:bottom-0 -bottom-24 px-5 py-4 duration-300">
        <div className={isHome && 'hidden md:block'}>
          <p className=' text-white font-alice text-[24px]'>{maleName} & {femaleName}</p>
          <p className='font-lato text-[18px] text-white'>{location} SoulMate</p>
        </div>
        {isHome && <Link to='/galleryPage' className='text-white border border-white rounded-full text-[18px] font-lato h-12 px-4 flex justify-center items-center pb-1 mx-auto md:mx-0'>View More</Link>}
      </div>
    </div>
  )
}