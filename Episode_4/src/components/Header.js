import { useState } from "react";
import { Link } from "react-router"; // Make sure to import from "react-router-dom" for routing


export const Header = () => {
  const [buttontext, setButtontext] = useState('Login');

  const handleClick = (value) => {
    if (value === 'Login') {
      setButtontext('Logout');
    } else {
      setButtontext('Login');
    }
  };

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://imgs.search.brave.com/gNn_V0Bu6eSO-ep8OOpQ2PQ2zawEDgE6dNZRRWODeqI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNTM3MDM2/NjMtZjJlYS00ZTgx/LThiODktNDQ5NjVi/MDczODAwL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0y/JnY9NjM4NDMyNzE2/Mjc2ODcwMDAw.jpeg"
          alt="Logo"
        />
      </div>
      <div className="nav-item">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
          </li>
          <button
            style={{
              padding: "0 20px",
              cursor: "pointer"
            }}
            onClick={() => handleClick(buttontext)}
          >
            {buttontext}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
