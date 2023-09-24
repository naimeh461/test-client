import { Link } from "react-router-dom";
import profile from "../../../../assets/chat/profile.svg";
import FixedMet from "../../MyProfle/metting/FixedMet";
import RelationSts from "../../MyProfle/relationSts/RelationSts";

const MeetAndProposal = ({ friend }) => {

  return (
    <div>
      <div className="col-span-3 ">
        <img
          className="w-[150px] h-[150px] rounded-full object-cover object-top mx-auto mt-8"
          src={friend?.profileImage}
          alt=""
        />
        <Link to={`/profile/${friend?._id}`}>
          <p className="text-[#434656] text-[28px] text-center font-alice mt-4 dark:text-white">
            {friend?.name}
          </p>
        </Link>
        <p className="text-[#4ECA77] font-lato text-[16px] text-center">
          Online
        </p>
        <div className=" flex  mx-auto gap-4 justify-center mt-3">
          <img className="p-1 rounded-full bg-red-200" src={profile} alt="" />
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <FixedMet partnerUserID={friend?._id} />
          <RelationSts partnerUser={friend} />
        </div>
      </div>
    </div>
  );
};

export default MeetAndProposal;
