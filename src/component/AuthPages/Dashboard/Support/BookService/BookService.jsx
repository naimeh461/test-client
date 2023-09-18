import { useContext, useEffect, useState } from "react";
import BookServiceCard from "./BookServiceCard";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import Loading from "../../../../../Shared/Loading";


const BookService = () => {
    const {user}=useContext(AuthContext)
    console.log(user?.email)
    const [datas, setDatas]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://soulmates-server.vercel.app/singleBookedService/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            setDatas(data)
        })
    },[])
    console.log(datas)

    if (loading) {
        return (
          <div>
            <Loading></Loading>
          </div>
        );
      }




    return (
        <div >
           <div className="bg-gradient-to-r from-[#6ed3a6] to-[#EBFFF6]">
            <h1 className="text-5xl font-bold text-center py-20 mb-20  ">Booked Service</h1>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 lg:mx-20">
           {datas.map((data) => (
            <BookServiceCard key={data._id} data={data}></BookServiceCard>
          ))}
           </div>
        </div>
    );
};

export default BookService;