import React, { useEffect, useState } from 'react';
import { getServices } from '../Service/Api';
import { Link } from 'react-router-dom';



function CardHome2() {
  const [servicesData, setServicesData] = useState([]);

  const fetchServices = async()=>{
    const objek = await getServices();
    setServicesData(objek.data)
  }
  
  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <>
    
    <section className='container'>
        <div className='row item-center'>
        {servicesData.map ((item)=> (
        <div className='col-lg-1 col-md-2 col-sm-4  text-center' key={item.service_code}>
          <Link to={`/pembayaran/${item.service_code}`} state={{ 
                  name: item.service_name,
                  tariff: item.service_tariff, 
                  icon: item.service_icon,
                  
              }}>
            <img src={item.service_icon} alt="" />
            </Link>
            <div className='d-flex flex-column' style={{ overflow:'hidden' }}>
            
            <span>{item.service_code}</span>
            
            </div>
            </div>
          ))}
           

        </div>
        
    </section>
      
    </>
  )
}

export default CardHome2
