import React, { useContext, useEffect } from 'react';
import profil from "../assets/Profile Photo.png";
import { useState } from "react";
import "../Style/CardHome.css";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { getProfile} from '../Service/Api';
import { ContexBalance  } from '../ContextApi/Balance';




const CardHome = () => {
  const {dataBalance} = useContext(ContexBalance)
  const [dataProfile, setDataProfil] = useState({
    email: '',
    first_name: '',
    last_name: '',
    profile_image: '',
  });


  
  const [showPassword, setShowPassword] = useState(false);

  const fetchProfil = async() => {
    const result = await getProfile();
      setDataProfil(result.data);
  };
  useEffect(() => {
    fetchProfil();
  }, []);

  




 
  return (
    <>
    <section className='container'>
      <div className='row '>
        <div className='col-lg-6 col-md-6  col-sm-12  mt-5'>
        
          <img src={ dataProfile.profile_image || profil   } alt="Profile"  className='profil'/>
          <h4 className=' txt-selamat mt-3'>Selamat Datang,</h4>
          <h1 className='txt-nama fw-bold'>{`${dataProfile.first_name} ${dataProfile.last_name}`}</h1>
        </div>
    
        <div className='col-lg-6 col-md-6  col-sm-12 '>
          <div className='btn-saldo  my-5 rounded-4 ps-4 py-4'>
            <p className='txt-saldo fw-bold'>Saldo anda</p>
            <div className='d-flex'>
            <h4 className='fw-bold text-white'>RP</h4>
            <h4 className='text-white ms-2 my-0'>
                  {showPassword ? dataBalance.balance : '••••••••'}
                </h4>
            </div>
            <div className='d-flex mb-5'>
            <span className='text-lihat text-white '>Lihat Saldo</span>
            <i className="icon-show ms-2" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeSlashFill /> : <EyeFill />}
                </i>
                </div>
          </div>
        </div>
      </div>
      
      </section>
    </>
  )
}

export default CardHome

