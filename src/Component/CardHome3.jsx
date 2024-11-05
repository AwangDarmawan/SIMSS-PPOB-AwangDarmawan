import React, { useEffect, useState } from 'react'
import { getBanner } from '../Service/Api'



function CardHome3() {
  const [BannerData, setBannerData] = useState([]);
  const fetchBanner = async()=>{
    const objek = await getBanner();
    setBannerData(objek.data)
  }
  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
       <section className='container my-4'>
        <span className='fw-bold'>Temukan Promo Menarik</span>
        <div className='row'>
        {BannerData.map ((item)=> (
            <div className='col-lg-3 col-md-4 col-sm-6 categori  rounded py-3 ' key={item.banner_name}>
             
                <img src={item.banner_image} alt=""  />
            </div>
            ))};
        </div>
      </section>
    </>
  )
}

export default CardHome3
