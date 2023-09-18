import axios from "axios";
import { formatMetDate } from "../../../../utilities/utilities";

const MetInfo = ({ infoData, actionType, refetch, user }) => {
  const acceptHandle = (delId) => {
    const delMEt = {
      status: "accept",
    };
    axios
      .put(
        `https://soulmates-server.vercel.app/acceptMet/${delId}`,
        delMEt
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const deleteHandle = (delId) => {
    const delMEt = {
      status: "reject",
    };
    axios
      .put(
        `https://soulmates-server.vercel.app/deleteMet/${delId}`,
        delMEt
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  const reviewHandle = (delId) => {
    const delMEt = {
      setby: user,
      status: "proposed",
    };
    axios
      .put(
        `https://soulmates-server.vercel.app/setProposal/${delId}`,
        delMEt
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <>
      {infoData?.length > 0 ? (
        <>
          {infoData?.map((req) => (
            <div
              className="flex items-center space-x-4 p-4 border-b border-gray-300"
              key={req._id}
            >
              <div className="flex-shrink-0">
                <img
                  src={req.profileImage}
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="flex-grow">
                <p className="text-sm font-medium text-gray-800">{req.name}</p>
                <p className="text-sm text-gray-600">
                  {formatMetDate(req.metDate)}
                </p>
              </div>
              <div className="flex-shrink-0 space-x-2">
                {actionType === "accept" && (
                  <>
                    <div className="grid grid-rows-2 gap-2">
                      <button
                        disabled
                        className="bg-green-500 text-white text-sm px-3 py-1 rounded-full"
                      >
                        Accepted
                      </button>
                      <button
                        onClick={() => reviewHandle(req.metId)}
                        className="bg-green-500 text-white text-sm px-3 py-1 rounded-full"
                      >
                        Want Married?
                      </button>
                    </div>
                  </>
                )}
                {actionType === "request" && (
                  <button
                    onClick={() => deleteHandle(req.metId)}
                    className="bg-red-500 text-white px-3 py-1 rounded-full"
                  >
                    Delete
                  </button>
                )}
                {actionType === "pending" && (
                  <>
                    <button
                      onClick={() => acceptHandle(req.metId)}
                      className="bg-green-500 text-white px-3 py-1 rounded-full"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => deleteHandle(req.metId)}
                      className="bg-red-500 text-white px-3 py-1 rounded-full"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <p>
            Nothing To Show for{" "}
            {actionType[0].toUpperCase() + actionType.slice(1)}
          </p>
        </>
      )}
    </>
  );
};

export default MetInfo;
