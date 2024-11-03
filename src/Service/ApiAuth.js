import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_BASE_URL;

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
        console.log("gagal",response)

    }
  };

export const loginUser = async (email, password) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email: email,
        password: password,
      });
      const { token } = response.data.data;
      console.log("Token:", response.data.data); 
      console.log("Response Data:", response.data.message);
      toast.success(response.data.message);
      
      return { token };
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  export const getProfile = async () => {
    try {
      const token = localStorage.getItem('Token'); 
      const response = await axios.get(`${baseUrl}/profile`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      toast.success(response.data.message);
      console.log("SS",response.data)
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("SS",response.error)
    }
  };

//   export const getProfile = async () => {
//     const token = localStorage.getItem('Token'); 
//     if (!token) {
//         toast.error("Token tidak ditemukan. Silakan login terlebih dahulu.");
//         throw new Error("Token tidak ditemukan");
//     }

//     try {
//         const response = await axios.get(`${baseUrl}/profile`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         toast.success(response.data.message);
//         return response.data;
//     } catch (error) {
//         const errorMessage = error.response ? error.response.data.message : "Gagal mengambil data profil";
//         toast.error(errorMessage);
//         console.error("Error fetching profile:", error);
//         throw error; // Menghindari kesalahan `response is not defined`
//     }
// };

  export const updateProfile = async (profileData) => {

    try {
      const token = localStorage.getItem('Token'); 
        const response = await axios.put(`${baseUrl}/profile`, profileData, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        toast.success(response.data.message);
        return response.data; // Kembalikan data respons
    } catch (error) {
      toast.error(error.response.data.message);
       
    }
};