import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import useMyData from '../../../../Hooks/useMyData';
import './messanger.css';
import Conversation from '../Converstaion/Conversation';
import Message from '../Message/Message';
import ChatOnline from '../ChatOnline/ChatOnline';
import video from '../../../../assets/chat/video.svg';
import call from '../../../../assets/chat/call.svg';
import send from '../../../../assets/chat/send.svg';
import MeetAndProposal from '../Meet and proposal/MeetAndProposal';
import FixedMet from '../../MyProfle/metting/FixedMet';
import RelationSts from '../../MyProfle/relationSts/RelationSts';

const Messenger = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessages, setNewMessages] = useState('');
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [userInfo, refetch] = useMyData();
    const socket = useRef();
    const messagesEndRef = useRef(null);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [lastMessages, setLastMessages] = useState([]);
    const [friend, setFriend] = useState(null);
    console.log(messages, newMessages)
    useEffect(() => {
        socket.current = io('https://socketio2.onrender.com');
        socket.current.on('getMessage', (data) => {
            console.log(data)
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        socket.current?.emit('addUser', userInfo._id);
        socket.current.on('getUsers', (users) => {
            setOnlineUsers(users);
        });
    }, [userInfo._id]);

    useEffect(() => {
        if (arrivalMessage && currentChat?.members.includes(arrivalMessage.sender)) {
            setMessages((prev) => [...prev, arrivalMessage]);
        }
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get('http://localhost:5000/conversations/' + userInfo._id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [userInfo._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get('http://localhost:5000/messages/' + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const getLastMessagesForConversations = async () => {
        const lastMessages = [];
        for (const conversation of conversations) {
            try {
                const res = await axios.get(
                    `http://localhost:5000/messages/${conversation._id}`
                );
                const lastMessage = res.data[res.data.length - 1];
                lastMessages.push(lastMessage);
            } catch (err) {
                console.log(err);
            }
        }
        return lastMessages;
    };

    useEffect(() => {
        getLastMessagesForConversations().then((messages) => {
            setLastMessages(messages);
        });
    }, [conversations]);

    useEffect(() => {
        const fetchFriendData = async () => {
            if (currentChat) {
                const friendId = currentChat.members.find((m) => m !== userInfo._id);
                try {
                    const res = await axios.get(
                        `http://localhost:5000/specificUser/${friendId}`
                    );
                    setFriend(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
        };

        fetchFriendData(); // Call the async function
    }, [currentChat, userInfo._id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: userInfo._id,
            text: newMessages,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find((member) => member !== userInfo._id);

        socket.current.emit('sendMessage', {
            senderId: userInfo._id,
            receiverId,
            text: newMessages,
        });

        try {
            const res = await axios.post('http://localhost:5000/messages', message);
            setMessages([...messages, res.data]);
            setNewMessages('');
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (

        <>
            <div className="messenger ">
                {/* Chat menu */}
                <div className="xl:w-[20%] w-[25%]">
                    <div>
                        <h2 className="text-center text-2xl font-alice">Message</h2>
                        <ChatOnline onlineUsers={onlineUsers} currentId={userInfo._id} setCurrentChat={setCurrentChat} refetch={refetch} />
                    </div>

                    <div className="overflow-y-scroll h-[770px] hide-scrollbar">
                        {conversations.map((conversation, index) => (
                            <div key={conversation._id} onClick={() => setCurrentChat(conversation)}>
                                <Conversation conversation={conversation} messages={lastMessages[index]} currentUser={userInfo} selected={currentChat && currentChat._id === conversation._id} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* chat box */}
                <div className='chatBox bg-red-50 '>

                    <div className="chatBoxWrapper bg-red-50">
                        {currentChat ? (
                            <>
                                <div className="sticky bg-red-100">
                                    <div className="flex justify-between px-5 py-5 items-center shadow-sm flex-none">
                                        {/* img and name */}
                                        <div className="flex items-center gap-2">
                                            <img className='w-[50px] h-[50px] rounded-full object-cover object-top ' src={friend?.profileImage} alt="" />
                                            <div className="">
                                                <p className='text-[#434656] font-alice text-[18px]'>{friend?.name}</p>
                                            </div>
                                        </div>
                                            <div className="flex gap-4 lg:hidden">
                                                <FixedMet partnerUserID={friend?._id} />
                                                <RelationSts partnerUser={friend} />

                                            </div>
                                    </div>
                                </div>
                                <div className="chatBoxTop hide-scrollbar">
                                    <div>
                                        {messages.map(message => (
                                            <Message key={message._id} message={message} own={message.sender === userInfo._id} friend={friend} userInfo={userInfo} />
                                        ))}
                                        <div ref={messagesEndRef}></div>
                                    </div>
                                </div>
                                <div className="px-4 flex-none flex justify-between items-center chatBoxBottom bg-red-50">
                                    <textarea className='font-lato text-[20px] w-[90%] bg-[#EDDEDE] px-5 py-3 rounded-xl resize-x  textarea chatMessageInput' placeholder='Message...' type="text" onChange={(e) => setNewMessages(e.target.value)} value={newMessages} />
                                    <div className="" onClick={handleSubmit}>
                                        <img className='p-3 bg-gradient-to-tl from-[#FE3535] to-[#FFD5D5] rounded-full chatSubmitButton' src={send} alt="" />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <span className="noConversationText">Open a conversation to start a chat</span>
                        )}
                    </div>
                </div>


                {/* chat online */}
                <div className="chatOnline hidden xl:block">
                    <div className="chatOnlineWrapper">
                        {
                            currentChat ? <><MeetAndProposal friend={friend} userInfo={userInfo}></MeetAndProposal></> : <></>
                        }
                    </div>
                </div>
            </div >

        </>
    );
};

export default Messenger;