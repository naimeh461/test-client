import "./Message.css"
import { format } from 'timeago.js';
import noProfile from "../../../../assets/other/blank.png"

const Message = ({ message, own, friend, userInfo }) => {
    console.log(message)
    
    return (
        <>
            <div className={own ? "chat chat-end mb-2" : "chat chat-start mb-2 "}>
                <div className="chat-image avatar ">
                    <div className="w-10 rounded-full">

                        {own ? <>
                            {userInfo?.profileImage ?
                                <><img src={userInfo?.profileImage} /></> :
                                <><img src={noProfile} /></>}</> : <>
                            {friend?.profileImage ?
                                <><img src={friend?.profileImage} /></> :
                                <><img src={noProfile} /></>}
                        </>}
                    </div>
                </div>
                <div className="chat-header ">
                    {own ? <>{userInfo?.name}</> : <>{friend?.name}</>}
                </div>
                <div className={own ? "chat-bubble bg-[#FF7474]  text-white  " : "chat-bubble  bg-white  text-black  "}>{message?.text}</div>
                <time className=" text-xs opacity-50 text-center">{format(message?.createdAt)}</time>
            </div>

        </>





    );
};

export default Message;


