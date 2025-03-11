/* eslint-disable no-unused-vars */
import { usericon } from "../utlis/usericon";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "./Redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const openRef = useRef(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const toggleDropdown = () => {
    openRef.current = !openRef.current;
    document.getElementById("dropdown").style.display = openRef.current ? "block" : "none";
  };

  const handlesignout = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full px-6 py-4 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img className="w-32 md:w-44" src="logo.png" alt="Netflix Logo" />
      {user && (
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
            <img className="w-8 h-8 md:w-10 md:h-10 rounded" src={usericon} alt="User Icon" />
          </button>
          <div
            id="dropdown"
            className="absolute right-0 mt-2 w-40 bg-[#141414] border border-[#333] rounded shadow-lg hidden"
          >
            <h3 className="text-white text-sm px-4 py-2">{`Hi, ${user.displayName}`}</h3>
            <button
              onClick={handlesignout}
              className="w-full text-left px-4 py-2 text-[#e5e5e5] text-sm hover:bg-[#333] transition duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;