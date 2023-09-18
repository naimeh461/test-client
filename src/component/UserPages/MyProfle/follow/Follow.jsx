import { useEffect, useState } from "react";
import useMyData from "../../../../Hooks/useMyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Follow = () => {
  const [userInfo] = useMyData();
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://soulmates-server.vercel.app/showFlowing/${userInfo._id}`
      )
      .then((response) => {
        if (response.data) {
          setFollowing(response.data?.favUser);
        }
      });
  }, [userInfo]);

  useEffect(() => {
    axios
      .get(
        `https://soulmates-server.vercel.app/showFlowers/${userInfo._id}`
      )
      .then((response) => {
        if (response.data) {
          setFollowers(response.data);
        }
      });
  }, [userInfo]);

  return (
    <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center px-5 py-3">
        <p className="font-alice text-[25px] ">Followers</p>
      </div>
      <hr className="border border-[#C3CAD5]" />
      <div className="p-4">
        <div className="bg-[#F0F2F5] py-3 px-4 rounded-2xl text-[#536279] text-base place-items-center">
          <Tabs>
            <TabList>
              <Tab>Following</Tab>
              <Tab>Followers</Tab>
            </TabList>

            <TabPanel>
              {following?.length > 0 ? (
                <>
                  {following?.map((follow) => (
                    <Link to={`/profile/${follow.favId}`} key={follow.favId}>
                      <div className="flex items-center space-x-4 p-4 border-b border-gray-300">
                        <div className="flex-shrink-0">
                          <img
                            src={follow.favImg}
                            className="h-12 w-12 rounded-full"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="text-lg font-medium text-gray-800">
                            {follow.favUser}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  <span>Nothing To Show</span>
                </>
              )}
            </TabPanel>
            <TabPanel>
              {followers?.length > 0 ? (
                <>
                  {followers?.map((follower) => (
                    <Link to={`/profile/${follower.userId}`} key={follower._id}>
                      <div className="flex items-center space-x-4 p-4 border-b border-gray-300">
                        <div className="flex-shrink-0">
                          <img
                            src={follower.userImg}
                            className="h-12 w-12 rounded-full"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="text-lg font-medium text-gray-800">
                            {follower.userName}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  <span>Nothing To Show</span>
                </>
              )}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Follow;
