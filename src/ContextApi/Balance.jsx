

import { createContext, useEffect, useState } from "react";
import { getBalance } from "../Service/Api";


const ContexBalance = createContext(0);

const ProviderBalance = ({ children }) => {
  
  const [dataBalance, setDataBalance] = useState(0);

  const fetchBalance = async () => {
    const nilai = await getBalance();
  
    setDataBalance(nilai.data);
  
};


  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <ContexBalance.Provider value={{ dataBalance, setDataBalance }}>
      {children}
    </ContexBalance.Provider>
  );
};

export { ContexBalance, ProviderBalance };
