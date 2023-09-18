import {motion} from 'framer-motion'



const AllUserDTr = ({index, user}) => {
    return (
        <motion.tr
       className="bg-white   hover:bg-gray-50 "

      // remake
      transition={{delay: 0.1 * index}}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      
      >
        <td className="text-black">{index + 1}</td>
        <td scope="row" className="flex items-center px-6 py-4 whitespace-nowrap ">

          <a href={user?.verificationImage} className="glightbox">

          <img className="w-10 h-10 rounded-full " src={user?.profileImage} alt="Jese image" />
          </a>
        </td>
        <td> <div className="text-black ">{user?.name}</div></td>
        <td> <div className="text-black ">{user?.country}</div></td>
        <td> <div className="text-black ">{user?.mobile}</div></td>
        <td> <div className="text-black ">{user?.religion}</div></td>
        <td> <div className="text-black ">{user?.work}</div></td>
      </motion.tr>
    );
};

export default AllUserDTr;