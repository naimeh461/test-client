import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const ServiceCard = () => {
  const [fold, setFold] = useState(true);
  const [btnDis, setBtnDis] = useState(false);

  const data = useLoaderData();
  const { image, name, description, provider, price,} = data;
  const { user } = useContext(AuthContext);

  const handleBook = () => {
    const addInfo = {
      name: name,
      email: user?.email,
      image: image,
      description: description,
      provider: provider,
      price: price,
    };
    if(user && user.email){
    fetch(`https://soulmates-server.vercel.app/bookedService`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Booked Successfully !",
          });

          setBtnDis(true);
        }
      });}
      else{
        Swal.fire({
          title: 'Please log in before selecting the course',
          icon: 'warning',
         
        })
       }
  };

  return (
    <div className="my-20 ">
      {/* Container Box */}
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            height={500}
            className="object-cover w-full h-[calc(100vh-300px)]   "
          />
        </div>
        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {name}
          </h5>

          {fold ? (
            <>
              <p className=" text-gray-500">
                {description?.substring(0, 70)}.....
              </p>
              <span
                className="cursor-pointer text-blue-600 "
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className=" text-gray-900">{description}</p>
              <span
                className="cursor-pointer text-blue-600 "
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </>
          )}

          <div className="">
            <p className=" text-gray-900">Provider: {provider?.name}</p>
            <p className=" text-gray-900">Contact: {provider?.contact}</p>
            <p className=" text-gray-900">
              website: <a href={provider.portfolio}>{provider.portfolio}</a>{" "}
            </p>
          </div>
          <div className="flex gap-5 mt-8 items-center">
            <Link to='/payment'
              className="btn btn-primary"
              onClick={()=>handleBook()}
              disabled={btnDis}
            >
              Book Now
            </Link>
            <p className="items-center font-extrabold text-gray-600 ">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
