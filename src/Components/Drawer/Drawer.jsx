import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Slices/authSlice";

function Drawer() {
  const { data } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
        <h1>Welcome, {data.email}!</h1>
        <label htmlFor="my-drawer" className="text-4xl font-bold">
          <GiHamburgerMenu />
        </label>
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
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
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
                <button className="btn btn-outline px-8">Profile</button>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
