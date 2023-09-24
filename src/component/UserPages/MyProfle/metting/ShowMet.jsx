import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useCustomQuery,
  useProposalInfo,
} from "../../../../utilities/utilities";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MetInfo from "./MetInfo";

const FixedMet = ({ partnerUser }) => {
  const { _id } = partnerUser;
  const params = useParams();
  const [userId, setUserId] = useState("");
  const { refetchProposal } = useProposalInfo(userId);
 
  useEffect(() => {
    if (params.id) {
      setUserId(params.id);
    } else {
      setUserId(_id);
    }
  }, [_id, params, setUserId]);

  const { refetch: refetchAccept, data: acceptInfo = [] } = useCustomQuery(
    ["accept", userId],
    `http://localhost:5000/reqAccept/${userId}`
  );

  const { refetch: refetchPending, data: pendingInfo = [] } = useCustomQuery(
    ["req", userId],
    `http://localhost:5000/getReqPending/${userId}`
  );

  const { refetch: refetchReq, data: requestInfo = [] } = useCustomQuery(
    ["pending", userId],
    `http://localhost:5000/sendReqPending/${userId}`
  );

  useEffect(() => {
    refetchAccept();
    refetchReq();
    refetchPending();
    refetchProposal();
  }, [userId]);

  const refetch = () => {
    refetchAccept();
    refetchProposal();
    refetchReq();
    refetchPending();
  };

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Pendings</Tab>
          <Tab>Accept</Tab>
          <Tab>Request Sent</Tab>
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
