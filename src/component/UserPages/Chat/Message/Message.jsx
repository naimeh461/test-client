
import axios from "axios";
import "./Message.css"
import { format } from 'timeago.js';
import { useState } from "react";
import { useEffect } from "react";
import noProfile from "../../../../assets/other/blank.png"
const Message = ({ message, own}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            //finding user
            try {
                const res = await axios(`https://soulmates-server.vercel.app/specificUser/${message?.sender}`)
                setUser(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [message])


    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                {user?.profileImage ? 
                <><img className="messageImg" src={user?.profileImage}/></> : 
                <><img className="messageImg" src={noProfile}/></>
                }

                <p className="messageText">{message?.text}</p>
            </div>
            <div className="messageBottom">{format(message?.createdAt)}</div>
        </div>
    );
};

export default Message;