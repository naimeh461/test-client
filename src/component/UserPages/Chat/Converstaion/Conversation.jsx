import { useEffect, useState } from 'react';
import axios from 'axios';

const Conversation = ({ conversation, currentUser, messages, selected }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const friendId = conversation?.members.find((m) => m !== currentUser._id);
        if (friendId) {
          const getUser = async () => {
            try {
              const res = await axios.get(`http://localhost:5000/specificUser/${friendId}`);
              setUser(res.data);
            } catch (err) {
              console.error('Error fetching user data:', err);
            }
          };
          getUser();
        } else {
          setUser(null);
        }
      }, [currentUser, conversation]);

    return (
        <div className={` p- ${selected ? ' border border-t-0 border-b-0 bg-red-50 ' : ''}`}>

            <div className={selected ? 'flex justify-between bg-gradient-to-l from-primary-400 cursor-pointer ' : 'flex justify-between hover:bg-gray-100 cursor-pointer'}>
                <div className="flex py-2 px-6">
                    <div className="">
                        <img src={user?.profileImage} className='w-16 h-16 rounded-full object-cover cursor-pointer hover:scale-110 transform transition-transform duration-300' alt="" />
                    </div>
                    <div className="w-full px-2 flex flex-col justify-evenly">
                        <div className="flex justify-between items-end">
                            <p className='text-[#434656] font-alice text-xl dark:text-white'>{user?.name}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-[14px] font-lato text-[#8695AC] '>{messages?.text}</p>
                        </div>
                    </div>
                </div>

                {selected && <div className="bg-primary-500 w-2"></div>}
            </div>
        </div>
    );
};

export default Conversation;

