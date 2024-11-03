import "../Style/Nav.css"
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png';



const Nav = () => {
  

  return (
    <>
      <nav className="navbar-wrapper border-bottom container">
        <Link to={"/home"} className="text-decoration-none">
          <div className="navbar-brand ">
            <img src={logo} alt="img"className="logo1" />
            <label className="txt-Sims">SIMS PPBO</label>
          </div>
        </Link>
        <div className="button-menu d-flex align-items-center">
          <Link to={"/notifikasi"} className="text-decoration-none">
            <label className="label">Top Up</label>
          </Link>
          <Link to={"/akun"} className="text-decoration-none">
          <label className="label">Transaction</label>
          </Link>
          <Link to={"/akun"} className="text-decoration-none">
          <label className="label">Akun</label>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
