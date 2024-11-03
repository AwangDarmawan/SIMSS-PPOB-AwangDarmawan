import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Registrasi from "./Pages/Registrasi";
import Home from "./Pages/Home";
import Profil from "./Pages/Profil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrasi" element={<Registrasi />} />
          <Route path="/home" element={<Home />} />
          <Route path="/akun" element={<Profil />} />
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
     
    </>
  );
}

export default App;