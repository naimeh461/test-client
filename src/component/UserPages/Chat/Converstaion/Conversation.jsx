import "./conversation.css"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const Conversation = ({conversation , currentUser}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation?.members.find((m) => m !== currentUser._id);
        const getUser = async () => {
            //finding user
            try{
                const res = await axios(`https://soulmates-server.vercel.app/specificUser/${friendId}`)
                setUser(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getUser()
    },[currentUser, conversation])
    return (
        <div className='conversation'>
        <img src={user?.profileImage} className='conversationImg' alt="" />
        <span  className='conversationName'>{user?.name}</span>
    </div>
    );
};

export default Conversation;