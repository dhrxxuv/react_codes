/* eslint-disable no-unused-vars */
import { usericon } from "../utlis/usericon";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Header = () => {
  const openRef = useRef(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const toggleDropdown = () => {
    openRef.current = !openRef.current;
    document.getElementById("dropdown").style.display = openRef.current ? "block" : "none";
  };

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  console.log("hi")
  return (
    <div className="absolute top-0 left-0 w-full items-center px-8 py-6 bg-gradient-to-b from-black via-transparent z-10 flex justify-between">
      <img className="w-44" src="logo.png" alt="logo" />

      {user && (
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center">
            <img className="w-12 h-12" src={usericon} alt="userlogo" />
          </button>
          <div
            id="dropdown"
            className="absolute right-0 mt-2 w-32 bg-black border border-gray-700 rounded shadow-lg hidden"
          >
            <h3 className="text-white">{`Hi ${user.displayName}`}</h3>
            <button
              onClick={handlesignout}
              className="w-full text-left px-4 py-2 text-white hover:bg-gray-800"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
