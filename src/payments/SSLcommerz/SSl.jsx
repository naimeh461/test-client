import { useState } from "react";
import { useLocation } from "react-router-dom";
import useMyData from "../../Hooks/useMyData";

const SSl = () => {
  const [userInfo] = useMyData();
  const [name, setName] = useState(userInfo?.name);
  const [email, setEmail] = useState(userInfo?.email);
  const [phone, setPhone] = useState(userInfo?.mobile);
  const [location, setLocation] = useState("");
  const [post, setPost] = useState("");
  const url = useLocation();

  const searchParams = new URLSearchParams(url.search);
  const plan = searchParams.get("plan");
  const decodedData = JSON.parse(atob(plan));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const data = {
      userId: userInfo._id,
      name,
      email,
      location,
      post,
      phone,
      plan: decodedData.plan,
      price: decodedData.price,
    };
    console.log(data)
    fetch("https://soulmates-server.vercel.app/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        window.location.replace(data.url);
        const location = data.url;
        console.log(data);
        console.log({ location });
      });
  };
  return (
    <div className="w-full p-8 border rounded-2xl my-4">
      <form className="" onSubmit={handleSubmit}>
        <label className="text-gray-600 block mb-2">Name</label>
        <input
          type="text"
          className="w-full border py-2 px-3 mb-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={userInfo.name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <br />
        <label className="text-gray-600 block mb-2"> Email</label>
        <input
          type="text"
          className="w-full border py-2 px-3 mb-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={userInfo.email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="xyz@gmail.com"
        />
        <div className="flex justify-between mb-3">
          <div className="w-1/2 pr-1">
            <label className="text-gray-600 block mb-2">Location</label>
            <input
              type="text"
              className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={userInfo.city}
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
          value={userInfo.mobile}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+880"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-8"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default SSl;
