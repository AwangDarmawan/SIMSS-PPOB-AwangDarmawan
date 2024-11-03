import { useState } from "react";
import { EyeFill, EyeSlashFill} from "react-bootstrap-icons";
import "../Style/Login.css";
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import Ilus from '../assets/Illustrasi Login.png'
import key from '../assets/key.png';
import { registerUser } from "../Service/ApiAuth";
import { toast } from 'react-toastify';



const Registrasi = () => {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const fethRegist = async (e) => {
    e.preventDefault();
    if (password !== confpassword) {
      toast.error("Password dan konfirmasi password tidak sama");
      return;
    }
    await registerUser(email, first, last, password);
   
  }

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
              <h3 className="txtmasuk font-bold text-center ">Lengkapi Data Untuk<br/>
                 Membuat Akun </h3>
                 
              <form  onSubmit={fethRegist} className="fm my-5 ">
                  <div className="input-form-user border my-4 gap-2">
                  <i className="bi bi-at ps-3"></i>
                    <input
                      type="email"
                      className="form-control-login py-2"
                      placeholder="masukan email anda"
                      value={email}
                     onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-form-user border my-4 gap-2">
                  <i className="bi bi-person-fill ps-3"></i> 
                    <input
                      type="text"
                      className="form-control-login py-2"
                      placeholder="nama depan"
                      value={first}
                     onChange={(e) => setFirst(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-form-user border my-4 gap-2">
                  <i className="bi bi-person-fill ps-3"></i> 
                    <input
                      type="text"
                      className="form-control-login py-2"
                      placeholder="nama belakang"
                      value={last}
                     onChange={(e) => setLast(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-form-user  border gap-2 ps-3">
                  <img  src={key} alt="key" className ="key" />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control-login py-2"
                      placeholder="buat password"
                      value={password}
                     onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <i className="icon-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlashFill/> : <EyeFill/>}</i>
                  </div>

                  <div className="input-form-user  border gap-2 my-4 ps-3">
                  <img  src={key} alt="key" className ="key" />
                    <input
                
                      type={showPassword ? "text" : "password"}
                      className="form-control-login py-2"
                      placeholder="Konfirmasi password "
                      value={confpassword}
                     onChange={(e) => setConfPassword(e.target.value)}
                      required
                    />
                    <i className="icon-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlashFill/> : <EyeFill/>}</i>
                  </div>
                  
                <div className="d-grid mb-5 mt-4">
                  <button className="btn btn-masuk " type="submit">
                    Registrasi
                  </button>
                </div>
                
              </form>
              <span className="txt-belum d-flex justify-content-center">Sudah punya akun? Login <Link to="/" className="link">disini</Link></span>
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

export default Registrasi;
