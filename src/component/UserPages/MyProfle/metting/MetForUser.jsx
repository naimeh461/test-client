import ShowMet from "./ShowMet";
import useMyData from "../../../../Hooks/useMyData";

const MetForUser = () => {
  const [userInfo] = useMyData();

  return (
    <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center px-5 py-3">
        <p className="font-alice text-[25px] ">Meeting</p>
      </div>
      <hr className="border border-[#C3CAD5]" />
      <div className="p-4">
        <div className="flex gap-3 flex-wrap">
          <div className="bg-[#F0F2F5] py-3 px-4 rounded-2xl text-[#536279] text-base">
            <ShowMet partnerUser={userInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetForUser;
