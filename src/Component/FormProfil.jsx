import { ImageAlt } from "react-bootstrap-icons";

import "../Style/FormProfil.css";
import { getProfile, updateProfile, uploadProfileImage } from "../Service/Api";
import { useEffect, useState } from "react";



const FormProfil = () => {
 
  const [isEditing, setIsEditing] = useState(false);
  const [dataProfile, setDataProfil] = useState({
    email: '',
    first_name: '',
    last_name: '',
    profile_image: '',
  });

  const [file, setFile] = useState(null);
  const [originalDataProfile, setOriginalDataProfile] = useState(null);
  
  const fetchProfil = async() => {
    const result = await getProfile();
      setDataProfil(result.data);
      setOriginalDataProfile(result.data); 
  };
  useEffect(() => {
    fetchProfil();
  }, []);


  
  const handleUpdate = async () => {
    try {
      await updateProfile({
        first_name: dataProfile.first_name,
        last_name: dataProfile.last_name,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataProfil((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      
      setDataProfil(originalDataProfile);
    }
    setIsEditing((prev) => !prev);
  };
  
  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === "image/jpeg" || selectedFile.type === "image/png")) {
      setFile(selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const response = await uploadProfileImage(formData);
        if (response.data && response.data.profile_image) {
          setDataProfil((prev) => ({
            ...prev,
            profile_image: response.data.profile_image,
          }));
          console.log("Upload berhasil:", response);
        } else {
          console.error("Data tidak ditemukan dalam response:", response);
        }
      } catch (error) {
        console.error("Gagal mengupload gambar:", error);
        if (error.response) {
          console.error("Response error data:", error.response.data);
          console.error("Response error status:", error.response.status);
        }
      }
    } else {
      alert("Format file tidak didukung. Hanya jpeg dan png yang diperbolehkan.");
      e.target.value = ""; 
    }
  };

  
  
  

  const handleLogout = () => {
    window.location.href = "/"; 
    localStorage.removeItem("Token");
    
  };
  return (
    <>
      <div className="header-border mt-5">
        <div className="berder" >
           <img src={dataProfile.profile_image} alt="Profile" className="img-berder " />
        </div>
        
        
        <label htmlFor="upload-input" className="btn-img">
          <ImageAlt className="icon-img" />
        </label>
       
        <input
          type="file"
          id="upload-input"
          className="visually-hidden"
          onChange={handleFileUpload}
        />
      </div>

      <div className="input-profile">
        <form className="mt-2 ">
          <label className="text-label">Email</label>
          <input type="email" 
           className="form-control fw-bold"
           placeholder="John Doe@gmail.com" 
           value={dataProfile.email}
           readOnly
            />
        

        
          <label className="text-label">Nama Depan</label>
          <input
          name="first_name"
            type="text"
            className="form-control "
            placeholder="nama depan"
            value={ dataProfile.first_name}
            onChange={handleInputChange}
          />
       
        
          <label className="text-label">Nama Belakang</label>
          <input
          name="last_name"
            type="text"
            className="form-control "
            placeholder="nama belakang"
            value={dataProfile.last_name}
            onChange={handleInputChange}
          />
        </form>
        {isEditing ? (
          <>
          
            <button className="btn-Logout mt-4" onClick={handleUpdate}>Simpan</button>
            <button className="btn-Logout mt-4" onClick={handleEditToggle}>Batal</button>
          </>
        ) : (
          <button className="btn-Logout mt-4" onClick={handleEditToggle}>Edit</button>
        )}
        <button className="btn-profile mt-4" onClick={handleLogout}>Logout</button>
      </div>
      
    </>
  );
};

export default FormProfil;


