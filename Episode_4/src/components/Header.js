import { useState } from "react";
import { Link } from "react-router"; // Make sure to import from "react-router-dom" for routing
import useOnlineCheck from "../utils/useOnlineCheck";

export const Header = () => {
  const [buttontext, setButtontext] = useState("Login");
  const onlineStatus = useOnlineCheck();

  const handleClick = (value) => {
    if (value === "Login") {
      setButtontext("Logout");
    } else {
      setButtontext("Login");
    }
  };

  return (
    <div className="header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#f5f5f5", borderBottom: "1px solid #ccc" }}>
      <div>
        <img
          className="logo"
          src="https://imgs.search.brave.com/gNn_V0Bu6eSO-ep8OOpQ2PQ2zawEDgE6dNZRRWODeqI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNTM3MDM2/NjMtZjJlYS00ZTgx/LThiODktNDQ5NjVi/MDczODAwL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0y/JnY9NjM4NDMyNzE2/Mjc2ODcwMDAw.jpeg"
          alt="Logo"
          style={{ height: "50px", width: "50px" }}
        />
      </div>
      <div className="nav-item" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", alignItems: "center", margin: 0, gap: "20px" }}>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: "none", color: "black" }}>About</Link>
          </li>
        </ul>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => handleClick(buttontext)}
        >
          {buttontext}
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: onlineStatus ? "green" : "red"
            }}
          ></span>
          <span>{onlineStatus ? "Online" : "Offline"}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
