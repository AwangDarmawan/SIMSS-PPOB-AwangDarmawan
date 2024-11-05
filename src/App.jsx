import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Registrasi from "./Pages/Registrasi";
import Home from "./Pages/Home";
import Profil from "./Pages/Profil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Topup from "./Pages/Topup";
import Pembayaran from "./Pages/Pembayaran";
import {ProviderBalance} from "./ContextApi/Balance";
import HistoriTransaksi from "./Pages/HistoriTransaksi";


function App() {
  return (
    <>
    <ProviderBalance>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrasi" element={<Registrasi />} />
          <Route path="/home" element={<Home />} />
          <Route path="/akun" element={<Profil />} />
          <Route path="/topup" element={<Topup/>} />
          <Route path="/pembayaran/:service_code" element={<Pembayaran/>} />
          <Route path="/histori" element={<HistoriTransaksi/>} />
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
      </ProviderBalance>
    </>
  );
}

export default App;