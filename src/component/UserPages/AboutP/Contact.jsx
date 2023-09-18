import { useForm } from "react-hook-form"
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const Contact = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()

  const onSubmit = (contactData) => {
    const finalData = {name: contactData.name, email: contactData.email, subject: contactData.subject, status: 'pending'}
    axios.post('https://soulmates-server.vercel.app/contact', finalData)
      .then(res => {
        console.log(res.data.insertedId)
        if (res.data.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/')
        }
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div className=" max-w-7xl mx-auto mb-8 w-[80%]">
      <div className="text-center mb-12">
        <p className="text-[48px] font-alice text-[#272932] dark:text-white">Contact us</p>
        <p className="text-[18px] font-lato text-[#3E4A5B] dark:text-gray-200">We're here to help you on your journey towards finding a lifelong partner. At <span className="text-red-500 ">'Soulmate Matrimony'</span> , <br /> we value your feedback, questions, and suggestions. </p>
      </div>
      
      {/* form section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 bg-white  mx-auto rounded-[30px] border-[#AFB2B5] border p-12 w-full dark:bg-gray-400' action="" >
          <p className='font-alice text-4xl'>Let’s Connect</p>
          {/* input field */}
          <div>
            <label htmlFor="name" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Full Name</label>
            <input {...register('name', { required: true })} type="text" id="name" className="text-[18px] font-medium font-lato rounded-full py-5 pl-7 bg-gray-50 border border-[#F6A1A1] text-gray-900 block w-full " placeholder="John" />
          </div>
          <div>
            <label htmlFor="email" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Email</label>
            <input {...register('email', { required: true })} type="email" id="email" className="text-[18px] font-medium font-lato rounded-full py-5 pl-7 bg-gray-50 border border-[#F6A1A1] text-gray-900 block w-full " placeholder="John" />
          </div>
          <div>
            <label htmlFor="subject" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Subject</label>
            <input {...register('subject', { required: true })} type="text" id="subject" className="text-[18px] font-medium font-lato rounded-full py-5 pl-7 bg-gray-50 border border-[#F6A1A1] text-gray-900 block w-full " placeholder="John" />
          </div>
          <div className="">
            <label htmlFor="message" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Message</label>
            <textarea {...register('message', { required: true })} id="message" rows="4" className="rounded-[15px] block py-5 pl-7 w-full text-[18px] font-medium font-lato text-gray-900 bg-gray-50 border  border-[#F6A1A1] focus:ring-[#F6A1A1]" placeholder="Write your message here..."></textarea>
          </div>
          <div className="flex ">
            <button className='ml-auto text-[20px] font-bold w-[50%] bg-primary-500 rounded-full text-white py-[13px]  flex justify-center items-center '>Send Message</button>
          </div>
        </form>

      {/* map section */}
      <div className="">
        <MapContainer className="rounded-xl h-96 w-full" center={[22.84487499705877, 89.53538669322856]} zoom={6} scrollWheelZoom={false}>
          <TileLayer
            attribution='https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[22.84487499705877, 89.53538669322856]}>
            <Popup>
              I&apos;m Here🚶🏾🌍
            </Popup>
          </Marker>
        </MapContainer>


        {/* contact info section */}
        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-2 ">
            <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
              <BsTelephone className="text-2xl" />
            </div>
            <p className="text-[#3E4A5B] text-[18px]">
              <span className=" mr-1 text-[26px] font-alice dark:text-gray-200 c">Phone Number:</span>
              <p className="dark:text-gray-200">Office: +123 456 789</p>
              <p className="dark:text-gray-200">Support: +123 456 789</p>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
              <AiOutlineMail className="text-2xl" />
            </div>
            <p className="text-[#3E4A5B] text-[18px]">
              <span className=" mr-1 text-[26px] font-alice dark:text-gray-200">Email:</span>
              <p className="dark:text-gray-200">example@name.com</p>
              <p className="dark:text-gray-200">xyz@gmail.com</p>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-white p-[12px] rounded-full border border-[#6b7b958c]">
              <CiLocationOn className="text-2xl" />
            </div>
            <p className="text-[#3E4A5B] text-[18px]">
              <span className=" mr-1 text-[26px] font-alice dark:text-gray-200">Location:</span>
              <p className="dark:text-gray-200">No 2, 3rd A Cross, Kanakadasa <br />
                Layout, Bangalore, India</p>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;

// {
//   <div className="hero min-h-screen bg-base-200">
//     <div className="hero-content flex-col lg:flex-row-reverse">
//       <div className="text-center lg:text-left w-1/2">
//         <Heading title="Contact" />
//         <p className="py-6 text-2xl">We're here to help you on your journey towards finding a lifelong partner. At <span className="text-red-500 ">'Soulmate Matrimony'</span> , we value your feedback, questions, and suggestions. <br /> Whether you have inquiries about our services, need assistance with your profile, or simply want to share your success story, our dedicated support team is ready to assist you. <br /> Feel free to reach out to us through the contact form . Your satisfaction and happiness are our top priorities, and we look forward to being a part of your quest to find love and companionship..</p>
//       </div>
//       <div className="card w-1/2 shadow-2xl bg-base-100">
//         <form onSubmit={handleContact} className="card-body">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input type="text" name="name" placeholder="Name" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Subject</span>
//             </label>
//             <input type="text" name="subject" placeholder="Subject" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input type="email" name="email" placeholder="email" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Message</span>
//             </label>
//             {/* <input type="text" placeholder="password" className="input input-bordered" /> */}
//             <textarea rows={5} name="message" className="textarea textarea-primary" placeholder="Message"></textarea>
//           </div>
//           <div className="form-control mt-6">
//             <button className="btn btn-primary">Send</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// }