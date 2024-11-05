

import CardPembayaran from '../Component/CardPembayaran'
import Nav from '../Component/Nav'
import CardHome from '../Component/CardHome'
// import React, { useEffect, useState } from 'react'
// import { getBalance } from '../Service/Api'


function Pembayaran() {
  // const [dataBalance, setDataBalance] = useState(0);
  // const fetchBalance = async()=>{
  // const nilai = await getBalance();
  //   setDataBalance(nilai.data)
  // }
  
  // useEffect(() => {
  //   fetchBalance();
  // }, []);

  return (
    <>
      <Nav/>
      <CardHome />
       <CardPembayaran/>
    
    </>
  )
}

export default Pembayaran
