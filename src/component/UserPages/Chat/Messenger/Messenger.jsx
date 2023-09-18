import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import useMyData from "../../../../Hooks/useMyData";
import "./messanger.css"
import Conversation from "../Converstaion/Conversation";
import Message from "../Message/Message";
import { useRef } from "react";
import { io } from "socket.io-client"
import ChatOnline from "../ChatOnline/ChatOnline";

const Messenger = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [userInfo,refetch] = useMyData();
    const socket = useRef();
    const scrollRef = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);
   
    useEffect(() => {
        socket.current = io("https://socket-io-chat-app-5f87e6d4f1ce.herokuapp.com/");
        console.log(socket.current)
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    // get add connected socket user
    useEffect(() => {
        socket.current?.emit("addUser", userInfo._id);
        socket.current.on("getUsers", users => {
            setOnlineUsers(users)
            // user.followings.filter((following) => users.some((u) => u.userId === following))
        })
    })

     //get arrival message
     useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);


    //----------------socket id related work end----------------------//
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("https://soulmates-server.vercel.app/conversations/" + userInfo._id);
                setConversations(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getConversations();
    }, [userInfo._id])
 

    // get all previous message on currentChat
    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("https://soulmates-server.vercel.app/messages/" + currentChat?._id);
                setMessages(res.data)
            }
            catch (err) {
                console.log(err)
            }

        }
        getMessages();
    }, [currentChat])

    //post message
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: userInfo._id,
            text: newMessages,
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find(
            (member) => member !== userInfo._id
        );

        socket.current.emit("sendMessage", {
            senderId: userInfo._id,
            receiverId,
            text: newMessages,
        });

        try {
            const res = await axios.post("https://soulmates-server.vercel.app/messages", message);
            setMessages([...messages, res.data])
            setNewMessages("")
        }
        catch (err) {
            console.log(err)
        }
    }

    //scroll into the bottom
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])
    return (
        <div className="messenger ">
            {/* Chat menu */}
            <div className="chatMenu bg-slate-50 pb-10">
                <div className="chatMenuWrapper">

                    {conversations.map(conversation => (
                        <div key={conversation._id} onClick={() => setCurrentChat(conversation)}>
                            <Conversation conversation={conversation} currentUser={userInfo} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="chatBox mb-10">
                <div className="chatBoxWrapper ">
                    {
                        currentChat ?
                            <>
                                <div className="chatBoxTop">
                                    {messages.map(message => (
                                        <Message key={message._id} message={message} own={message.sender === userInfo._id} ></Message>
                                    ))

                                    }
                                </div>
                                <div className="chatBoxBottom">
                                    <textarea placeholder="write something..." className="chatMessageInput bg-slate-100" onChange={(e) => setNewMessages(e.target.value)} value={newMessages}></textarea>
                                    <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                                </div></> : <span className="noConversationText">Open a conversation to stat a chat</span>
                    }

                </div>
            </div>
            {/* chat online */}
            <div className="chatOnline ">
                <div className="chatOnlineWrapper">
                    <ChatOnline onlineUsers={onlineUsers} currentId={userInfo._id} setCurrentChat={setCurrentChat} refetch={refetch}/>
                </div>
            </div>
        </div>
    );
};

export default Messenger;