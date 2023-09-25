import { useEffect, useState } from "react";
import axios from "axios";
import useMyData from "../../../../Hooks/useMyData";
import { performAction } from "../../../../utilities/utilities";

const RelationSts = ({ partnerUser }) => {
  const [userInfo] = useMyData();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://soulmates-server.vercel.app/disableRltn/${userInfo._id}/${partnerUser?._id}`
      )
      .then((response) => {
        if (response.data.userId) {
          setDisable(true);
        }
      });
  }, [partnerUser, userInfo]);

  const handleRelation = () => {
    const reqRltn = {
      favId: partnerUser?._id,
      favUser: partnerUser?.name,
      favImg: partnerUser?.profileImage,
      status: "pending",
    };

    performAction(
      userInfo._id,
      "showRelation",
      "takeRltnPsn",
      "setReqRelation",
      reqRltn,
      () => {
        setDisable(true);
      }
    );
  };

  const handleDelRelation = () => {
    const unfollow = {
      favId: partnerUser?._id,
      favUser: partnerUser?.name,
      favImg: partnerUser?.profileImage,
    };
    axios
      .put(
        `https://soulmates-server.vercel.app/delRltn/${userInfo._id}`,
        unfollow
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setDisable(false);
        }
      });
  };

  return (
    <div className="select-none">
    {disable ? (
      <button
        onClick={handleDelRelation}
        className="xl:py-4 xl:px-4 py-2 px-2 outline  text-red-500  rounded-full outline-2 outline-red-500 outline-offset-0 "
      >
        Cancel Request
      </button>
    ) : (
      <button
        onClick={handleRelation}
        className="xl:py-4 xl:px-4 py-2 px-2 bg-[#2F9D54] text-[#F0F2F5] rounded-full"
      >
        Relationship Request
      </button>
    )}
  </div>
  );
};

export default RelationSts;