import { Link, useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const {tranId}=useParams()
    return (
        <div className="my-20  h-[calc(100vh-300px)]">
            <h1 className="text-center text-5xl ">Payment success <span className="bg-red-600 text-white px-4 rounded">{tranId}</span></h1>
            <div className=" mx-auto w-32 mt-10">
           <Link to="/" ><button className="btn btn-primary mx-auto text-white">Go to Home</button></Link>
           </div>
        </div>
    );
};

export default PaymentSuccess;