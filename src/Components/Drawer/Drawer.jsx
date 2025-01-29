import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Slices/authSlice";

function Drawer() {
  const { data } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role || "admin");

  const isloggedIn = useSelector((state) => state?.auth?.isloggedIn);
  const navigate = useNavigate();
  const handleClosing = () => {
    const drawerCheckbox = document.getElementById("my-drawer");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("logout Button is prssed");
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-between">
        {/* Page content here */}

        <label htmlFor="my-drawer" className="text-4xl font-bold">
          <GiHamburgerMenu />
        </label>
        <div className="text-orange-500 text-wrap hidden sm:block">
          Welcome!!! {data.email}
        </div>
        <div>
          <FaRegUserCircle className="text-4xl" />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className=" menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
          {/* Sidebar content here */}
          <MdCancel className="ml-60 text-4xl" onClick={handleClosing} />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courselist">Courses</Link>
          </li>
          <li>
            <Link to="/contactPage">Contact Us</Link>
          </li>
          {isloggedIn && (
            <li>
              <Link to="/contactPage">My Courses</Link>
            </li>
          )}
          {isloggedIn && role === "admin" && (
            <li>
              <Link to="/create-course">Create Course</Link>
            </li>
          )}
          <div className="buttons flex gap-2 px-2">
            {!isloggedIn ? (
              <>
                <button
                  className="btn btn-outline px-8"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="btn btn-outline px-8"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline px-8" onClick={handleLogout}>
                  Logout
                </button>
                <button
                  onClick={() => navigate("/profile")}
                  className="btn btn-outline px-8"
                >
                  Profile
                </button>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
