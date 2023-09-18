import { Link } from "react-router-dom";

const ListPanel = ({ data, disable, user, datatype, onDelete, onAccept }) => {
  return (
    <>
      {data?.length > 0 ? (
        <>
          {data?.map((item) => (
            <div
              className="flex items-center space-x-4 p-4 border-b border-gray-300"
              key={item.metId}
            >
              <div className="flex-shrink-0">
                <img
                  src={item.profileImage}
                  className="h-12 w-12 rounded-full"
                  alt={`Profile of ${item.name}`}
                />
              </div>
              <Link to={`/profile/${item._id}`}>
                <div className="flex-grow">
                  <p className="text-lg font-medium text-gray-800">
                    {item.name}
                  </p>
                </div>
              </Link>
              <div className="flex-grow">
                {item.setBy === user &&
                datatype !== "accept" &&
                datatype !== "reject" ? (
                  <button
                    disabled={disable}
                    onClick={() => onDelete(item.metId)}
                    className="bg-red-500 text-white px-3 py-1 rounded-full"
                  >
                    Delete
                  </button>
                ) : (
                  <>
                    {datatype !== "accept" && datatype !== "reject" && (
                      <>
                        <button
                          disabled={disable}
                          onClick={() => onAccept(item.metId)}
                          className="bg-green-500 text-white px-3 py-1 rounded-full me-2"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => onDelete(item.metId)}
                          className="bg-red-500 text-white px-3 py-1 rounded-full"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <span>Nothing To Show</span>
        </>
      )}
    </>
  );
};

export default ListPanel;
