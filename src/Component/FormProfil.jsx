import { ImageAlt } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../Style/FormProfil.css";





const FormProfil = () => {


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    
    console.log("File yang diunggah:", file);
  };
 
  





  

  

  
  return (
    <>
      <div className="header-border mt-5">
        <div className="berder" />
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
            className="form-control "
           placeholder="John Doe@gmail.com" 
     
           
            />
        

        
          <label className="text-label">Nama Depan</label>
          <input
            type="text"
            className="form-control"
            placeholder="nama depan"
            
            
          />
       
        
          <label className="text-label">Nama Belakang</label>
          <input
            type="text"
            className="form-control"
            placeholder="nama belakang"
           
            
          />
        </form>
        
        <Link to={"/"}><button className="btn-Logout mt-4">Logout</button></Link>
        <button className="btn-profile mt-4">Simpan</button>
      </div>
    </>
  );
};

export default FormProfil;


