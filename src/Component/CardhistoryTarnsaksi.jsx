import React, { useEffect, useState } from 'react'
import "../Style/CardHistori.css"
import { getRiwayat } from '../Service/Api';


const CardhistoryTarnsaksi = () => {
    const [riwayatdata,setRiwayatData] = useState([]);
    const limit = 5;
    const [offset, setOffset] = useState(0);
    
    const fetchRiwayat = async (currentOffset) => {
      try {
          const result = await getRiwayat(currentOffset, limit); 
          if (result?.data?.records && Array.isArray(result.data.records)) {
              
              setRiwayatData((prevData) => [...prevData, ...result.data.records]);
          } else {
              console.error("Data tidak valid:", result.data);
          }
      } catch (error) {
          console.error("Gagal mengambil data riwayat:", error);
      }
  };

  const handleShowMore = () => {
    setOffset((prevOffset) => prevOffset + limit); 
};

      useEffect(() => {
        fetchRiwayat(offset);
      }, [offset]);
  return (
    <>
      <div className='container'>
        <h5 className='fw-bold'>Semua Transaksi</h5>
        {riwayatdata.length > 0 ? (
          riwayatdata.map((item,index) => (
        <div key={`${item.total_amount}-${index}`}>
        <div className="my-1 txt-Rp border px-5 pt-3 d-flex justify-content-between  rounded-1" >
        <div className='flex-column'>
         <h3 className={`my-0 ${item.transaction_type === 'TOPUP' ? 'text-success' : 'text-danger'}`}>
                 {item.transaction_type === 'TOPUP' ? `+Rp.${item.total_amount} ` : `-Rp.${item.total_amount} `}
         </h3>
            <span className='text-secondary txt-tgl ms-2'>{item.created_on}</span>
                
          </div>
          <span className='text-black font-bold  txt-tgl '>{item.transaction_type}</span>
        </div>
       
        </div>
        ))
           ) : (
            <p>Belum Ada Transaksi</p>
        )}
            <span className="d-flex justify-content-center mt-3 text-danger" onClick={handleShowMore}>
                    Show More
                </span>
            
      </div>
    </>
   
  )
}

export default CardhistoryTarnsaksi
