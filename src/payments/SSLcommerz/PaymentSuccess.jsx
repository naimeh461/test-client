import { Link, useLocation, useParams } from "react-router-dom";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Lottie from "lottie-react";
import lottieAnim from '../../assets/lottie/success.json'


const PaymentSuccess = () => {
  const { width, height } = useWindowSize()

  const location = useLocation();
  const paymentData = location.state;

  console.log(paymentData)
  
  return (

    <div className=" p-2">
      <p className="text-center text-5xl  font-alice text-red-400 mt-12">Payment Successful</p>
      <Lottie className="w-1/2 objto md:w-[200px] md:h-[200px] mx-auto scale-100 " loop={0} animationData={lottieAnim} />
      <div className="border md:w-[500px] mx-auto p-6 mb-12 mt-2 rounded-2xl shadow flex flex-col">
        <Item name='User Name' value={paymentData?.name} />
        <Item name='Plan' value={paymentData?.plan} />
        <Item name='Method' value='Stripe' />
        <Item name='Trans ID' value={paymentData?.transactionId}/>
        <Link className="mx-auto bg-red-400 px-5 py-3 font-alice text-xl text-white rounded-full text-center mt-4" to='/paymentHistory'>Payment History</Link>
      </div>

      <Confetti className=""
        width={width}
        height={height}
      />
    </div>
  );
};

export default PaymentSuccess;

const Item = ({name, value}) => {
  return(
    <div className="flex flex-col md:flex-row justify-between mb-2">
      <p className="text-xl text-gray-400  font-lato">{name}: </p>
      <p className="text-xl text-gray-400 font-bold font-lato">{value}</p>
    </div>
  )
}