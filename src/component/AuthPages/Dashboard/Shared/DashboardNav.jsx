import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import noProfile from "../../../../assets/other/blank.png";
import { Link, useNavigate } from "react-router-dom";
const DashboardNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/authoritysignup");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-100  p-2 text-right flex justify-end border-s-2 ">
      <div>
        {user ? (
          <div className="flex gap-2 items-center">
            <div className="hidden md:flex navbar-end me-3">
              <button
                onClick={handleLogOut}
                className="btn btn-sm text-red-600 rounded-s-full rounded-b-full text-xs "
              >
                Logout
              </button>
            </div>
            <Link to="/myProfile">
              <div className="avatar online">
                <div className="w-11 rounded-full">
                  {user?.photoURL ? (
                    <img
                      className="rounded-full w-10 mr-3"
                      src={user?.photoURL}
                    />
                  ) : (
                    <img
                      src={noProfile}
                      alt="Shoes"
                      className="rounded-full w-10 mr-3"
                    />
                  )}
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="p-2">
            <Link to="/authoritysignin">
              <button className="btn btn-sm text-red-600 rounded-s-full rounded-b-full text-xs ">
                Join Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNav;
