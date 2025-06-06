import React, { useContext, useState } from 'react'
import { getBalance, postTopup } from '../Service/Api'
import { toast } from "react-toastify";
import { ContexBalance } from '../ContextApi/Balance';


const CardTopUp = () => {
  const { setDataBalance } = useContext(ContexBalance);
    const [amount, setAmount] = useState('');
    

    const handleTopUp = async () => {
     
        const amountNumber = parseFloat(amount); 
        if (isNaN(amountNumber) || amountNumber < 10000 || amountNumber > 1000000) {
          toast.error('Nominal harus antara 10.000 hingga 1.000.000.');
          return;
        }
    
        try {
          await postTopup(amountNumber); 
          setAmount(''); 
          const updatedBalance = await getBalance();
          setDataBalance(updatedBalance.data);
        } catch (error) {
          console.error('Error during top-up:', error);
        }
      };

      

      const handleChange = (e) => {
        setAmount(e.target.value);
      };

  return (
    <> 
    <div className='container'>
    <span >Silakan masukan</span>
    <h4 className='fw-bold'>Nominal Top Up</h4>
      <div className="row my-5">
        <div className='col-lg-7 col-md-7 col-12 me-1'>
            <input className='border-2 border-secondary-subtle' 
            type="text"
            placeholder="Masukan nominal TopUp"
            style={{ height: "50px", width: "100%"}}
            value={amount} 
            onChange={handleChange}
            />

            <button onClick={handleTopUp}
            className=' my-4 border-0 fw-bold text-white'
             style={{ background: "#f75539", height: "50px", width: "100%"}}
             >Top Up</button>
        </div>

        <div className='col-lg-4 col-md-4 col-12 ' >
        <input 
            className='border-2 border-secondary-subtle me-3  text-center my-2 ' 
            type="text"
            placeholder="Rp.10.000"
            style={{ height: "50px", width: "150px" }}  
            readOnly
            />
             <input 
            className='border-2 border-secondary-subtle text-center my-2 me-3 ' 
            type="text"
            placeholder="Rp.20.000"
            style={{ height: "50px", width: "150px" }}  
            readOnly
            />
             <input 
            className='border-2 border-secondary-subtle text-center my-2' 
            type="text"
            placeholder="Rp.30.000"
            style={{ height: "50px", width: "150px" }}  
            readOnly
            />
             <input 
            className='border-2 border-secondary-subtle me-3  text-center my-2 ' 
            type="text"
            placeholder="Rp.100.000"
            style={{ height: "50px", width: "150px" }}  
            readOnly
            />
             <input 
            className='border-2 border-secondary-subtle text-center my-2 me-3 ' 
            type="text"
            placeholder="Rp.250.000"
            style={{ height: "50px", width: "150px" }}  
            readOnly
            />
             <input 
            className='border-2 border-secondary-subtle text-center my-2' 
            type="text"
            placeholder="Rp.500.000"
            style={{ height: "50px", width: "150px" }}  
            readOnly
            />
        </div>
      </div>
      </div>
    </>
  )
}

export default CardTopUp
