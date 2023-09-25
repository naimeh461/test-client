import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCustomQuery } from "../../../../utilities/utilities";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../../style.css";
import MetInfo from "./MetInfo";

const FixedMet = ({ partnerUser }) => {
  const { _id } = partnerUser;
  const params = useParams();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (params.id) {
      setUserId(params.id);
    } else {
      setUserId(_id);
    }
  }, [_id, params, setUserId]);

  const { refetch: refetchAccept, data: acceptInfo = [] } = useCustomQuery(
    ["accept", userId],
    `https://soulmates-server.vercel.app/reqAccept/${userId}`
  );

  const { refetch: refetchPending, data: pendingInfo = [] } = useCustomQuery(
    ["req", userId],
    `https://soulmates-server.vercel.app/getReqPending/${userId}`
  );

  const { refetch: refetchReq, data: requestInfo = [] } = useCustomQuery(
    ["pending", userId],
    `https://soulmates-server.vercel.app/sendReqPending/${userId}`
  );

  useEffect(() => {
    refetchAccept();
    refetchReq();
    refetchPending();
  }, [userId]);

  const refetch = () => {
    refetchAccept();
    refetchReq();
    refetchPending();
  };

  return (
    <>
      <Tabs>
        <TabList className="text-center flex gap-4 justify-center mb-4">
          <Tab className="btn bg-gray-400 text-white btn-sm">Pendings</Tab>
          <Tab className="btn bg-gray-400 text-white btn-sm">Accept</Tab>
          <Tab className="btn bg-gray-400 text-white btn-sm">Request Sent</Tab>
        </TabList>


        <TabPanel>
          <MetInfo
            infoData={pendingInfo}
            actionType={"pending"}
            refetch={refetch}
            user={userId}
          />
        </TabPanel>

        <TabPanel>
          <MetInfo
            infoData={acceptInfo}
            actionType={"accept"}
            refetch={refetch}
            user={userId}
          />
        </TabPanel>

        <TabPanel>
          <MetInfo
            infoData={requestInfo}
            actionType={"request"}
            refetch={refetch}
            user={userId}
          />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default FixedMet;