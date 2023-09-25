import useMyData from "../../../../Hooks/useMyData";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  unFlwDelAction,
  useCustomQuery,
  useRelationInfo,
} from "../../../../utilities/utilities";
import Swal from "sweetalert2";

const Follow = () => {
  const [userInfo] = useMyData();
  const { refetchRelation } = useRelationInfo(userInfo._id);

  const { refetch, data: reqRltnShip = [] } = useCustomQuery(
    ["reqRltnShip", userInfo._id],
    `https://soulmates-server.vercel.app/shwGetReqRltn/${userInfo._id}`
  );

  const handleDelRelation = (userId) => {
    const unfollow = {
      favId: userInfo._id,
    };
    unFlwDelAction(userId, unfollow, refetch);
    Swal.fire("Deleted", "Wait a few second", "success");
  };

  const handleAccept = (userId) => {
    const setCouple = {
      userId: userId,
      partner: userInfo._id,
    };

    axios
      .post(`http://localhost:5000/setCouple`, setCouple)
      .then((response) => {
        if (response.data.insertedId) {
          const unfollow = {
            favId: userInfo._id,
          };
          refetchRelation();
          reqRltnShip.map((req) =>
            unFlwDelAction(req.userId, unfollow, refetch)
          );
          Swal.fire("Good job", "Wait a few second for changes", "success");
        }
      });
  };

  return (
    <>
      {reqRltnShip?.length > 0 ? (
        <div className="mb-5 border border-[#C3CAD5] rounded-2xl overflow-hidden">
          <div className="flex justify-between items-center px-5 py-3">
            <p className="font-alice text-[25px] ">Relationship Notify</p>
          </div>
          <hr className="border border-[#C3CAD5]" />
          <div className="p-4">
            <div className="bg-[#F0F2F5] py-3 px-4 rounded-2xl text-[#536279] text-base place-items-center">
              {/* dfgfd */}
              {reqRltnShip.length > 0 ? (
                <>
                  {reqRltnShip.map((reqRltn) => (
                    <div
                      className="bg-white p-2 shadow-md mb-2 flex items-center gap-5"
                      key={reqRltn._id}
                    >
                      <Link to={`/profile/${reqRltn.userId}`}>
                        <div className="avatar">
                          <div className="w-20 rounded-full">
                            <img src={reqRltn.userImg} />
                          </div>
                        </div>
                      </Link>
                      <div className=" w-full">
                        <div className="mb-2">
                          <Link to={`/profile/${reqRltn.userId}`}>
                            <p className="text-gray-800 font-bold">
                              {reqRltn.userName}
                            </p>
                          </Link>
                          <small className="text-gray-600">
                            Sent you a relationship request
                          </small>
                        </div>
                        <div>
                          <button
                            onClick={() => handleAccept(reqRltn.userId)}
                            className="bg-green-500 text-white px-3 py-1 rounded-full me-2"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleDelRelation(reqRltn.userId)}
                            className="bg-red-500 text-white px-3 py-1 rounded-full"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p>Nothing To Show</p>
              )}

              {/* ouhi */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Follow;