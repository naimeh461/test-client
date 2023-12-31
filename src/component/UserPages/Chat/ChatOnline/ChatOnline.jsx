
import "./ChatOnline.css"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import useAllUserImp from "../../../../Hooks/useAllUserImp";
const ChatOnline = ({ onlineUsers, currentId, setCurrentChat , refetch}) => {
   

    const [onlineFriends, setOnlineFriends] = useState([])
    const [userData] = useAllUserImp();

    useEffect(() => {
        setOnlineFriends(userData.filter(user => onlineUsers.some(onlineUser => onlineUser.userId === user._id)));
    }, [onlineUsers, userData]);
    const handleClick = async (user) => 
    {
        try{
            const res =await axios.get(`https://soulmates-server.vercel.app/conversations/find/${currentId}/${user._id}`)
            setCurrentChat(res.data)
            refetch()
        }
        catch(err){
            console.log(err)
        }

    }
    
    return (
      <div className='overflow-x-scroll'>
      <div className='flex space-x-4 p-2'>
        {onlineFriends.map(onlineFriend => (
          <div className='group flex-shrink-0' key={onlineFriend._id}>
            <div className='relative'>
              <div className='chatOnlineBadge absolute top-0 right-0'></div>
              <img
                src={onlineFriend.profileImage} // Use the actual image source from your data
                className='w-16 h-16 rounded-full object-cover cursor-pointer hover:scale-110 transform transition-transform duration-300'
                alt=''
                onClick={() => handleClick(onlineFriend)}
              />
            </div>
            <p className='text-center mt-1 group-hover:text-blue-500'>{onlineFriend.username}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ChatOnline;


