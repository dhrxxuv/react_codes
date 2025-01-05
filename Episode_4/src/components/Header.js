
export const Header = () => {
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
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header

