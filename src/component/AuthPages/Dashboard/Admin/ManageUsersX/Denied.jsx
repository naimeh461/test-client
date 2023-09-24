import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import {RxCross1} from "react-icons/rx";
import {motion} from 'framer-motion'

const Approve = ({user, index,handleMakeDenied}) => {
    return (
        <motion.tr
        className="bg-white   hover:bg-gray-50 text-left"
       // remake
       transition={{delay: 0.1 * index}}
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       exit={{opacity: 0, y: 20}}
       
       >
         <td className="text-black ">{index + 1}</td>
         <td scope="row" className="flex items-center px-6 py-4 whitespace-nowrap "><img className="w-10 h-10 rounded-full" src={user?.profileImage} alt="Jese image" /></td>
         <td> <div className="text-black ">{user?.name}</div></td>
         <td> <div className="text-black ">{user?.role}</div></td>
         <td></td>
       </motion.tr>
    );
};

export default Approve;