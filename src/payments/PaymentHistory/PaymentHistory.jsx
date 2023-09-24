import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useMyData from '../../Hooks/useMyData';
import { FcApproval } from "react-icons/fc";
import { PiClipboardTextThin } from 'react-icons/pi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import home from '../../assets/about-photos/homeWhite.svg'
import scop from '../../assets/about-photos/peopleWhite.svg'
import people from '../../assets/about-photos/aboutPeople.png'
import { Link } from 'react-router-dom';
const PaymentHistory = () => {
  const[payments, setPayments] = useState([])
  const [user] = useMyData();

  console.log(payments, user)
  useEffect(() => {
    // Check if user and user.uid are not null or undefined
    if (user && user._id) {
      console.log(user)
      fetch(`http://localhost:5000/paymentHistory/${user._id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setPayments(data)
        })
    }
  }, [user]);

  
  
  return (

    <div className="relative overflow-x-auto ">

      <div className="bg-[#730f4d]">
        <div className="max-w-7xl flex justify-between items-center h-full w-full mx-auto p-5 lg:p-0">
          <div className="ms-4 text-left text-[#F0F2F5] ">
            <p className="font-alice lg:text-[28px] text-2xl">{"Your Payment History"}</p>
            <p className="lg:text-base text-xs mt-2 ">Keep track of your payment history and subscription details here. <br /> Your support helps us continue providing our matrimony services to help you find your perfect match.</p>
            <p className="flex  font-lato pt-7"><img className="mr-1" src={home} alt="" /> <Link to='/'>Home</Link> <span className="mx-2">/</span><img className="mr-1" src={scop} alt="" /> <Link to='/paymentHistory'>Payment History</Link></p>
          </div>
          <img className="hidden lg:block" src={people} alt="" />
        </div>
      </div>
      
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-7xl mx-auto my-10 shadow-xl rounded-lg">
        {/* table head */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              TrnId
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        {/* table body */}
        <tbody>
          {
            payments.map((payment, index) => <Table key={index} payment={payment}/>)
          }
        </tbody>
      </table>
    </div>

  );
};

export default PaymentHistory;

const Table = ({payment}) => {
  const [tip, setTip] = useState(true)
  const copyTip = () => setTip(!tip)
  const dateObj = new Date(payment.date)
  const time = dateObj.toLocaleTimeString()


  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const date = (`${dateObj.getDate()} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`)
  return(
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {payment.plan}
      </th>
      <td className="px-6 py-4 flex gap-3 items-center">
        <span>{payment.transactionId}</span> <div className="tooltip tooltip-right" data-tip={tip ? 'copy' : 'copied'} onClick={() => copyTip()}><CopyToClipboard text={payment.transactionId}><PiClipboardTextThin className='text-xl cursor-pointer tooltip' /></CopyToClipboard> </div>
      </td>
      <td className="px-6 py-4">
        {time}
        <br />
        {date}
      </td>
      <td className="px-6 py-4">
        <FcApproval className='text-3xl' />
      </td>
    </tr>
  )
}