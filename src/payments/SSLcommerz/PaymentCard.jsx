import { useState } from "react";
import { useLocation } from "react-router-dom";
const PaymentCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [post, setPost] = useState("");
  const [phone, setPhone] = useState("");
  const url = useLocation();

  const searchParams = new URLSearchParams(url.search);
  const plan = searchParams.get("plan");
  const decodedData = JSON.parse(atob(plan));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const data = {
      name,
      email,
      location,
      post,
      phone,
      plan: decodedData.plan,
      price: decodedData.price,
  };
    fetch("https://soulmates-server.vercel.app/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        const location = data.url;
        console.log(data);
        console.log({ location });
      });
  };

  return (
    <div className="max-w-xs my-20 mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="bg-blue-500 text-white text-center py-4">
        <p className="font-bold text-lg">Payment Card</p>
      </div>
      <form className="p-6" onSubmit={handleSubmit}>
        <label className="text-gray-600 block mb-2"> Name</label>
        <input
          type="text"
          className="w-full border py-2 px-3 mb-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <br />
        <label className="text-gray-600 block mb-2"> Email</label>
        <input
          type="text"
          className="w-full border py-2 px-3 mb-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="xyz@gmail.com"
        />
        <div className="flex justify-between mb-3">
          <div className="w-1/2 pr-1">
            <label className="text-gray-600 block mb-2">Location</label>
            <input
              type="text"
              className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
          </div>
          <div className="w-1/2 pl-1">
            <label className="text-gray-600 block mb-2">PostCode</label>
            <input
              type="number"
              className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              placeholder="***"
            />
          </div>
        </div>
        <label className="text-gray-600 block mb-2">Phone</label>
        <input
          type="text"
          className="w-full border py-2 px-3 mb-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+880"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentCard;