import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getProfile = async () => {
    try {
      const token = localStorage.getItem('Token'); 
      const response = await axios.get(`${baseUrl}/profile`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      console.error(error.response.data.message);
      throw error;
    }
  };
