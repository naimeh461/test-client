import "./ChatOnline.css"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const ChatOnline = ({ onlineUsers, currentId, setCurrentChat , refetch}) => {
   

    const [allUsers, setAllUser] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([])


    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get("https://soulmates-server.vercel.app/allUser");
            setAllUser(res.data);
        };

        getUsers();
    }, [currentId]);


    useEffect(() => {
        setOnlineFriends(allUsers.filter(user => onlineUsers.some(onlineUser => onlineUser.userId === user._id)));
    }, [onlineUsers, allUsers]);
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
        <div className='chatOnline'>
            <p className="text-2xl mb-10">Online Now</p>
            {onlineFriends.map(onlineFriend => (
            <div className='chatOnlineFriend' onClick={() => handleClick(onlineFriend)} key={onlineFriend._id}>
             <div className='chatOnlineImgContainer '>
                <img src={onlineFriend?.profileImage} className='chatOnlineImg' alt="" />
                <div className='chatOnlineBadge'></div>
             </div>
             <span className='chatOnlineName'>{onlineFriend?.name}</span>
            </div>
            ))}
            
        </div>
    );
};

export default ChatOnline;



