import useMyData from "../../../../Hooks/useMyData";
import {
  updateStatus,
  useCustomQuery,
  useProposalInfo,
} from "../../../../utilities/utilities";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListPanel from "./ListPanel";
import { useState } from "react";

const Proposal = () => {
  const [userInfo] = useMyData();
  const [disable, setDisable] = useState(false);
  const { refetchProposal, proposal } = useProposalInfo(userInfo._id);

  const { refetch: refetchAccept, data: accept = [] } = useCustomQuery(
    ["acceptt", userInfo._id],
    `http://localhost:5000/getAccept/${userInfo._id}`
  );

  const { refetch: refetchReject, data: reject = [] } = useCustomQuery(
    ["reject", userInfo._id],
    `http://localhost:5000/getReject/${userInfo._id}`
  );

  const refetchFunc = () => {
    refetchProposal();
    refetchReject();
    refetchAccept();
  };

  const deleteHandle = (id) => {
    setDisable(true);
    updateStatus("deleteMet", id, "proposal reject", refetchFunc);
  };

  const acceptHandle = (id) => {
    updateStatus("acceptMet", id, "proposal accept", refetchFunc);
  };

  return (
    <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center px-5 py-3">
        <p className="font-alice text-[25px] ">Proposal</p>
      </div>
      <hr className="border border-[#C3CAD5]" />
      <div className="p-4">
        <div className="bg-[#F0F2F5] py-3 px-4 rounded-2xl text-[#536279] text-base place-items-center">
          <Tabs>
            <TabList>
              <Tab>Pendings</Tab>
              <Tab>Accept</Tab>
              <Tab>Reject</Tab>
            </TabList>

            <TabPanel>
              <ListPanel
                data={proposal}
                disable={disable}
                user={userInfo._id}
                datatype={"proposal"}
                onDelete={deleteHandle}
                onAccept={acceptHandle}
              />
            </TabPanel>

            <TabPanel>
              <ListPanel
                data={accept}
                disable={disable}
                user={userInfo._id}
                datatype={"accept"}
                onDelete={deleteHandle}
                onAccept={acceptHandle}
              />
            </TabPanel>

            <TabPanel>
              <ListPanel
                data={reject}
                disable={disable}
                user={userInfo._id}
                datatype={"reject"}
                onDelete={deleteHandle}
                onAccept={acceptHandle}
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
