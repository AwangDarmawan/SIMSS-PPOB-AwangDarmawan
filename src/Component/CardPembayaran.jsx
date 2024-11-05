import { useLocation, useParams } from "react-router-dom";
import { PostTransaksi } from "../Service/Api";
import { useState } from "react";
import { toast } from "react-toastify";

function CardPembayaran() {
  const { service_code } = useParams();
  const location = useLocation();
  const { icon, name, tariff } = location.state || {};
  const [datatransaksi, setDataTransaksi] = useState('');

  const handleaddTransaksi = async () => {
   
    const amountNumber = parseFloat(datatransaksi);
    const tariffNumber = parseFloat(tariff);
    
    if (isNaN(amountNumber) || amountNumber < tariffNumber) {
      toast.error(`Nominal harus lebih dari atau sama dengan ${tariff}`);
      return; 
    }

    try {
      const objek = await PostTransaksi(service_code, datatransaksi); 
      setDataTransaksi(''); 
      console.log("Data Transaksi:", objek);
    } catch (error) {
      console.error("Error saat melakukan transaksi:", error);
      
    }
  };

  const handleChange = (e) => {
    setDataTransaksi(e.target.value);
  };

  return (
    <>
      <div className='container'>
        <h5>Pembayaran</h5>
        {tariff}
        <div className='d-flex'>
          <img src={icon} alt="" style={{ height: "50px", width: "50px" }} />
          <h4 className='fw-bold py-2 ms-3'>{service_code} {name}</h4>
        </div>
        <div className="my-5">
          <input
            className='border-2 border-secondary-subtle'
            type="text"
            placeholder="Masukan nominal TopUp"
            style={{ height: "50px", width: "100%" }}
            value={datatransaksi} 
            onChange={handleChange} 
          />
          <button
            onClick={handleaddTransaksi} 
            className='my-4 border-0 fw-bold text-white'
            style={{ background: "#f75539", height: "50px", width: "100%" }}
          >
            Top Up
          </button>
        </div>
      </div>
    </>
  );
}

export default CardPembayaran;