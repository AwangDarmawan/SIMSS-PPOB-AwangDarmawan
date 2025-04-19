import { useContext, useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import "../Style/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import Ilus from '../assets/Illustrasi Login.png'
import key from '../assets/key.png'
import { getBalance, loginUser } from "../Service/Api";
import { ContexBalance } from '../ContextApi/Balance';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setDataBalance } = useContext(ContexBalance);
 
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      localStorage.setItem("token", response.token); 
      const updatedBalance = await getBalance();
      setDataBalance(updatedBalance.data)
      navigate("/home"); 
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
    
      <div className="auth-section">
        <div className="row auth-wrapper">
          <div className=" col-md-7 d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
            <div className="d-flex justify-content-center align-items-center my-3 gap-2">
                    <img src={logo} alt="logo" />
                    <h3 className="txt-sims">SIMSS PPBO</h3>
                 </div>
              <h3 className="txtmasuk font-bold text-center ">Masuk atau buat akun <br/>
                 untuk memulai</h3>
                 
              <form onSubmit={loginHandler} className="fm my-5 ">
                  <div className="input-form-user border my-4 gap-2">
                  <i className="bi bi-at ps-3"></i>
                    <input
                      type="email"
                      className="form-control-login py-2"
                      placeholder="masukan email anda"
                      value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-form-user  border d-flex gap-3  ps-3 ">
                  <img  src={key} alt="key" className ="key " />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control-login py-2"
                      placeholder="masukan password anda"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="icon-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlashFill/> : <EyeFill/>}</i>
                  </div>
                  
                <div className="d-grid mb-1 mt-4">
                  <button className="btn btn-masuk " type="submit">
                    Masuk
                  </button>
                </div>
              </form>
              <span className="txt-belum d-flex justify-content-center">belum punya akun? registrasi <Link className="link" to="/registrasi">disini</Link></span>
            </div>
          </div>
          <div className="col-md-5 account-block">
            <img src={Ilus} alt="" className="Ilus" />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;
