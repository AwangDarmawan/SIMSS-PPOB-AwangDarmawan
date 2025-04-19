import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_BASE_URL;


/* ============ */
/* === Register=== */
/* ============ */

export const registerUser = async (email,first, last,password) => {
    try {
     const response = await axios.post(`${baseUrl}/registration`, {
        email: email,
        first_name: first,
        last_name: last,
        password: password,
      });
      toast.success(response.data.message);
    return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
  };

  
/* ============ */
/* === Login=== */
/* ============ */
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    const token = response.data.data.token;
    localStorage.setItem('Token', token);
   
    toast.success(response.data.message);
    
    return response.data.data;
  } catch (error) {
      toast.error(error.response.data.message);
      console.error(error); 
  }
};


/* ============ */
/* === getProfile=== */
/* ============ */
  export const getProfile = async () => {
    try {
      const token = localStorage.getItem('Token'); 
      const response = await axios.get(`${baseUrl}/profile`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
  };
/* ============ */
/* === getBalance=== */
/* ============ */
  export const getBalance = async () => {
    try {
      const token = localStorage.getItem('Token'); 
      
      const response = await axios.get(`${baseUrl}/balance`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      
      
      return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
  };

  /* ============ */
/* === getService=== */
/* ============ */
export const getServices = async () => {
  try {
    const token = localStorage.getItem('Token'); 
    
    const response = await axios.get(`${baseUrl}/services`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
   
    return response.data;
  } catch (error) {
      
  }
};

 /* ============ */
/* === getBanner=== */
/* ============ */
export const getBanner = async () => {
  try {
    const token = localStorage.getItem('Token'); 
    
    const response = await axios.get(`${baseUrl}/banner`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
      
  }
};
/* ============ */
/* === Post Topup=== */
/* ============ */
export const postTopup = async (amount) => {
  try {
    const token = localStorage.getItem('Token'); 
    if (typeof amount !== 'number' || amount < 10000 || amount > 1000000) {
      throw new Error('Jumlah harus antara 10.000 hingga 1.000.000.');
    }
    const response = await axios.post(`${baseUrl}/topup`,{ top_up_amount: amount }, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    toast.success(response.data.message);
    
    return response.data;
  } catch (error) {
    
    toast.error(error.response.data.message);
    throw error;
  }
};
/* ============ */
/* === Post Transaksi=== */
/* ============ */
export const PostTransaksi = async (service_code, nominal) => {
  try {
    const token = localStorage.getItem('Token');
    const response = await axios.post(
      `${baseUrl}/transaction`,
      {
        service_code: service_code, 
        nominal: nominal, 
        transaction_type: "PAYMENT" 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    toast.success(response.data.message);
    
    return response.data;
  } catch (error) {
   
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Terjadi kesalahan, silakan coba lagi.");
    }
    throw error;
  }
};

export const getRiwayat = async (offset, limit) => {
  try {
    const token = localStorage.getItem('Token'); 
    
    const response = await axios.get(`${baseUrl}/transaction/history`, {
      headers: {
        Authorization: `Bearer ${token}` 
      },
      params: {
        offset,
        limit,
      },
    });
   
    return response.data;
  } catch (error) {
      toast.error(error.response.data.message);
  }
};
/* ============ */
/* === PutUpdate=== */
/* ============ */


export const updateProfile = async (DataApi) => {
  try {
    const token = localStorage.getItem('Token'); 
    const response = await axios.put(`${baseUrl}/profile/update`, DataApi, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    toast.success(response.data.message)
    
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    toast.error(error.response.data.message);
    throw error;
  }
};

export const uploadProfileImage = async (formData) => {
  const token = localStorage.getItem('Token');
  try {
    const response = await axios.put(`${baseUrl}/profile/image`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
   
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; 
  }
};

 