import { formatMetDate, updateStatus } from "../../../../utilities/utilities";
import { Link } from "react-router-dom";

const MetInfo = ({ infoData, actionType, refetch }) => {
  const acceptHandle = (delId) => {
    updateStatus("acceptMet", delId, "accept", refetch);
  };

  const deleteHandle = (delId) => {
    updateStatus("deleteMet", delId, "reject", refetch);
  };

  return (
    <>
      {infoData?.length > 0 ? (
        <>
          {infoData?.map((req) => (
            <div className="w-full  p-4 border-b border-gray-300" key={req._id}>
              <Link to={`/profile/${req._id}`}>
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0">
                    <img
                      src={req.profileImage}
                      className="h-16 w-16 rounded-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-medium text-gray-800">
                      {req.title}
                    </h2>
                    <h1 className="text-xl font-medium text-gray-800">
                      {req.name}
                    </h1>
                    <p className="text-sm font-medium text-gray-800">
                      {formatMetDate(req.metDate)}
                    </p>
                    <p className="text-sm text-gray-600">{req.location}</p>
                  </div>
                </div>
              </Link>
              <div className=" w-full text-lg my-2">{req.descript}</div>
              <div className="flex-shrink-0 space-x-2 text-right">
                {actionType === "accept" && (
                  <>
                    <div className="flex gap-2">
                      <button
                        disabled
                        className="bg-green-500 text-white text-sm px-3 py-1 rounded-full"
                      >
                        Accepted
                      </button>
                      <Link to={`/profile/${req._id}`}>
                        <button className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                          Want Married?
                        </button>
                      </Link>
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