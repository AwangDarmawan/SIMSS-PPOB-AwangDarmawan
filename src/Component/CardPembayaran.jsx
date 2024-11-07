import { useLocation, useParams } from "react-router-dom";
import { getBalance, PostTransaksi } from "../Service/Api";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ContexBalance } from "../ContextApi/Balance";

function CardPembayaran() {

  const { service_code } = useParams();
  const location = useLocation();
  const { icon, name, tariff } = location.state || {};
  const [datatransaksi, setDataTransaksi] = useState('');
  const { setDataBalance } = useContext(ContexBalance);
  const [loading, setLoading] = useState(false);

  const handleaddTransaksi = async () => {
    if (loading) return; 
    setLoading(true);
    const amountNumber = parseFloat(datatransaksi);
    const tariffNumber = parseFloat(tariff);
    
    if (isNaN(amountNumber) || amountNumber < tariffNumber) {
      toast.error(`Nominal harus lebih dari atau sama dengan ${tariff}`);
      return; 
    }

    try {
      await PostTransaksi(service_code, datatransaksi); 
      setDataTransaksi(''); 
      
      const updatedBalance = await getBalance();
      setDataBalance(updatedBalance.data);
     
    } catch (error) {
      console.error("Error saat melakukan transaksi:", error);
      
    }
    setLoading(false);
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
            Bayar
          </button>
        </div>
      </div>
    </>
  );
}

export default CardPembayaran;