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

      <PhotoGallerySection />
    </div>
  );
};

export default Gallery;

export const PhotoGallerySection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div className="col-span-2 flex flex-col gap-3">
        <PhotoContainer imgStyle='h-[363px] w-full object-cover' img={img1} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <PhotoContainer img={img2} />
          <PhotoContainer img={img3} />

        </div>
      </div>
      <div className="flex flex-col gap-3">
        <PhotoContainer imgStyle='h-[282px] object-cover w-full' img={img4} />
        <PhotoContainer imgStyle='h-[282px] object-cover w-full' img={img5} />
      </div>
    </div>
  );
}

export const PhotoContainer = ({ img, imgStyle }) => {

  return (
    <div className="relative rounded-2xl overflow-hidden group">
      <img className={imgStyle ? imgStyle : "h-full w-full"} src={img} alt="" />
      <div className="absolute flex justify-between bg-slate-800 w-full  bg-opacity-50 group-hover:bottom-0 -bottom-24 px-5 py-4 duration-300">
        <div className="">
          <p className=' text-white font-alice text-[24px]'>Vysakh & Pooja</p>
          <p className='font-lato text-[18px] text-white'>Khulna SoulMate</p>
        </div>
        <button className='text-white border border-white px-10 py-4 rounded-full text-[18px] font-lato hidden '>View More</button>
      </div>
    </div>
  )
}