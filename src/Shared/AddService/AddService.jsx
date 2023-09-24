import Swal from 'sweetalert2';
import imgService from "../../assets/admin/Banner (2).png"
import photoService from "../../assets/Dashboard/aa-01.png"
import HotelService from "../../assets/Dashboard/hotel-01.png"
import cateringService from "../../assets/Dashboard/caterring_service-.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFilePlusFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiPlus, BiSolidPlusCircle } from 'react-icons/bi';
const AddService = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const handleService = event => {
    event.preventDefault();
    const form = event.target;

    const serviceName = form.serviceName.value
    const servicePrice = form.servicePrice.value
    const imgLink = form.imgLink.value
    const serviceCategory = form.serviceCategory.value
    const serviceDes = form.serviceDes.value
    // provider
    const providerName = form.providerName.value
    const providerEmail = form.providerEmail.value
    const providerLink = form.providerLink.value
    const data = {
      name: serviceName,
      description: serviceDes,
      price: servicePrice,
      provider: {
        name: providerName,
        contact: providerEmail,
        portfolio: providerLink
      },
      image: imgLink,
      category: serviceCategory
    }
    console.log(data)

    fetch('http://localhost:5000/service', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for sharing you story',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  return (
    <div className='container flex flex-col min-h-screen my-16'>
      <div className='flex-grow'>
        <div className='w-[94%] h-[200px] mx-auto relative flex  items-center'>
          <img src={imgService} alt="" className='w-full h-full absolute top-0 left-0 object-cover rounded-xl' />
          {/* Text */}
          <div className="text-center p-8 relative z-10  ">
            <p className='lg:text-[50px] text-3xl font-lato text-white text-left'>Add Services</p>
            <p className='text-sm lg:text-[16px] font-lato text-gray-400 leading-7 text-left mt-4'>Empower Your Platform with an Abundant Tapestry of Services <br /> Where Every Addition Enriches User Experience</p>
          </div>
        </div>
        <div className='mt-20 mb-5 w-[90%]'>
          <h2 className='text-3xl font-alice ml-12'>Add Services</h2>
        </div>
        <div className='flex justify-around gap-10 mx-auto    w-[94%]'>
          <div className="flex gap-3  rounded-xl bg-base-100 shadow-xl">
            <figure><img src={photoService} alt="Album" className=' object-cover h-full rounded-s-xl ' /></figure>
            <div className="flex flex-col justify-center ">
              <h2 className="card-title p-2 font-lato">Photo Service</h2>
              <p className='p-2 text-sm text-gray-500'>Empower Your Portfolio Admin Panel for Adding Photo Services</p>
              <div className="card-actions justify-end p-4 ">
                <button className="btn bg-[#080373] text-white w-full mt-auto rounded-full relative -bottom-8" onClick={() => setShowModal1(true)}>Create Now <BiSolidPlusCircle className='text-xl'></BiSolidPlusCircle></button>
              </div>
            </div>
          </div>
          {showModal1 ? (
            <>

              <form onSubmit={handleService}>
                <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
                  <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
                    <h2 className='text-2xl  font-alice text-center font-semibold'>Photo Service</h2>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-2" onClick={() => setShowModal1(false)}>✕</button>
                    <div className='flex justify-center items-center gap-5'>
                      <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Service Name</label>
                        <input name='serviceName' type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Service Name" required />
                      </div>
                      <div className="my-6 w-full">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Service Price</label>
                        <input name='servicePrice' type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Service price" required />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Service Description</label>
                      <textarea name='serviceDes' id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your service description here..." required></textarea>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 ">Image Link</label>
                      <input name='imgLink' type="text" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Image Link" required />
                    </div>

                    {/* provider info */}
                    <div className='bg-gray-50 rounded-xl '>
                      <div className='p-3 '>
                        <h1 className='text-lg font-bold mt-3 mb-4'>Provider Info</h1>

                        <div className='flex justify-center items-center gap-6'>{/* provider email */}
                          <div className="mb-6">
                            <label htmlFor="providerEmail" className="block mb-2 text-sm font-medium text-gray-900 ">Provider Email</label>
                            <input name='providerEmail' type="email" id="providerEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Provider Email" required />
                          </div>

                          {/* provider name */}
                          <div className="mb-6">
                            <label htmlFor="providerName" className="block mb-2 text-sm font-medium text-gray-900 ">Provider Name</label>
                            <input name='providerName' type="text" id="providerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Provider Name" required />
                          </div>

                          <input
                            name='serviceCategory'
                            required
                            id="categories"
                            type="text"
                            className="hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            placeholder="Provider Name"
                            defaultValue="photography"
                          />
                        </div>

                        {/* provider web */}
                        <div className="mb-6">
                          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website Link</label>
                          <input name='providerLink' type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Website Link" required />
                        </div>
                      </div>
                    </div>
                        <div className="flex justify-center mt-10 ">
                          <button type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Submit<BsFillArrowRightCircleFill /></button>
                        </div>
                  </div>
                </div>
              </form>
            </>
          ) : null}
          <div className="flex gap-3  rounded-xl bg-base-100 shadow-xl">
            <figure><img src={HotelService} alt="Album" className=' object-cover h-full rounded-s-xl ' /></figure>
            <div className="flex flex-col justify-center ">
              <h2 className="card-title p-2 font-lato">Hotel Booking</h2>
              <p className='p-2 text-sm text-gray-500'>Embark on Unforgettable Journeys with Our Effortless Hotel Booking Services</p>
              <div className="card-actions justify-end p-4 ">
                <button className="btn bg-[#080373] text-white w-full mt-auto rounded-full relative -bottom-8 " onClick={() => setShowModal2(true)}>Create Now <BiSolidPlusCircle className='text-xl'></BiSolidPlusCircle></button>
              </div>
            </div>
          </div>
          {showModal2 ? (
            <>

              <form onSubmit={handleService}>
                <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
                  <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
                    <h2 className='text-2xl  font-alice text-center font-semibold'>Hotel Booking Service</h2>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-2" onClick={() => setShowModal2(false)}>✕</button>
                    <div className='flex justify-center items-center gap-5'>
                      <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Service Name</label>
                        <input name='serviceName' type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Service Name" required />
                      </div>
                      <div className="my-6 w-full">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Service Price</label>
                        <input name='servicePrice' type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Service price" required />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Service Description</label>
                      <textarea name='serviceDes' id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your service description here..." required></textarea>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 ">Image Link</label>
                      <input name='imgLink' type="text" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Image Link" required />
                    </div>

                    {/* provider info */}
                    <div className='bg-gray-50 rounded-xl '>
                      <div className='p-3 '>
                        <h1 className='text-lg font-bold mt-3 mb-4'>Provider Info</h1>

                        <div className='flex justify-center items-center gap-6'>{/* provider email */}
                          <div className="mb-6">
                            <label htmlFor="providerEmail" className="block mb-2 text-sm font-medium text-gray-900 ">Provider Email</label>
                            <input name='providerEmail' type="email" id="providerEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Provider Email" required />
                          </div>

                          {/* provider name */}
                          <div className="mb-6">
                            <label htmlFor="providerName" className="block mb-2 text-sm font-medium text-gray-900 ">Provider Name</label>
                            <input name='providerName' type="text" id="providerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Provider Name" required />
                          </div>

                          <input
                            name='serviceCategory'
                            required
                            id="categories"
                            type="text"
                            className="hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            placeholder="Provider Name"
                            defaultValue="hotel"
                          />
                        </div>

                        {/* provider web */}
                        <div className="mb-6">
                          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website Link</label>
                          <input name='providerLink' type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Website Link" required />
                        </div>
                      </div>
                    </div>
                        <div className="flex justify-center mt-10 ">
                          <button type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Submit<BsFillArrowRightCircleFill /></button>
                        </div>
                  </div>
                </div>
              </form>
            </>
          ) : null}
          <div className="flex gap-3  rounded-xl bg-base-100 shadow-xl">
            <figure><img src={cateringService} alt="Album" className=' object-cover h-full rounded-s-xl ' /></figure>
            <div className="flex flex-col justify-center ">
              <h2 className="card-title p-2 font-lato">Catering Service</h2>
              <p className='p-2 text-sm text-gray-500'>Empower Your Portfolio Admin Panel for Adding Photo Services</p>
              <div className="card-actions justify-end p-4 ">
              <button className="btn bg-[#080373] text-white w-full mt-auto rounded-full relative -bottom-8 " onClick={() => setShowModal3(true)}>Create Now <BiSolidPlusCircle className='text-xl'></BiSolidPlusCircle></button>
              </div>
            </div>
          </div>
          {showModal3 ? (
            <>

              <form onSubmit={handleService}>
                <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
                  <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
                    <h2 className='text-2xl  font-alice text-center font-semibold'>Catering Service</h2>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-2" onClick={() => setShowModal3(false)}>✕</button>
                    <div className='flex justify-center items-center gap-5'>
                      <div className="w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Service Name</label>
                        <input name='serviceName' type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Service Name" required />
                      </div>
                      <div className="my-6 w-full">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Service Price</label>
                        <input name='servicePrice' type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Service price" required />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Service Description</label>
                      <textarea name='serviceDes' id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your service description here..." required></textarea>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 ">Image Link</label>
                      <input name='imgLink' type="text" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Image Link" required />
                    </div>

                    {/* provider info */}
                    <div className='bg-gray-50 rounded-xl '>
                      <div className='p-3 '>
                        <h1 className='text-lg font-bold mt-3 mb-4'>Provider Info</h1>

                        <div className='flex justify-center items-center gap-6'>{/* provider email */}
                          <div className="mb-6">
                            <label htmlFor="providerEmail" className="block mb-2 text-sm font-medium text-gray-900 ">Provider Email</label>
                            <input name='providerEmail' type="email" id="providerEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Provider Email" required />
                          </div>

                          {/* provider name */}
                          <div className="mb-6">
                            <label htmlFor="providerName" className="block mb-2 text-sm font-medium text-gray-900 ">Provider Name</label>
                            <input name='providerName' type="text" id="providerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Provider Name" required />
                          </div>

                          <input
                            name='serviceCategory'
                            required
                            id="categories"
                            type="text"
                            className="hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            placeholder="Provider Name"
                            defaultValue="catering"
                          />
                        </div>

                        {/* provider web */}
                        <div className="mb-6">
                          <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website Link</label>
                          <input name='providerLink' type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Website Link" required />
                        </div>
                      </div>
                    </div>
                        <div className="flex justify-center mt-10 ">
                          <button type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Submit<BsFillArrowRightCircleFill /></button>
                        </div>
                  </div>
                </div>
              </form>
            </>
          ) : null}
        </div>
      </div>
    </div >
  );
};

export default AddService;
